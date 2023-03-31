import React, {useEffect, useState} from 'react';

function Patients() {

    const [patients, setPatients] = useState([]);
    const fetchData = async () => {
        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/patients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setPatients(body.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Patients</h4>

                <div className="card">
                    <div className="table-responsive text-nowrap">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Patient ID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                            {
                                patients.map((patient) => {
                                    return <tr>
                                        <td>
                                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{patient.patientId}</strong>
                                        </td>
                                        <td>{patient.name}</td>
                                        <td>
                                            {new Date(patient.createdAt).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {new Date(patient.createdAt).toLocaleTimeString()}
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

export default Patients;