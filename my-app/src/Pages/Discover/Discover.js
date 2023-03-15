import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Discover.css";

const Discover = () => {
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

  return (
    <div>
      <span className="pageTitle">My Subscribed APPS</span>
      <div className="discover">
        {content &&
          Object.keys(content).map((key, index) => (
            <div className="Total" key={index}>
              <h1>
                {key} : {content[key].total}
              </h1>
              <br />
              {content[key].apps.map((app) => (
                <SingleContent
                  key={app.id}
                  id={app.id}
                  title={app.name}
                  price={app.plan.price}
                  plan_type={app.plan.name}
                />

                // <div key={app.id}>
                //   <img src="https:/via.placeholder.com/350x200" alt="product" />
                //   <h4>{app.name}</h4>
                //   <p>{app.plan.price}</p>
                //   <p>{app.plan.name}</p>
                // </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Discover;
