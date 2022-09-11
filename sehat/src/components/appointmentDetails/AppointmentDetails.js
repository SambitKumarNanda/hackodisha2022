import React from 'react'
import './css/approintmentDetails.css'

const AppointmentDetails = () => {
  return (
    <div className="m-5 hospital-details-container">
        <h2 className='hospital-details-heading'>Enter Details</h2>
        <div className="row">
            <div className="col">
                <label htmlFor="txt">Hospital Name</label><br />
                <input type="text" name="hospName" />
            </div>
            <div className="col">
                <label htmlFor="number">Hospital Contact Number</label><br />   
                <input type="number" name="hospNum" id="num" />
            </div>
        </div>
        <div className="row">
        <div className="col">
                <label htmlFor="txt">Hospital Street</label><br />
                <input type="text" name="hospStreet" />
            </div>
            <div className="col">
                <label htmlFor="txt">Hospital Locality</label><br />
                <input type="text" name="hospLocality" />
            </div>
        </div>
        <div className="row">
        <div className="col">
                <label htmlFor="num">Hospital Pincode</label><br />
                <input type="number" name="hospPin" />
            </div>
            <div className="col">
                <label htmlFor="txt">Hospital Description</label><br />
                <textarea id="textArea" rows="3" cols="50" name="hospDescription"  />
            </div>
        </div>
        
        <button className='btn btn-info hospital-details-btn'>Submit</button>
    </div>
  )
}

export default AppointmentDetails