import IconButtonWithTooltip from "../../features/HomePage/IconButtonWithTooltip/IconButtonWithTooltip";

export default {
  title: "HomePage/IconButtonWithTooltip",
  component: IconButtonWithTooltip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const IconButtonWithTooltipDefaultMode = {
  args: {
    tooltipTitle: "Default title",
    handleAdd: () => {},
    color: "primary",
  },
};

export const IconButtonWithNoTooltipMode = {
  args: {
    tooltipTitle: "",
    handleAdd: () => {},
    color: "primary",
  },
};

export const IconButtonWithNoColorNoTooltipMode = {
  args: {
    handleAdd: () => {},
  },
};
