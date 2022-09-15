import './App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Game from "./pages/Game"
import MyReviews from "./pages/MyReviews"
import AddNewGame from './pages/AddNewGame';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my_reviews" element={<MyReviews />} />
        <Route path="/add_new_game" element={<AddNewGame />} />
      </Routes>
    </div>
  );
}

export default App;
