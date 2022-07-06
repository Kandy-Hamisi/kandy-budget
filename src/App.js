import React, { useEffect, useReducer, useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import AccountContainer from './components/AccountContainer';
import { reducer, recordReducer } from './reducer';
import CardsContainer from './components/CardsContainer';


export const BudgetContext = React.createContext();

// the modal default state
const defaultState = {
  isModalOpen: false,
}

const initialState = {
  isRecordModalOpen:false,
}



const App = () => {
  const LOCAL_STORAGE_KEY = "myaccounts";
  const RECORDS_STORAGE_KEY = 'records';
  // modal reducer
  const [modalState, dispatch] = useReducer(reducer, defaultState);


  // record modal reducer
  const [recordModalState, dispatcher] = useReducer(recordReducer, initialState);

  // I want to get the added accounts from the modal and pass them to the other components
  const [addedAccounts, setAddedAccounts] = useState([]);
  
  // get the records from the record modal
  const [savedRecords, setSavedRecords] = useState([]);

  // specific account details
  const [specificRecords, setSpecificRecords] = useState([]);

  // console.log(specificAccountDetails);
  // function to get the saved records
  const getSavedRecords = (recordsArray) => {
    setSavedRecords([...savedRecords, recordsArray]);
  };

  // retrieving the added accounts from the local storage
  useEffect(() => {
    const retrieveAccounts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveAccounts) {
      setAddedAccounts(retrieveAccounts);
    }
  }, []);
  
  // storing the added accounts to the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addedAccounts));
  }, [addedAccounts]);

  // retrieve the records

  useEffect(() => {
    const retrieveRecords = JSON.parse(localStorage.getItem(RECORDS_STORAGE_KEY));
    if (retrieveRecords) {
      setSavedRecords(retrieveRecords);
    }
  }, []);

  // adding the saved records to the local storage
  useEffect(() => {
    localStorage.setItem(RECORDS_STORAGE_KEY, JSON.stringify(savedRecords));
  }, [savedRecords]);


  // a function to get the added accounts from the modal
  const getAccounts = (accountArray => {
    setAddedAccounts([...addedAccounts, accountArray]);
  });

  // handling Account display
  const handleAccountDisplay = () => {
    dispatch({ type: 'OPEN_MODAL'});
  }

  const handleRecordModalDisplay = () => {
    dispatcher({ type: 'OPEN_MODAL'});
  }

  // closing the modal
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL'});
  }

  const closeRecordModal = () => {
    dispatcher({ type: 'CLOSE_MODAL'});
  }

  // function to get the details of the specific record
  const getSpecificRecords = (specificAccountRecord) => {
    setSpecificRecords([...specificRecords, specificAccountRecord]);
  }


  return (
    <React.Fragment>
      
      <BudgetContext.Provider
        value={
          {
            modalState,
            handleAccountDisplay,
            handleRecordModalDisplay,
            recordModalState,
            closeModal,
            closeRecordModal,
            getAccounts,
            getSavedRecords,
            getSpecificRecords,
            addedAccounts,
            savedRecords
          }
        }
      >
        <Navbar />
        <main className="main-section">
          <AccountContainer />
          <CardsContainer />
        </main>
      </BudgetContext.Provider>
    </React.Fragment>
  )
}

export default App