import React, { useState, useContext } from 'react'
import { FaTimes } from  'react-icons/fa';
import { BudgetContext } from '../App';
import { categories, recordTypes } from '../data';
// import uuid from 'react-uuid';
import { v4 as uuidv4 } from 'uuid';

const RecordModal = () => {

    // const transDatesObj = {
    //     day: "",
    //     month: "",
    //     date: "",
    //     year: ""
    // }

    // console.log(transDatesObj);


    // const now = new Date();
    // const theDate = now.toDateString();
    // console.log(theDate);
    // const dateArray = theDate.split(" ");
    // console.log(dateArray);
    // dateArray.forEach(el => {

    // })


    // const RECORD_STORAGE_KEY = 'records';

    const [record, setRecords] = useState([]);
    const [myRecord, setMyRecords] = useState({
        recordType: '',
        accountName: '',
        category: '',
        amount: ''
    });

    const recordModalContext = useContext(BudgetContext);
    const closeModal = recordModalContext.closeRecordModal;
    const addedAccounts = recordModalContext.addedAccounts;
    const getSavedRecords = recordModalContext.getSavedRecords;
    // const savedRecords = recordModalContext.savedRecords;

    // useEffect(()=> {
    //     localStorage.setItem(RECORD_STORAGE_KEY, JSON.stringify(savedRecords));
    // }, [savedRecords]);
    // const getAccounts = modalContext.getAccounts;
    

    // handling input field change
    const handleChange = (e) => {
        // checking for the name of the target
        const name = e.target.name;
        const value = e.target.value;
        setMyRecords({...myRecord, [name]:value});
    }

    // handling submission
    const handleSubmission = (e) => {
        e.preventDefault();
        if(myRecord.recordType && myRecord.accountName && myRecord.category && myRecord.amount) {
            const newRecord = {...myRecord, id: uuidv4()};
            setRecords([...record, newRecord]);
            getSavedRecords(newRecord);
            
            // TODO clear the form and exit modal
            setMyRecords({
                recordType: '',
                accountName: '',
                category: '',
                amount: ''
            });

            // closing the modal
            closeModal();
        } else {
            alert("All the fields are required");
        }
    }


    // handling closing of modal
    const handleCloseModal = () => {
        closeModal();
    }
  return (
    <section className='main-modal-container'>
        <div className="main-modal-card">
            <div className="modal-header">
                <h3>ADD RECORD</h3>
                <FaTimes onClick={handleCloseModal}  />
            </div>
            <div className="modal-body">
                <div className="form-section">
                    <form action="" name="myForm">
                        <div className="form-group">
                            <label htmlFor="recordType">Record Type</label>
                            <select
                                type="text"
                                name="recordType"
                                id="recordType"
                                value={myRecord.recordType}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select Record</option>
                                {
                                    recordTypes.map((item) => {
                                        return (
                                            <option value={item.record} key={item.id}>{item.record}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountName">Account</label>
                            <select
                                type="text"
                                name="accountName"
                                id="accountName"
                                value={myRecord.accountName}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select Account</option>
                                {
                                    addedAccounts.map((account) => {
                                        return (
                                            <option value={account.accountName} key={account.id}>{account.accountName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                type="text"
                                name="category"
                                id="category"
                                value={myRecord.category}
                                onChange={handleChange}
                                className="form-control"
                            >
                                <option value="">Select Category</option>
                                {
                                    categories.map((category) => {
                                        return (
                                            <option value={category.type} key={category.id}>{category.type}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="startingAmount">Amount</label>
                            <input
                                type="text"
                                name="amount"
                                id="amount"
                                placeholder='Enter Amount'
                                value={myRecord.amount}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <button type='button' onClick={handleSubmission}>
                                Save
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </section>
  )
}

export default RecordModal