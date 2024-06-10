import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewAll = () => {
    const [todos, changeTodos] = useState(
        [] 
    )
    const fetchData = () => {
        axios.get("https://courseapplogix.onrender.com/getdata")
            .then(
                (response) => {
                    console.log(response.data)
                    changeTodos(response.data)
                }
            ).catch(
                (error) => {
                    console.log(error.message)
                    alert(error.message)

                }
            ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (

        <div>
            <NavBar />
            <h1><center>VIEWALL STUDENTS</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">FIRST NAME</th>
                                    <th scope="col">LAST NAME</th>
                                    <th scope="col">COLLEGE</th>
                                    <th scope="col">DATE OF BIRTH</th>
                                    <th scope="col">COURSE</th>
                                    <th scope="col">MOBILE</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">ADDRESS</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value._id}</th>
                                                <td>{value.firstname}</td>
                                                <td>{value.lastname}</td>
                                                <td>{value.college}</td>
                                                <td>{value.dob}</td>
                                                <td>{value.course}</td>
                                                <td>{value.mobile}</td>
                                                <td>{value.email}</td>
                                                <td>{value.address}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll