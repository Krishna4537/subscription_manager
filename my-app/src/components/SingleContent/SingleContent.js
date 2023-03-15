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
