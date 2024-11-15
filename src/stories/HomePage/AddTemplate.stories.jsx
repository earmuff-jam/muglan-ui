import AddTemplate from "../../features/HomePage/MobileStepper/AddTemplate";

export default {
  title: "HomePage/AddTemplate",
  component: AddTemplate,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const AddGroupsDefaultMode = {
  args: {
    titleText: "Add Groups",
    emptyText: "Add groups to begin",
    items: [
      {
        title: "Default title",
        caption: "Placeholder for caption",
      },
      {
        title: "Default secondary group title",
        caption: "Placeholder for secondary group title",
      },
    ],
  },
};

export const AddGroupsNoItemsMode = {
  args: {
    titleText: "Add Groups",
    emptyText: "Add groups to begin",
    items: [],
  },
};

export const AddGroupsLongNamesMode = {
  args: {
    titleText: "Add Groups",
    emptyText: "Add groups to begin",
    items: [
      {
        title: "Default title for a really long name",
        caption: "Placeholder for caption that is really long",
      },
      {
        title: "Default secondary group title for a really long name",
        caption:
          "Placeholder for secondary group title for a really long secondary name",
      },
    ],
  },
};

export const AddTemplateDefaultMode = {
  args: {
    titleText: "Add Template",
    emptyText: "Add template to begin",
    items: [
      {
        title: "Default title",
        caption: "Placeholder for caption",
      },
      {
        title: "Default secondary group title",
        caption: "Placeholder for secondary group title",
      },
    ],
  },
};

export const AddTemplateNoItemsMode = {
  args: {
    titleText: "Add Template",
    emptyText: "Add template to begin",
    items: [],
  },
};

export const AddTemplateLongNamesMode = {
  args: {
    titleText: "Add Template",
    emptyText: "Add template to begin",
    items: [
      {
        title: "Default title for a really long name",
        caption: "Placeholder for caption that is really long",
      },
      {
        title: "Default secondary group title for a really long name",
        caption:
          "Placeholder for secondary group title for a really long secondary name",
      },
    ],
  },
};
