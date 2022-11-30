import React, { useState } from "react";
import PopupFunction from "../popup/popup";
import './style.css';

const UserTable = (props:any) => {
    const [popupStatus, setPopupStatus] = useState(false);
    const [itemData, setItemData] = useState();
    const [userCurrentId, setUserCurrentId] = useState(0);
    const userData = [
        {
            userId:1, firstName:"Rajat", lastName:"Kumar", Email:"rajat@gmail.com", Mobile: "123456789" 
        },
        {
            userId:2, firstName:"Alok", lastName:"Kumar", Email:"alok@gmail.com", Mobile: "1234789" 
        },
        {
            userId:3, firstName:"Avinash", lastName:"Kumar", Email:"avinash@gmail.com", Mobile: "123456789" 
        },
    ]
    const editProfile =(itemData:any) =>{
          setPopupStatus(true);
          setItemData(itemData);
    }

    return (
        <div>
            <div className="table-section">
                <div className="table-container">
                    <h2 className="table-section-heading">
                        User Data
                    </h2>
                    <div className="user-data-details">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Edit Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((data, index)=>{
                                    return(
                                        <tr key={index}>
                                        <th scope="row">{data.userId}</th>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.Email}</td>
                                        <td>{data.Mobile}</td>
                                        <td><button onClick={()=>editProfile(data)}>Edit</button></td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {popupStatus ? <PopupFunction props={itemData}/> : null}
        </div>
    )
}

export default UserTable;