'use client'
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { toast } from "react-toastify";
import instance from "../instance/instance";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#1c1c1c",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  outline: "none",
  color: "white",
};

export const Settings = () => {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUsername(localStorage.getItem("username"));
      setEmail(localStorage.getItem("email"));
    }
  }, []);

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      password: password,
    };

    try {
      const response = await instance.post("/auth/changepassword", data);
      if (response.data) {
        // console.log("Password changed ");
        setPassword("");
        toast.success("Password updated");
        handleClose();
      }
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  return (
    <>
      <p
        onClick={handleOpen}
        className="cursor-pointer text-cyan-50 text-xl" style={{ marginLeft: "50px", marginTop: "-25px" }}>
        Change Password
      </p>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
                <Typography variant="h4" component="h2" className="text-center">
                Change Password
                </Typography>
            <div>
              <Typography variant="subtitle1" className="text-gray-400">
                Username
              </Typography>
              <Typography variant="body1" className="mt-2">
                {username}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" className="text-gray-400 mt-7">
                Email
              </Typography>
              <Typography variant="body1" className="mt-2">
                {email}
              </Typography>
            </div>
            <form onSubmit={handleChangePassword} className="space-y-6 mt-4">
              <div>
                <Typography variant="subtitle1" className="text-gray-400">
                  New Password
                </Typography>
                <TextField
                  id="new-password"
                  name="new-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#333333",
                      borderRadius: "4px",
                    },
                  }}
                />
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="mt-5"
              >
                Change Password
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Settings;