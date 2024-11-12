import AvatarWithText from "../../features/HomePage/AvatarWithText/AvatarWithText";

export default {
  title: "HomePage/AvatarWithText",
  component: AvatarWithText,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const AvatarWithTextDefaultMode = {
  args: {
    salutation: "Good Evening, John",
    handleAdd: () => {},
  },
};
