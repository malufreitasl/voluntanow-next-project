import React, { useState } from 'react';

export default function PasswordMatch ({ setPasswordCheck, passwordCheck, setCredentials }) {
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [inputDisabled, setInputDisabled] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setPasswordCheck(true)
            setInputDisabled(true)
        }

    };

    const validate = () => {
        let errors = {};
        let isValid = true;

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Por favor, insere uma palavra-passe válida";
        }

        if (!input["confirmpassword"]) {
            isValid = false;
            errors["confirmpassword"] = "Por favor, repete a tua palavra-passe.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirmpassword"] !== "undefined") {
            if (input["password"] !== input["confirmpassword"]) {
                isValid = false;
                errors["password"] = "A palavra-passe e a sua confimação não são iguais.";
            }
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div>
            <div className="row header">
                <div className="col-sm-12 btn btn-info"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row form-group container txtspace">
                    <div className="text-sm mt-2">
                        <label htmlFor="password">Palavra-Passe</label>
                    </div>
                    <div className="col-sm-8">
                        <input
                            type="password"
                            name="password"
                            value={input.password || ''}
                            onChange={handleChange}
                            className="form-control w-full h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg"
                            placeholder=""
                            id="password" 
                            required
                            disabled={inputDisabled}
                            />

                        <div className="text-danger text-sm text-center my-4 text-red-warning">{errors.password}</div>
                    </div>
                </div>

                <div className="row form-group container">
                    <div className="text-sm col-sm-4">
                        <label htmlFor="password">Confirmar Palavra-Passe:</label>
                    </div>
                    <div className="col-sm-8">
                        <input
                            type="password"
                            name="confirmpassword"
                            value={input.confirmpassword || ''}
                            onChange={handleChange}
                            className="form-control w-full h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg"
                            id="confirmpassword"
                            required
                            disabled={inputDisabled}
                            />

                        <div className="text-danger text-sm text-center text-red-warning">{errors.confirmpassword}</div>
                    </div>
                </div>

            </form>
            {!passwordCheck &&
                <div className='w-full flex justify-center'>
                    <button onClick={handleSubmit} className="mt-4 h-12 px-4 text-white bg-orange-primary rounded-lg">2 de 3 passos...</button>
                </div>
            }
        </div>
    );
};


