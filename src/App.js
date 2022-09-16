import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Game from "./pages/Game"
import MyReviews from "./pages/MyReviews"
import AddNewGame from './pages/AddNewGame';
import MoreInfo from './pages/MoreInfo'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (database, errors) => {


    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        localStorage.setItem(`signedIn`, `${userData.id}`)
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  return (
    <div className="App">
      <NavBar isSubmitted={isSubmitted} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Game />} />
        <Route path="/login" element={<Login handleSubmit={handleSubmit} isSubmitted={isSubmitted} errorMessages={errorMessages} />} />
        <Route path="/my_reviews" element={<MyReviews />} />
        <Route path="/add_new_game" element={<AddNewGame />} />
        <Route path="/more_info/:id" element={<MoreInfo />} />
      </Routes>
    </div>
  );
}

export default App;
