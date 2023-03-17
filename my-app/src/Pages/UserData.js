// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SingleContent from "../../components/SingleContent/SingleContent";
// import "./Home.css";

// const Home = () => {
//   const [page, setPage] = useState(1);
//   const [content, setContent] = useState();
//   const [filterOption, setFilterOption] = useState("");
//   const [filteredContent, setFilteredContent] = useState([]);

//   const fetchTrending = async () => {
//     const { data } = await axios.get(`/Assets/data.json`);
//     setContent(data);
//   };

//   useEffect(() => {
//     window.scroll(0, 0);
//     fetchTrending();
//   }, [page]);

//   useEffect(() => {
//     if (content) {
//       let filteredApps = [...content.user.apps];
//       if (filterOption === "price") {
//         filteredApps.sort((a, b) => a.plan.price - b.plan.price);
//       } else if (filterOption === "name") {
//         filteredApps.sort((a, b) => a.name.localeCompare(b.name));
//       } else if (filterOption === "status") {
//         filteredApps = filteredApps.filter(
//           (app) => app.subscription.status === "active"
//         );
//       }
//       setFilteredContent(filteredApps);
//     }
//   }, [filterOption, content]);

//   const handleFilterClick = (option) => {
//     setFilterOption(option);
//   };

//   return (
//     <div>
//       <span className="pageTitle">My Subscribed APPS</span>
//       <div className="filterButtons">
//         <button onClick={() => handleFilterClick("price")}>
//           Sort by Price
//         </button>
//         <button onClick={() => handleFilterClick("name")}>Sort by Name</button>
//         <button onClick={() => handleFilterClick("status")}>Show Active</button>
//       </div>
//       <div className="trending">
//         {filteredContent.map((app) => (
//           <SingleContent
//             key={app.id}
//             id={app.id}
//             poster={app.logo}
//             title={app.name}
//             price={app.plan.price}
//             plan_type={app.plan.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// sinle content
import { img_300, unavailable } from "../../Config/Config";
import "./SingleContent.css";
// import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({ id, poster, title, price, plan_type }) => {
  return (
    <div className="media" id={id}>
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {price}
        <span className="subTitle">{plan_type}</span>
      </span>
    </div>
  );
};

export default SingleContent;
