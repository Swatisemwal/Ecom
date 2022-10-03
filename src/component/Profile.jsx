import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import pic from "../assests/images/noimage.png"
import { User } from "./store/UserContextProvider"
export default function Profile() {
    var [user, setuser] = useState({})
    var { getSingle } = useContext(User)
    async function getAPIData() {
        var item = {
            _id: localStorage.getItem("userid")
        }
        const response = await getSingle(item)
        setuser(response.data)
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    {user.pic ?
                        <img src={require(`../assests/productimages/${user.pic}`)} height="520px" width="500px" /> :
                        <img src={pic} height="520px" width="500px" />
                    }
                </div>
                <div className='col-md-6 col-12'>
                    <h5 className='background text-light text-center p-1'>Buyer Profile Section</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Full Name</th>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <th>User Name</th>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <th>Email Address</th>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{user.phone}</td>
                            </tr>
                            <tr>
                                <th>House Number or Building Number</th>
                                <td>{user.addressline1}</td>
                            </tr>
                            <tr>
                                <th>Street Number or Near By</th>
                                <td>{user.addressline2}</td>
                            </tr>
                            <tr>
                                <th>Village or Locality</th>
                                <td>{user.addressline3}</td>
                            </tr>
                            <tr>
                                <th>PIN</th>
                                <td>{user.pin}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{user.city}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>{user.state}</td>
                            </tr>
                            <tr>
                                <th colSpan={2}><Link to="/update-profile" className='text-decoration-none p-1 d-block text-center rounded background text-light mybtn w-100 btn-sm'>Update Profile</Link></th>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

