import { useState } from "react";
import { BLANK_CHORE_DETAILS_FORM } from "./constants";
import { Stack, TextField, Typography } from "@mui/material";

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
    if (containsErr()) {
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
  };

  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        id={formData.name.id}
        name={formData.name.id}
        placeholder={formData.name.placeholder}
        value={formData?.name.value || ""}
        onChange={handleChange}
        variant="outlined"
        size="small"
        error={Boolean(formData.name["errorMsg"].length)}
        helperText={formData.name["errorMsg"]}
      />
      <TextField
        fullWidth
        id={formData.description.id}
        name={formData.description.id}
        placeholder={formData.description.placeholder}
        value={formData?.description.value || ""}
        onChange={handleChange}
        variant="outlined"
        size="small"
        error={Boolean(formData.description["errorMsg"].length)}
        helperText={formData.description["errorMsg"]}
      />
    </Stack>
  );
}
