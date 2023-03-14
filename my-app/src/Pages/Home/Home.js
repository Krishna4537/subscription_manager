import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import data from "../../../public/Assets/data.json";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState();

  const fetchTrending = async () => {
    const { data } = await axios.get(`/Assets/data.json`);
    console.log(data);

    setContent(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">My Subscribed APPS</span>
      <div className="subscribe">
        {content &&
          content.user.apps.map((app) => (
            <div key={app.id}>
              <img src="https:/via.placeholder.com/350x200" alt="product" />
              <h4>{app.name}</h4>
              <p>{app.plan.price}</p>
              <p>{app.plan.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
