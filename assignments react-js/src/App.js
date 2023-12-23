import React from "react";
// import Test from "./Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from "./Homes.jsx";
import Abouts from "./Abouts.jsx";
import Contact from "./Contact";
import Navbar from "./Navbar.jsx";

function App() {
     return (
          <>
               <BrowserRouter>
                    <Routes>
                         {/* <Route path="/" element={<Homes />} /> */}
                         {/* <Route path="home" element = "Home" /> */}
                         {/* <Route path="/about" element={<Abouts />} />
                         <Route path="/contact" element={<Contact />} /> */}
                         {/* <Route path="help" element = "Help" /> */}
                        
                         <Route path="/" element={<Navbar/>}>
                              <Route path="home" element={<Homes/>}/>
                              <Route path="abouts" element={<Abouts/>}/>
                              <Route path="contact" element={<Contact/>}/>
                        
                         </Route>

                    </Routes>
               </BrowserRouter>
          </>
     );
}


export default App
