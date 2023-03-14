import { useEffect } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate, Outlet } from "react-router-dom";

const RootBox = styled(Box)({
  width: "100%",
  position: "fixed",
  bottom: 0,
  zIndex: 100,
});

const BottomNavigation2 = styled(BottomNavigation)({
  backgroundColor: "#2d313a !important",
});

const useStyles = () => ({
  label: {
    color: "white",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigation = (event, newValue) => {
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/analytics");
    } else if (newValue === 2) {
      navigate("/discover");
    } else if (newValue === 3) {
      navigate("/search");
    }
  };

  useEffect(() => {
    // Reset the value of the BottomNavigation when the route changes
    //handleNavigation(null, 0);
  }, []);

  return (
    <RootBox>
      <BottomNavigation2 value={0} onChange={handleNavigation} showLabels>
        <BottomNavigationAction
          classes={{ label: classes.label }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          classes={{ label: classes.label }}
          label="Analytics"
          icon={<InsertChartIcon />}
        />
        <BottomNavigationAction
          classes={{ label: classes.label }}
          label="Discover"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          classes={{ label: classes.label }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation2>
      <Outlet />
    </RootBox>
  );
}
