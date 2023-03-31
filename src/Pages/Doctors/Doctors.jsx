import React, {useEffect, useState} from 'react';

function Doctors() {

    const [doctors, setDoctors] = useState([]);
    const fetchData = async () => {
        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/doctors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setDoctors(body.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Doctors</h4>

                <div className="card">
                    <div className="table-responsive text-nowrap">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Doctor ID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                            {
                                doctors.map((doctor) => {
                                    return <tr>
                                        <td>
                                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{doctor.doctorId}</strong>
                                        </td>
                                        <td>{doctor.name}</td>
                                        <td>
                                            {new Date(doctor.createdAt).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {new Date(doctor.createdAt).toLocaleTimeString()}
                                        </td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctors;