import React, {useEffect, useState} from 'react';

function Home() {

    const [user, setUser] = useState({});

    const [appointments, setAppointments] = useState(0);
    const [patients, setPatients] = useState(0);
    const [doctors, setDoctors] = useState(0);
    const [transactions, setTransactions] = useState(0);

    const fetchData = async () => {
        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/profile/admin", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setUser(body.data);
            });

        await fetch("http://localhost:8080/api/v1/appointments/count", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setAppointments(body.data);
            });

        await fetch("http://localhost:8080/api/v1/patients/count", {
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

        await fetch("http://localhost:8080/api/v1/doctors/count", {
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

        await fetch("http://localhost:8080/api/v1/transactions/count", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setTransactions(body.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                        <div className="bg-info card">
                            <div className="card-body">
                                <span className="fw-semibold d-block mb-1 text-white">Appointments</span>
                                <h3 className="card-title mb-2 text-white">{appointments}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                        <div className="bg-info card">
                            <div className="card-body">
                                <span className="fw-semibold d-block mb-1 text-white">Patients</span>
                                <h3 className="card-title mb-2 text-white">{patients}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                        <div className="bg-info card">
                            <div className="card-body">
                                <span className="fw-semibold d-block mb-1 text-white">Doctors</span>
                                <h3 className="card-title mb-2 text-white">{doctors}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                        <div className="bg-info card">
                            <div className="card-body">
                                <span className="fw-semibold d-block mb-1 text-white">Transactions</span>
                                <h3 className="card-title mb-2 text-white">{transactions}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;