import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';
import Films from './Pages/Films';
import Lists from './Pages/Lists';
import Members from './Pages/Members';
import Journal from './Pages/Journal';
import Navbar from './Components/Navbar/NavigationBar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/films" element={<Films />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/members" element={<Members />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Router>
  );
}

export default App;