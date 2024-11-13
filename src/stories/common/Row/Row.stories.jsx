import Row from "../../../common/Row/Row";
import { Typography } from "@mui/material";

export default {
  title: "Common/Row",
  component: Row,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const RowDefaultMode = {
  args: {
    marginTop: '0rem',
    firstElement: <Typography>First Element</Typography>,
    secondElement: <Typography>Second Element</Typography>,
  },
};

export const RowCustomMarginTopMode = {
  args: {
    marginTop: '2rem',
    firstElement: <Typography>First Element</Typography>,
    secondElement: <Typography>Second Element</Typography>,
  },
};

export const RowMissingFirstElementMode = {
  args: {
    secondElement: <Typography>Second Element</Typography>,
  },
};

export const RowMissingSecondElementMode = {
  args: {
    firstElement: <Typography>First Element</Typography>,
  },
};
