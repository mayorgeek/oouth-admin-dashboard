import React, {useState} from 'react';

function AddDrug() {

    const [name, setName] = useState(0);
    const [treatment, setTreatment] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        let token = localStorage.getItem("auth_token");

        await fetch("http://localhost:8080/api/v1/drugs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                treatment: treatment,
            }),
        })
            .then((response) => response.json())
            .then((body) => {
                document.getElementById("name").value = '';
                document.getElementById("treatment").value = '';
            });
    };

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">Add a new Drug</h4>

                <div className="card mb-4">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="basic-default-amount">Name</label>
                                <input id="name" type="text" className="form-control" onChange={event => setName(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="basic-default-narration">What does it cure?</label>
                                <input id="treatment" type="text" className="form-control" onChange={event => setTreatment(event.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddDrug;