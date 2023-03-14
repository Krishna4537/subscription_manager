import logo from "./logo.svg";
import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import { Container } from "@mui/material";

//pages
import Home from "./Pages/Home/Home";
import Analytics from "./Pages/Analytics/Analytics";
import Discover from "./Pages/Discover/Discover";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/analytics" element={<Analytics />} />
            <Route path="/discover" element={<Discover />} />
            {/* <Route path="/search" component={Search} /> */}
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </>
  );
}

export default App;
