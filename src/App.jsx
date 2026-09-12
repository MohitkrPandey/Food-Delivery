import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Cards from "./components/Cards"
import ItemCards from "./components/ItemCards"
import {useContext} from "react";
import {ToastContainer} from 'react-toastify';
import Cart  from "./components/Cart";
import { FoodContext } from "./store/FoodContext"; 
function App() {
 const {input}=useContext(FoodContext);

  return (
    <>
     <Home>
          <ToastContainer></ToastContainer>
          <NavBar/>
           
          {input?null:<Cards/>}        
          <ItemCards/>
          <Cart/>
      
          
        

     </Home>
    </>
  )
}

export default App
