import { Typography } from "@mui/material";
import ModalWithConfirmationBox from "../../../common/ModalWIthConfirmation/ModalWithConfirmationBox";

export default {
  title: "HomePage/ModalWithConfirmationBox",
  component: ModalWithConfirmationBox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const ModalWithConfirmationBoxDefaultMode = {
  args: {
    open: true,
    title: "Default modal confirmation box title",
    children: <Typography> Modal confirmation box description</Typography>,
    handleClose: () => {},
    handleSubmit: () => {},
    primaryButton: "Close",
    secondaryButton: "Submit",
  },
};

export const ModalWithConfirmationBoxCloseMode = {
    args: {
      open: false,
      title: "Default modal confirmation box title",
      children: <Typography> Modal confirmation box description</Typography>,
      handleClose: () => {},
      handleSubmit: () => {},
      primaryButton: "Close",
      secondaryButton: "Submit",
    },
  };