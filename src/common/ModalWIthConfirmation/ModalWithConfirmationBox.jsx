import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide } from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export default function ModalWithConfirmationBox({
  open,
  title,
  children,
  handleClose,
  handleSubmit,
  primaryButton,
  secondaryButton,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          {primaryButton}
        </Button>
        <Button onClick={handleSubmit} variant="contained" autoFocus>
          {secondaryButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
