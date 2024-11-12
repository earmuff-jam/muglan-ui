import dayjs from "dayjs";
import ViewDateTime from "../../../common/DateTimePicker/ViewDateTime";

export default {
  title: 'Common/ViewDateTime',
  component: ViewDateTime,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const ViewDateTimeDefaultMode = {
  args: {
    currentTime: dayjs().toISOString(),
    layout: "MMM DD, YYYY"
  },
};

export const ViewDateTimeWithLayoutMode = {
  args: {
    currentTime: dayjs().toISOString(),
    layout: "MM-DD-YYYY"
  },
};

export const ViewDateTimeNoValidTimeMode = {
  args: {
    currentTime: "",
    layout: "MM-DD-YYYY"
  },
};
