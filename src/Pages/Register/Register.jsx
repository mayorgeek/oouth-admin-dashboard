import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();

        await fetch("http://localhost:8080/api/v1/auth/register/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        })
            .then((response) => response.json())
            .then((body) => {
                document.getElementById("name").value = '';
                document.getElementById("email").value = '';
                document.getElementById("password").value = '';

                setMessage(body.message);
            });
    }

    return (
        <div>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mb-2">Create an account</h4>

                                {message &&
                                    <p className="bg-success text-white fw-semibold p-3 rounded mb-4">
                                        {message}
                                    </p>
                                }

                                <form id="registerForm" className="mb-3" method="POST" onSubmit={submitHandler}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            autoFocus
                                            onChange={event => setName(event.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            autoFocus
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                                onChange={event => setPassword(event.target.value)}
                                            />
                                            <span className="input-group-text cursor-pointer"><i
                                                className="bx bx-hide"></i></span>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-primary d-grid w-100">Sign up</button>
                                </form>

                                <p className="text-center">
                                    <span>Already have an account?</span>
                                    <NavLink to="/auth/login">
                                        <span>Sign in instead</span>
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;