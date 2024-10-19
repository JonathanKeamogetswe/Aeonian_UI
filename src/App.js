import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './screens/Register';
import Login from './screens/Login';
import Employee from './screens/Employee';
import Edit from './screens/Edit';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Login />} />
        <Route exact path='/add_employee' element={<Register />} />
        <Route exact path='/emloyee' element={<Employee />} />
        <Route exact path='/edit_employee' element={<Edit />} />

        
      </Routes>
    </Router>
  );
}
export default App;
