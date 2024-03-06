import React from 'react';

class PasswordMatch extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validate()) {
            let input = {};
            input["password"] = "";
            input["confirmpassword"] = "";
            this.setState({ input: input });

            alert('Conta criada.');
        }
    }

    validate() {
        let input = this.state.input;
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

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return (
            <div>
                <div className="row header">
                    <div className="col-sm-12 btn btn-info">
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row form-group container txtspace">
                        <div className="text-sm mt-2">
                            <label htmlFor="password">Palavra-Passe</label>
                        </div>
                        <div className="col-sm-8">
                            <input
                                type="password"
                                name="password"
                                value={this.state.input.password}
                                onChange={this.handleChange}
                                className="form-control w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg"
                                placeholder=""
                                id="password" />

                            <div className="text-danger text-sm text-center my-4
                            ">{this.state.errors.password}</div>
                        </div>
                    </div>
                        
                    <div className="row form-group container">
                        <div className="col-sm-4">
                            <label htmlFor="password">Confirmar Palavra-Passe:</label>
                        </div>
                        <div className="col-sm-8">
                            <input
                                type="password"
                                name="confirmpassword"
                                value={this.state.input.confirmpassword}
                                onChange={this.handleChange}
                                className="form-control w-80 h-12 pl-4 bg-gray-terciary shadow-inner rounded-lg"
                                id="confirmpassword" />

                            <div className="text-danger text-sm text-center my-4">{this.state.errors.confirmpassword}</div>
                        </div>
                    </div>

                    <input type="submit" value="" className="btn btn-info mrgnbtn" />
                </form>
            </div>
        );
    }
}

export default PasswordMatch;
