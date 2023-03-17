import { img_300, unavailable } from "../../Config/Config";
import "./SingleContent.css";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { TextField, Button } from "@mui/material";

const SingleContent = ({
  id,
  poster,
  title,
  price,
  plan_type,
  app,
  onSave,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(title);
  const [description, setDescription] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    // if (!app) {
    app.name = name;
    app.description = description;
    onSave(parseInt(app.id) - 1, app);
    // }

    // if (!apps || apps.length === 0) {
    //   // handle error condition
    //   console.log("no apps available");
    //   return;
    // }
    // const appIndex = apps.findIndex((app) => app.id === id);
    // const app = apps[appIndex];
    // const updatedApp = {
    //   ...app,
    //   name,
    //   description,
    //   subscription: {
    //     start_date,
    //     end_date,
    //     status,
    //   },
    // };
    // const updatedApps = [...apps];
    // updatedApps[appIndex] = updatedApp;
    // setApps(updatedApps);
    handleClose();
  };

  return (
    <div className="media" id={id}>
      <img
        className="poster"
        src={poster ? `${poster}` : unavailable}
        alt={title}
        height="200px"
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {price}
        <span className="subTitle">{plan_type}</span>
      </span>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        style={{ backgroundColor: "whitesmoke" }}
        open={open}
        onClose={handleClose}
      >
        <div className="editModal">
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            variant="outlined"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Start Date"
            variant="outlined"
            type="date"
            value={start_date}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="End Date"
            variant="outlined"
            type="date"
            value={end_date}
            onChange={(e) => setEndDate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            variant="outlined"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleEdit}>Save Changes</Button>
        </div>
      </Modal>
    </div>
  );
};

export default SingleContent;
