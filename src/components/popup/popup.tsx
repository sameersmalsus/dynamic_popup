import React, { useState } from "react";
import './style.css';


const PopupFunction = (props: any) => {
    const [editData, setEditData] = useState(props.props);
    const updateDetails = () => {
        console.log("click on edit profile");
    }
    return (
        <div>
            <div className="popup-section">
                <div className="popup-container">
                    <h2 className="popup-section-heading">Edit Profile</h2>
                    <div className="form-section">
                        <form className="row g-3">
                            <div className="col-12">
                                <label className="text-start form-label">First Name</label>
                                <input type="text" className="form-control" defaultValue={props.props.firstName} onChange={(e) => console.log("hi")}  />
                            </div>
                            <div className="col-12">
                                <label className="text-start form-label">Last Name</label>
                                <input type="text" className="form-control" defaultValue={props.props.lastName} onChange={(e) => console.log("hi")}  />
                            </div>
                          
                            <div className="col-md-12">
                                <label className="text-start form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" defaultValue={props.props.Email} onChange={(e) => console.log("hi")} />
                            </div>
                            <div className="col-12">
                                <label className="text-start form-label">Mobile</label>
                                <input type="text" className="form-control" defaultValue={props.props.Mobile} onChange={(e) => console.log("hi")}  />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary" onClick={updateDetails}>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupFunction;