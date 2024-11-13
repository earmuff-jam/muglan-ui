import HomePage from "../../features/HomePage/HomePage";

export default {
  title: 'HomePage/HomePage',
  component: HomePage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const HomePageDefaultMode = {
  args: {},
};
