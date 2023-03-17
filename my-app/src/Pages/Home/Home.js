import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./Home.css";
// const fs = require("fs");

const Home = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState();
  const [filterOption, setFilterOption] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchTrending = async () => {
    const { data } = await axios.get(`/Assets/data.json`);
    setContent(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);

  useEffect(() => {
    if (content) {
      let filteredApps = [...content.user.apps];
      if (filterOption === "price") {
        filteredApps.sort((a, b) => a.plan.price - b.plan.price);
      } else if (filterOption === "name") {
        filteredApps.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filterOption === "status") {
        filteredApps = filteredApps.filter(
          (app) => app.subscription.status === "active"
        );
      }
      setFilteredApps(filteredApps);
    }
  }, [filterOption, content]);

  useEffect(() => {
    if (content) {
      const filteredApps = content.user.apps.filter((app) =>
        app.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredApps(filteredApps);
    }
  }, [searchInput]);

  const handleFilterClick = (option) => {
    setFilterOption(option);
  };

  const handleSearchQueryChange = (event) => {
    setSearchInput(event.target.value);
  };

  const updateJsonOnEdit = (index, appdata) => {
    console.log(appdata);
    let temp = content;
    temp.user.apps[index] = appdata;
    setContent(temp);
    console.log(content);
  };

  return (
    <div>
      <span className="pageTitle">My Subscribed APPS</span>
      <div className="filterButtons">
        <Stack direction="row" spacing={1}>
          <Chip
            style={{ margin: 2 }}
            label="Sort by Price"
            variant="outlined"
            backgroundcolour="14264A"
            clickable
            onClick={() => handleFilterClick("price")}
          />
          <Chip
            style={{ margin: 2 }}
            label="Sort by Name"
            variant="outlined"
            clickable
            onClick={() => handleFilterClick("name")}
          />
          <Chip
            style={{ margin: 2 }}
            label="Show Active"
            variant="outlined"
            clickable
            onClick={() => handleFilterClick("status")}
          />
        </Stack>
        <TextField
          label="Search"
          variant="outlined"
          value={searchInput}
          onChange={handleSearchQueryChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="trending">
        {filteredApps?.map((app) => (
          <SingleContent
            key={app.id}
            id={app.id}
            poster={app.logo}
            title={app.name}
            price={app.plan.price}
            plan_type={app.plan.name}
            app={app}
            onSave={updateJsonOnEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
