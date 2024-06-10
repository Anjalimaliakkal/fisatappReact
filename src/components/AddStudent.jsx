import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const [data, setData] = useState(
        {
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Add successfully")
                } else {
                    alert("error")
                }
            }
        ).catch()
    }
    return (
        <div>
            <NavBar />
            <div>
                <h1><center>ADD STUDENTS</center></h1>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"></label>
                                    firstname
                                    <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"></label>
                                    lastname
                                    <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"></label>
                                    college
                                    <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"></label>
                                    dob
                                    <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"></label>
                                    course
                                    <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"></label>
                                    mobile
                                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"></label>
                                    email
                                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label"></label>
                                    address
                                    <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent