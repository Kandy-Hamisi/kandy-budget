import React, { useEffect, useReducer, useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import AccountContainer from './components/AccountContainer';
import { reducer } from './reducer';
import CardsContainer from './components/CardsContainer';


export const BudgetContext = React.createContext();

// the modal default state
const defaultState = {
  isModalOpen: false
}

const App = () => {
  const LOCAL_STORAGE_KEY = "myaccounts";
  // modal reducer
  const [modalState, dispatch] = useReducer(reducer, defaultState);

  // I want to get the added accounts from the modal and pass them to the other components
  const [addedAccounts, setAddedAccounts] = useState([]);

  // retrieving the added accounts from the local storage
  useEffect(() => {
    const retrieveAccounts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveAccounts) {
      setAddedAccounts(retrieveAccounts);
      console.log("RETRIEVED: ", addedAccounts);
    }
  }, []);
  
  // storing the added accounts to the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addedAccounts));
    console.log("SAVED: ", addedAccounts);
  }, [addedAccounts]);


  // a function to get the added accounts from the modal
  const getAccounts = (accountArray => {
    setAddedAccounts([...addedAccounts, accountArray]);
  });
  // handling Account display
  const handleAccountDisplay = () => {
    dispatch({ type: 'OPEN_MODAL'});
  }

  // closing the modal
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL'});
  }


  return (
    <React.Fragment>
      <Navbar />
      <BudgetContext.Provider
        value={
          {
            modalState,
            handleAccountDisplay,
            closeModal,
            getAccounts,
            addedAccounts
          }
        }
      >
        <main class="main-section">
          <AccountContainer />
          <CardsContainer />
        </main>
      </BudgetContext.Provider>
    </React.Fragment>
  )
}

export default App