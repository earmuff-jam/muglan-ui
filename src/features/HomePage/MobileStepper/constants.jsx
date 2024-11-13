export const BLANK_CHORE_DETAILS_FORM = {
  name: {
    id: 'name',
    label: "Chore name",
    placeholder: "Enter chore name",
    value: "",
    type: "text",
    isRequired: true,
    errorMsg: "",
    validators: [
      {
        validate: (value) => value.trim().length === 0,
        message: "Chore name is required",
      },
      {
        validate: (value) => value.trim().length >= 500,
        message: "Chore name should be less than 50 characters",
      },
    ],
  },
  description: {
    id: 'description',
    label: "Chore description",
    placeholder: "Enter chore description (Optional)",
    value: "",
    type: "text",
    isRequired: false,
    errorMsg: "",
    validators: [
      {
        validate: (value) => value.trim().length >= 500,
        message: "Chore description should be less than 500 characters",
      },
    ],
  },
};
