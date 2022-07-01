import React from 'react'
import { useState } from 'react'
import CancelIcon from '../CancelIcon.png'
import Backdrop from './Backdrop'
import Modal from './Modal'
import prescriptions from '../DummyData/DummyPrescriptions'


function TellerContainer() {

  const drugs = [{
    "id": 1,
    "productName": "Azythromycin",
    "category": "Ethical",
    "unitOfMeasure": "mg",
    "quantity": "90000",
    "stockCode": "AZX234",
    "unitPrice": "mg",
    "validity": "TRUE",
    "createdAt": "2022-03-31T10:45:14Z",
    "updatedAt": "2022-03-31T10:45:17Z",
    "cartQuanity": 1
  },
  {
    "id": 2,
    "productName": "Benlyin 4 Flu",
    "category": "Ethical",
    "unitOfMeasure": "mg",
    "quantity": "90000",
    "stockCode": "AZX234",
    "unitPrice": "mg",
    "validity": "TRUE",
    "createdAt": "2022-03-31T10:45:14Z",
    "updatedAt": "2022-03-31T10:45:17Z",
    "cartQuanity": 1
  }]

  const [addedDrugs, setAddedDrugs] = useState([])
  const removeDrugFromAdded = (toRemoveDrug) => {
    setAddedDrugs(addedDrugs.filter((drug) => { return drug.id !== toRemoveDrug.id }))
  }
  const addDrugToAdded = (toAddDrug) => {
    const oldDrug = addedDrugs.filter((drug) => { return drug.id === toAddDrug.id })
    if (oldDrug.length > 0) {
      setAddedDrugs(addedDrugs.map((drug) => { return drug.id === toAddDrug.id ? { ...drug, cartQuanity: drug.cartQuanity + 1 } : drug }))
    } else {
      setAddedDrugs([...addedDrugs, toAddDrug])
    }
  }

  const [searchedDrugs, setSearchedDrugs] = useState([])

  const [searchText, setSearchText] = useState("")

  const search = (e) => {
    var searchValue = e.target.value
    setSearchText(searchValue)
    setSearchedDrugs(drugs.filter((drug) => { return drug.productName.toLowerCase().includes({ searchValue }, 0) }))
    console.log(setSearchedDrugs)
  }

  const addPrescription = (prescription) => {
    prescription.drugs.array.forEach(drug => {
      setAddedDrugs([...addedDrugs.drug])
    });
  }

  const finalDrugs = searchedDrugs.length > 0 ? searchedDrugs : drugs

  const [modalOpen, setModalOpen] = useState(false)
  // const open = () => setModalOpen(true)
  // const close = () => setModalOpen(false)

  return (
    <div>
      <div className='pharmacist-container' style={{ filter: modalOpen && "blur(5px)" }} onClick={() => setModalOpen(false)}>
        <div className='width-35 '>
          <input className='auth-container drug-search-input'
            placeholder='Search for drugs'
            value={searchText}
            onChange={(e) => search(e)}
          />

          <div className='auth-container pharmacist-drugs-search-results'>
            <div className='pharmacist-drugs-keys'>
              <div className='drug-key drug-ID'>Drug ID</div>
              <div className='drug-key drug-name'>Name</div>
              <div className='drug-key drug-category'>Category</div>
              <div className='horizontal-padding' />
              <div className='horizontal-padding' />
              <div className='horizontal-padding' />
            </div>
            {searchedDrugs.length > 0 ? <>{drugs.map((drug) => {
              return <div className='pharmacist-drugs-keys drug-cell'>
                <div className='drug-cell-text drug-ID'>{drug.id}</div>
                <div className='drug-cell-text drug-name'>{drug.productName}</div>
                <div className='drug-cell-text drug-category'>{drug.category}</div>
                <button className='add-button' onClick={() => { addDrugToAdded(drug) }}>Add</button>
              </div>
            })}</> :
              <>{drugs.map((drug) => {
                return <div className='pharmacist-drugs-keys drug-cell'>
                  <div className='drug-cell-text drug-ID'>{drug.id}</div>
                  <div className='drug-cell-text drug-name'>{drug.productName}</div>
                  <div className='drug-cell-text drug-category'>{drug.category}</div>
                  <button className='add-button' onClick={() => { addDrugToAdded(drug) }}>Add</button>
                </div>
              })}</>}
          </div>
        </div>
        <div className='width-35'>
          <div className='auth-container'>
            <div className='prescription-header'>
              <div className='prescription-text'>Checkout</div>

            </div>
            <div className='prescription-container'>
              <div className='pharmacist-drugs-keys'>
                <div className='drug-key added-drug-quantity'>Quantity</div>
                <div className='drug-key added-drug-name'>Name</div>
                <div className='drug-key added-drug-usage'>Usage</div>
                <div className='horizontal-padding' />
                <div className='horizontal-padding' />
              </div>
              <div className='horizontal-line' />
              {addedDrugs.length > 0 ?
                addedDrugs.map((drug) => {
                  return <div className='pharmacist-drugs-keys added-drug-cell'>
                    <div className='drug-cell-text added-drug-quantity'>{drug.cartQuanity}</div>
                    <div className='drug-cell-text added-drug-name'>{drug.productName}</div>
                    <input className='drug-cell-text added-drug-usage usage-input'
                      placeholder='Add Cipher' />
                    <img src={CancelIcon} alt="Cancel" width={16} onClick={() => { removeDrugFromAdded(drug) }} />
                  </div>
                }) : <></>}
            </div>
            <div className='prescription-header'>
              <button className='action-button price-check'>Stock/Price Check</button>
              <button className='action-button update'>ZWL Payment</button>
              <button className='action-button submit'
                onClick={
                  () => {
                    setModalOpen(true)
                    // alert(modalOpen)
                  }
                }>USD Payment</button>
            </div>
          </div>

        </div>
        <div className='pharmacist-pane-container '>
          <input className='auth-container width-7s0'
            placeholder='Search Prescription'
            value={searchText}
            onChange={(e) => search(e)}
          />

          <div className='auth-container width-7s0'>
            {prescriptions.length > 0 ? <>{prescriptions.map((prescription) => {
              return <div className='pharmacist-drugs-keys drug-cell'>
                <div className='drug-cell-text drug-ID'>{prescription.id}</div>
                <button className='add-button' onClick={() => { addPrescription(prescription) }}>Add</button>
              </div>
            })}</> :
              <>{prescriptions.map((prescription) => {
                return <div className='pharmacist-drugs-keys drug-cell'>
                  <div className='drug-cell-text drug-ID'>{prescription.id}</div>
                  <button className='add-button' onClick={() => { addPrescription(prescription) }}>Add</button>
                </div>
              })}</>}
          </div>
        </div>
      </div >
      {modalOpen && <div className='auth-container modal'>Modal</div>}
    </div>
  )
}

export default TellerContainer