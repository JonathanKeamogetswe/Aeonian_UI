import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();
    const [FirstName, setFirstName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Address, setAddress] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const [Password, setPassword] = useState('');

    function submit() {
        if (FirstName === '') {
            alert('Enter first name');
            return;
        }
        if (Email === '') {
            alert('Enter email');
            return;
        }
        if (PhoneNumber === '') {
            alert('Enter phone number');
            return;
        }
        if (Address === '') {
            alert('Enter address');
            return;
        }
        if (DateOfBirth === '') {
            alert('Enter date of birth');
            return;
        }
        if (Password === '') {
            alert('Enter password');
            return;
        }

        var userInfo = JSON.parse(localStorage.getItem('user_info'));
        var data = {
            name: FirstName,
            email: Email,
            phoneNumber: PhoneNumber,
            address: Address,
            dateOfBirth: DateOfBirth,
            password: Password
        };
        console.log(data);

        axios.post('http://localhost:5000/api/register_user', data).then((respond) => {
            if (respond.data.success) {
                toast.warn(respond.data.message);
                // setTimeout(() => navigate('/employee'), 5000);
            } else {
                toast.warn(respond.data.message);
            }
        });
    }

    return (
        <div>
            <ToastContainer />
            <h2>Register</h2>
            <div className="form-group">
                <label>First name</label>
                <input type="text" onChange={(event) => setFirstName(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" onChange={(event) => setEmail(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" onChange={(event) => setPhoneNumber(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" onChange={(event) => setAddress(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" onChange={(event) => setDateOfBirth(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={(event) => setPassword(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <button onClick={() => submit()}>Submit</button>
            </div>
        </div>
    );
}

export default Register;
