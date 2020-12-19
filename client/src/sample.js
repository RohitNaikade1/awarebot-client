import React from 'react';
import './Register.css';
import emailjs from 'emailjs-com';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validName = (val) => /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/i.test(val);
const validNumber = (val) => /^[0][1-9]\d{9}$|^[1-9]\d{9}$/i.test(val);

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobileno: '',
            address: '',
            email: '',
            password: ''
        }
    }


    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onMobileChange = (event) => {
        this.setState({ mobileno: event.target.value })
    }

    onAddressChange = (event) => {
        this.setState({ address: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    wrapperFunction = () => {
        this.onSubmitSignIn();
        this.sendEmail();
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                mobileno: this.state.mobileno,
                address: this.state.address,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })

    }
    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_344msem', 'template_mv3moem', e.target, 'user_o8yYcVTPBiXQG5qn5gomJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
            );
        window.alert('Thanks for registering!');
    }


    render() {
        return (
            <div>
                <div className="tc brs">BikeRentals</div>
                <LocalForm onSubmit={this.sendEmail} className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <Control.text
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        model=".name"
                                        name="Name"
                                        id="name"
                                        onChange={this.onNameChange}
                                        validators={{
                                            required, validName
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validName: 'Enter a valid name!'
                                        }}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="mobileno">Mobile number</label>
                                    <Control.text
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        model=".mobileno"
                                        name="mobileno"
                                        id="mobileno"
                                        onChange={this.onMobileChange}
                                        validators={{
                                            required, validNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".mobileno"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validNumber: 'Enter a valid mobile number'
                                        }}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
                                    <Control.text
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        model=".address"
                                        name="address"
                                        id="address"
                                        onChange={this.onAddressChange}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".address"
                                        show="touched"
                                        messages={{
                                            required: 'Required '
                                        }}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <Control.text
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        model=".email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Enter a valid Email Address'
                                        }}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <Control.text
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        model=".password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}
                                        validators={{
                                            required, minLength: minLength(8)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Password should be greater than 8 characters!'
                                        }}
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={this.wrapperFunction}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Register"
                                />
                            </div>
                        </div>
                    </main>
                </LocalForm>
            </div>
        );
    }
}


export default Register;