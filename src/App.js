import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Place from "./pages/place"; 
import CardData from "./data/CardData.json";
import { useState } from "react";
import './App.css';
import {DataContext, HandleContext} from './data'
import Footer from "./components/footer";
import Header from "./components/header"

CardData.forEach((data, index) => {
  data.imageurl += `meta-home-${index + 1}.png`;
  data.id = index+1;
})

function App() {
  
  const [homeData, setHomeData] = useState(CardData);

  const handleLike = ( id ) => {

    setHomeData(prevHomeData => {
      const newState = prevHomeData.map((data, index)=>{
        if (index === (id - 1)){
          const liked = data.isLiked
          return {...data, isLiked: !liked}
        }

        return data;
      });

      return newState;
    });

  };

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element = {
           
          <HandleContext.Provider value = {handleLike}>
            <DataContext.Provider value = {homeData} >
              <Home /> 
            </DataContext.Provider> 
          </HandleContext.Provider> } />

        <Route path='/place' element = {
         
          <HandleContext.Provider value = {handleLike}>
            <DataContext.Provider value = {homeData} >
              <Place /> 
            </DataContext.Provider> 
          </HandleContext.Provider> } />
        
        {/* <Route path='/contact' element={<ContactPage handleAdd = {addForm} />}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;