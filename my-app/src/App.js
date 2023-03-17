import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//pages
import Home from "./Pages/Home/Home";
import Analytics from "./Pages/Analytics/Analytics";
import Discover from "./Pages/Discover/Discover";
import Button from "./components/Button/Button";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [loggedIn, setlogin] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setlogin(!loggedIn);
      setLoading(false);
    }, 3500);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <Header
          handleLogin={handleLogin}
          loggedIn={loggedIn}
          isLoading={isLoading}
        />

        <div className="app" data-testid="app">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/analytics" element={<Analytics />} />
              <Route
                path="/discover"
                element={
                  <Discover isUserLoggedIn={loggedIn} isLoading={isLoading} />
                }
              />
              {/* <Route path="/search" component={Search} /> */}
              <Route path="*" element={<h1 className="error">Error</h1>} />
            </Routes>
          </Container>
        </div>

        <SimpleBottomNavigation />
      </>
    </ThemeProvider>
  );
}

export default App;
