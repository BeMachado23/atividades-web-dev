import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SignUp({setUsers}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUsers(prev =>[...prev,{name, email}]);
        navigate('/users');
    };
    return(
        <section className="signUp">
        <h2>Preencha os campos</h2>
            <form onSubmit={handleSubmit} className="formSignUp">
                <div className="formGroup">
                    <label>Nome:</label>
                    <input type='text' value={name} onChange={(e)=> setName(e.target.value)}required/>
                </div>
                <div className="formGroup">
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}required/>
                </div>
                    <button type='submit'>Cadastrar</button>
            </form>
        </section>
    )
}

export default SignUp