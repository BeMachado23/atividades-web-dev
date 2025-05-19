import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import SignUp from './components/SignUp';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <div className='centred-container'>
        <Routes>
          <Route path='/' element={
            <div style={{textAlign: 'center', marginTop: '1rem'}}>
              <h2>Bem-vindo!</h2>
              <Link to="signUp">
                <button>Cadastro</button>
              </Link>
            </div>
          }/>
          <Route path='/signUp' element={<SignUp setUsers={setUsers}/>}/>
          <Route path='/users' element={<Users users={users}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
