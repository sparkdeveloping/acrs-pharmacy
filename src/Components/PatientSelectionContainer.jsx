import { useState } from 'react'
import patients from '../DummyData/DummyPatients'
function PatientSelectionContainer({ setPatient }) {

    const [searchText, setSearchText] = useState("")
    const [searchedDrugs, setSearchedDrugs] = useState([])

    const search = (e) => {
        var searchValue = e.target.value
        setSearchText(searchValue)
        // setSearchedDrugs(drugs.filter((drug) => { return drug.productName.toLowerCase().includes({ searchValue }, 0) }))
        console.log(setSearchedDrugs)
    }

    return (
        <div className='auth-container modal shadow search-border'>
            <h2 className='push-left'>Select Patient</h2>
            <div className='horizontal-line'></div>
            <input className='auth-container drug-search-input light-shadow'
                placeholder='Search for Patient'
                value={searchText}
                onChange={(e) => search(e)}
            />
            <div className='patient-keys'>
                <div className='drug-key width-20'>Last Name</div>
                <div className='drug-key width-20'>First Name</div>
                <div className='drug-key drug-category'>Address</div>
                <div className='horizontal-padding' />
                <div className='horizontal-padding' />
                <div className='horizontal-padding' />
            </div>
            {patients.map((patient) => {
                return (
                    <div className='patient-cell' key={patient.name}>
                        <div className='patient-keys'>
                            <div className='width-20 left'>{patient.lastName}</div>
                            <div className='width-20 left'>{patient.firstName}</div>
                            <div>{patient.address}</div>
                        </div>
                        <button className='select-patient' onClick={() => {
                            setPatient(patient)
                        }}>Select</button>
                    </div>)
            })}
        </div>
    )
}

export default PatientSelectionContainer