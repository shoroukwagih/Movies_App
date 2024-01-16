import React, { useState } from "react";

export default function Form() {
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        c_password: "",
    });
    const [errorForm, setErrorForm] = useState({
        name: null,
        email: null,
        userName: null,
        password: null,
        c_password: null,
    });
    const handleFieldChange = (event) => {
        console.log(event.target.value);
        const field_name = event.target.name;
        const field_value = event.target.value;
        const regex_email = /^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const regex_username = /^[a-zA-Z]/;
        switch (field_name) {
            case 'name':
                setRegisterForm({
                    ...registerForm,
                    name: field_value,
                });
                setErrorForm({
                    ...errorForm,
                    name: field_value.length <= 3 ? "This field is required and length > 3 charcter " : null,
                });
                break;
            case 'email':
                setRegisterForm({
                    ...registerForm,
                    email: field_value,
                });
                setErrorForm({
                    ...errorForm,
                    email: field_value.length === 0 ? "This field is required" :
                        (!regex_email.test(field_value)) ? "The email syntax error ex. merna@gmail.com" :
                            null,
                });
                break;
            case 'userName':
                setRegisterForm({
                    ...registerForm,
                    userName: field_value,
                });
                setErrorForm({
                    ...errorForm,
                    userName: field_value.length === 0 ? "This field is required" :
                        (!regex_username.test(field_value)) ? "The userName must be start charcter ex. merna" :
                            null,
                });

                break;
            case 'password':
                setRegisterForm({
                    ...registerForm,
                    password: field_value,
                });
                setErrorForm({
                    ...errorForm,
                    password: field_value.length < 8 ? "This field is required and length >= 8 charcter  " : null,
                });
                break;

            case 'c_password':
                setRegisterForm({
                    ...registerForm,
                    c_password: field_value,
                });
                setErrorForm({
                    ...errorForm,
                    c_password: field_value !== registerForm.password ? "Passwords do not match" : null,
                });
                break;
            default:
                break;
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerForm);
      
    };

    return (
        <>
            <div className="container my-5">
                <h1 className="text-primary mb-3 fs1 text-decoration-underline  text-center fw-bold">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div class="my-3">
                        <label for="nameInput" class="fs-4 form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="nameInput"
                            value={registerForm.name}
                            onChange={handleFieldChange}
                            name="name"
                        />
                        {errorForm.name && (
                            <div id="nameInput" class="form-text text-danger">
                                {errorForm.name}
                            </div>
                        )}
                    </div>
                    <div class="mb-3">
                        <label for="email" class="fs-4 form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            value={registerForm.email}
                            onChange={handleFieldChange}
                            name="email"
                        />
                        {errorForm.email && (
                            <div id="email" class="form-text text-danger">
                                {errorForm.email}
                            </div>
                        )}
                    </div>
                    <div class="mb-3">
                        <label for="userName" class="fs-4 form-label">
                            UserName
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="userName"
                            value={registerForm.userName}
                            onChange={handleFieldChange}
                            name="userName"
                        />
                        {errorForm.userName && (
                            <div id="userName" class="form-text text-danger">
                                {errorForm.userName}
                            </div>
                        )}
                    </div>
                    <div class="mb-3">
                        <label for="password" class="fs-4 form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            value={registerForm.password}
                            onChange={handleFieldChange}
                            name="password"
                        />
                        {errorForm.password && (
                            <div id="password" class="form-text text-danger">
                                {errorForm.password}
                            </div>
                        )}
                    </div>
                    <div class="mb-3">
                        <label for="c_password" class="fs-4 form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            id="c_password"
                            value={registerForm.c_password}
                            onChange={handleFieldChange}
                            name="c_password"
                        />
                        {errorForm.c_password && (
                            <div id="c_password" class="form-text text-danger">
                                {errorForm.c_password}
                            </div>
                        )}
                    </div>
                    <button type="submit" class="btn fs-3 btn-primary">
                        Submit
                    </button>
                </form>

            </div>

        </>
    )
}