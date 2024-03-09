
import React from "react";
import Signup from"./compons/Signup/Signup";
import  Login from "./compons/Login/Login";
import Home from "./compons/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import RequireAuth from "./Context/RequireAuth";
function App() {
  return ( 
    <div>           
       <Router>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
        
            </Routes>
          </AuthProvider>
        </Router>
   </div>
  )
}

export default App;