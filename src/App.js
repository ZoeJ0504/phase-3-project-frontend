import './App.css';
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Game from "./pages/Game"
import MyReviews from "./pages/MyReviews"

function App() {
  return (
    <div className="App">
      hello?
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my_reviews" element={<MyReviews />} />
      </Routes>
    </div>
  );
}

export default App;
