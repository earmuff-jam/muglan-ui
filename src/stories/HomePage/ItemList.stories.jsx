import { FolderRounded, WorkRounded } from "@mui/icons-material";
import ItemList from "../../features/HomePage/ItemList/ItemList";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default {
  title: "HomePage/ItemList",
  component: ItemList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const ItemListDefaultMode = {
  args: {
    handleClick: () => {},
    dense: true,
    data: [
      {
        id: 1,
        primary: "Primary text 01",
        secondary: "Secondary text 01",
        icon: <FolderRounded />,
      },
      {
        id: 2,
        primary: "Primary text 02",
        secondary: "Secondary text 02",
        icon: <WorkRounded />,
      },
    ],
  },
};

export const ItemListPaddingMode = {
  args: {
    handleClick: () => {},
    dense: false,
    data: [
      {
        id: 1,
        primary: "Primary text 01",
        secondary: "Secondary text 01",
        icon: <FolderRounded />,
      },
      {
        id: 2,
        primary: "Primary text 02",
        secondary: "Secondary text 02",
        icon: <WorkRounded />,
      },
    ],
  },
};

export const ItemListWithReallyLongValuesMode = {
  args: {
    handleClick: () => {},
    dense: false,
    data: [
      {
        id: 1,
        primary: "Therapy Session",
        secondary: dayjs().add(-5, "day").fromNow(),
      },
      {
        id: 2,
        primary: "Westpac",
        secondary: dayjs().add(-5, "day").fromNow(),
      },
      {
        id: 3,
        primary: "This is a really long text and should fit in the screen",
        secondary: dayjs().add(2, "day").fromNow(),
      },
      {
        id: 3,
        primary:
          "This is a really really long text and should be visible when the user looks for it in the screen",
        secondary: dayjs().add(2, "day").fromNow(),
      },
    ],
  },
};

export const LongItemListWithReallyLongValuesMode = {
  args: {
    handleClick: () => {},
    dense: false,
    data: [
      {
        id: 1,
        primary: "Therapy Session",
        secondary: dayjs().add(-5, "day").fromNow(),
      },
      {
        id: 2,
        primary: "Westpac",
        secondary: dayjs().add(-5, "day").fromNow(),
      },
      {
        id: 3,
        primary: "This is a really long text and should fit in the screen",
        secondary: dayjs().add(2, "day").fromNow(),
      },
      {
        id: 3,
        primary:
          "This is a really really long text and should be visible when the user looks for it in the screen",
        secondary: dayjs().add(2, "day").fromNow(),
      },
      {
        id: 4,
        primary: "New Therapy Session",
        secondary: dayjs().add(-5, "day").fromNow(),
      },
      {
        id: 5,
        primary: "Westpac",
        secondary: dayjs().add(-5, "day").fromNow(),
      },
      {
        id: 6,
        primary: "This is a really long text and should fit in the screen",
        secondary: dayjs().add(2, "day").fromNow(),
      },
      {
        id: 3,
        primary:
          "This is a really really long text and should be visible when the user looks for it in the screen",
        secondary: dayjs().add(2, "day").fromNow(),
      },
    ],
  },
};
