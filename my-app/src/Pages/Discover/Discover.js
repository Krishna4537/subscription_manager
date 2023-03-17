import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import { Grid } from "@mui/material";
import "./Discover.css";
import Loader from "../../components/Loader/Loader";

const Discover = (props) => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState({});

  const fetchTrending = async () => {
    let temp = {};
    const { data } = await axios.get(`/Assets/data.json`);

    data.user.apps.map((item) => {
      let category = "Other";
      if ("catagories" in item) {
        console.log(item.catagories[0]);
        category = item.catagories[0];
      }
      if (!(category in temp)) {
        temp[category] = {
          total: 0,
          apps: [],
        };
      }
      temp[category].total += item.plan.price;
      temp[category].apps.push(item);
    });

    console.log(temp);
    setContent(temp);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  if (props.isLoading) {
    return <Loader component={"Products"} />;
  }
  if (props.isUserLoggedIn) {
    return (
      <div>
        <span className="pageTitle">Discover APPS</span>
        <div className="discover1">
          {content &&
            Object.keys(content).map((key, index) => (
              <div className="Total" key={index}>
                <h1>
                  {key} : {content[key].total} €
                </h1>
                <br />
                <Grid container spacing={2}>
                  {content[key].apps.map((app) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={app.id}>
                      <SingleContent
                        id={app.id}
                        title={app.name}
                        poster={app.logo}
                        price={app.plan.price}
                        plan_type={app.plan.name}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className="content" style={{ textAlign: "center" }}>
      please Login to see discover
    </div>
  );
};

export default Discover;
