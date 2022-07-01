import React from 'react'
import { useState } from 'react'
import CancelIcon from '../CancelIcon.png'
import drugs from '../DummyData/DummyDrugs'
import PatientSelectionContainer from './PatientSelectionContainer'
function PharmacistContainer() {

  const [currentPatient, setCurrentPatient] = useState({ name: "" })
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

  const finalDrugs = searchedDrugs.length > 0 ? searchedDrugs : drugs

  const setPatient = (patient) => {
    let num = generatePrescriptionNumber()
    setCurrentPatient({ ...patient, prescription: { id: num } })
  }

  function generatePrescriptionNumber() {
    return Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
  }

  const clearPatient = () => {
    setCurrentPatient({ name: "" })
  }

  return (
    <div>
      {currentPatient.name === "" ? <div className='full-center'><PatientSelectionContainer setPatient={setPatient} /></div> : <div className='pharmacist-container '>
        <div className='pharmacist-pane-container width-40'>
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
        <div className='pharmacist-pane-container width-50'>
          <div className='auth-container'>
            <div className='prescription-header'>
              <div className='prescription-text'>Prescription</div>
              <div className='prescription-text'>{currentPatient.prescription.id}</div>
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
                    <img src={CancelIcon} width={16} onClick={() => { removeDrugFromAdded(drug) }} />
                  </div>
                }) : <></>}
            </div>
            <div className='prescription-header'>
              <div className='prescription-details'>
                <div className='prescription-header'>
                  <div className='prescription-detail'>First Name</div>
                  <div className='prescription-detail'>{currentPatient.firstName}</div>
                </div>
                <div className='prescription-header'>
                  <div className='prescription-detail'>Middle Name</div>
                  <div className='prescription-detail'>-</div>
                </div>
                <div className='prescription-header'>
                  <div className='prescription-detail'>Last Name</div>
                  <div className='prescription-detail'>{currentPatient.lastName}</div>
                </div>
                <div className='prescription-header'>
                  <div className='prescription-detail'>Address</div>
                  <div className='prescription-detail'>{currentPatient.address}</div>
                </div>
              </div>
              <div className='vertical-line' />
              <div className='prescription-details'>
                <div className='prescription-header'>
                  <div className='prescription-detail'>Medical Centre</div>
                  <div className='prescription-detail'>-</div>
                </div>
                <div className='prescription-header'>
                  <div className='prescription-detail'>Prescribing Doctor</div>
                  <div className='prescription-detail'>-</div>
                </div>
                <div className='prescription-header'>
                  <div className='prescription-detail'>Date</div>
                  <div className='prescription-detail'>-</div>
                </div>
              </div>
            </div>
          </div>
          <div className='prescription-header'>
            <button className='action-button discard' onClick={clearPatient}>Discard</button>
            <button className='action-button update'>Update</button>
            <button className='action-button submit'>Submit</button>

          </div>
        </div>
      </div >
      }
    </div >
  )
}

export default PharmacistContainer