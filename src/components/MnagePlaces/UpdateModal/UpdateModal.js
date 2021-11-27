import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const fieldStyle = {
  width: "90%",
  marginBottom: "16px",
};

export const UpdateModal = ({ open, setOpen, place }) => {
    const {_id, imgUrl, title, details, cost} = place;
  const [name, setName] = React.useState(title);
  const [img, setImg] = React.useState(imgUrl);
  const [desc, setDesc] = React.useState(details);
  const [price, setPrice] = React.useState(cost);

  const handleUpdate = (e) => {
    e.preventDefault();

    
    const newData = {
        title: name,
        imgUrl: img,
        details: desc,
        cost: price
    }
    
    fetch(`https://spooky-cemetery-57161.herokuapp.com/places/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast("🦄 Wow! Place updated", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          handleClose();
        }
      });
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleUpdate}>
            <TextField
              onBlur={(e) => setName(e.target.value)}
              defaultValue={title}
              sx={fieldStyle}
              type="text"
              id="standard-basic"
              label="Title"
              variant="standard"
            />
            <TextField
              onBlur={(e) => setImg(e.target.value)}
              defaultValue={imgUrl}
              sx={fieldStyle}
              type="url"
              id="standard-basic"
              label="ImgUrl"
              variant="standard"
            />
            <TextField
              onBlur={(e) => setDesc(e.target.value)}
              defaultValue={details}
              sx={fieldStyle}
              id="standard-multiline-basic"
              label="Description"
              multiline
              rows={4}
              variant="standard"
            />
            <TextField
              onBlur={(e) => setPrice(e.target.value)}
              defaultValue={cost}
              sx={fieldStyle}
              type="number"
              id="standard-basic"
              label="Cost"
              variant="standard"
            />
            <br />
            <Button variant="contained" type="submit" color="success">
              Update
            </Button>
            
          </form>
        </Box>
      </Modal>
      <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
    </div>
  );
};
