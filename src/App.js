import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element = { <Home />} />
        {/* <Route path='/contact' element={<ContactPage handleAdd = {addForm} />}/> */}
      </Routes>
    </div>
  );
}

export default App;
