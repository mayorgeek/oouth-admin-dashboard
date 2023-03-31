import React, {useEffect, useState} from 'react';

function Drugs() {

    const [drugs, setDrugs] = useState([]);
    const fetchData = async () => {
        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/drugs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((body) => {
                setDrugs(body.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Drugs</h4>

                <div className="card">
                    <div className="table-responsive text-nowrap">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Reference</th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                            {
                                drugs.map((drug) => {
                                    return <tr>
                                        <td>
                                            <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{drug.reference}</strong>
                                        </td>
                                        <td>{drug.name}</td>
                                        <td className="text-truncate">
                                            {drug.treatment}
                                        </td>
                                        <td>
                                            {new Date(drug.createdAt).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {new Date(drug.createdAt).toLocaleTimeString()}
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

export default Drugs;