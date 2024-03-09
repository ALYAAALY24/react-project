import { Container } from "@mui/material";
import Header1 from "../Header/Header1";
import Header2 from "../Header/Header2";
import Header3 from "../Header/Header3";
import Hero from "..//Hero/Hero";
import Main from "..//Main/Main";
import Contact from "../Contact/Contact";
import Footer from "..//Footer/Footer";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../Theme";
import { useAuth } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


import { useState,useEffect } from "react";
import { BeatLoader } from "react-spinners";
const Home=()=>{
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

    const [theme, colorMode] = useMode();

  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    setIsLoading(true);
      // Wait for 3 seconds
      setTimeout(() => {
        setIsLoading(false)
          
      }, 3000);
  }, []);
    return(
        <Container>
             {isLoading? <BeatLoader sx={{
      color:"#fff",
      mx:"auto",
    }} />  :
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
            <Header1/>
    <Header2 />
       <Header3 />
       <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
          <Contact/>
      </Box>
      <Footer/>
      </ThemeProvider>
    </ColorModeContext.Provider>
}
    </Container>
    )}
export default Home;