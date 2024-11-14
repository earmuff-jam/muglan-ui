import { useState } from "react";
import { BLANK_CHORE_DETAILS_FORM } from "./constants";
import AddChoreFormDetails from "./Form/AddChoreFormDetails";
import AddChoreFormRepeatSettings from "./Form/AddChoreFormRepeatSettings";
import { Stack } from "@mui/material";

export default function AddChore() {
  const [formData, setFormData] = useState({ ...BLANK_CHORE_DETAILS_FORM });

  const handleChange = (event) => {
    const { id, value } = event.target;
    const updatedFormData = { ...formData };
    let errorMsg = "";

    for (const validator of updatedFormData[id].validators) {
      if (validator.validate(value)) {
        errorMsg = validator.message;
        break;
      }
    }

    updatedFormData[id] = {
      ...updatedFormData[id],
      value,
      errorMsg,
    };
    setFormData(updatedFormData);
  };

  const isFormDisabled = () => {
    const containsErr = Object.values(formData).reduce((acc, el) => {
      if (el?.errorMsg) {
        return true;
      }
      return acc;
    }, false);

    const requiredFormFields = Object.values(formData).filter(
      (v) => v?.isRequired
    );
    const isRequiredFieldsEmpty = requiredFormFields
      .filter((el) => el.type === "text")
      .some((el) => el.value.trim() === "");

    return containsErr || isRequiredFieldsEmpty;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormDisabled()) {
      return;
    }

    const formattedData = Object.values(formData).reduce((acc, el) => {
      if (el.value) {
        acc[el.id] = el.value;
      }
      return acc;
    }, {});

    const draftRequest = {
      ...formattedData,
    };
    console.debug(draftRequest);
  };

  console.debug(isFormDisabled, handleSubmit);

  return (
    <Stack spacing={2}>
      <AddChoreFormDetails formData={formData} handleChange={handleChange} />
      <AddChoreFormRepeatSettings />
    </Stack>
  );
}
