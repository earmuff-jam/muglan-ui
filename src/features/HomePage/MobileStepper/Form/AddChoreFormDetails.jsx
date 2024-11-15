import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import ViewDateTime from "../../../../common/DateTimePicker/ViewDateTime";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Row from "../../../../common/Row/Row";
import { CalendarMonthRounded } from "@mui/icons-material";
dayjs.extend(relativeTime);

export default function AddChoreFormDetails({ formData, handleChange }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h6"> Chore Details</Typography>
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
      <Autocomplete
        fullWidth
        disablePortal
        options={[
          { label: "First User", value: "First user id" },
          { label: "Second User", value: "Second user id" },
        ]}
        multiple
        renderInput={(params) => <TextField {...params} label="Assign to" />}
      />
      <Stack sx={{ padding: "1rem", backgroundColor: "background.paper" }}>
        <Row
          firstElement={
            <Stack direction="row" alignItems="center" spacing={1}>
              <CalendarMonthRounded color="primary" />
              <Typography variant="subtitle2" color="text.secondary">
                Date
              </Typography>
            </Stack>
          }
          secondElement={
            <ViewDateTime currentTime={dayjs().add(2, "days").toISOString()} />
          }
        />
      </Stack>
      <Autocomplete
        fullWidth
        disablePortal
        options={[
          { label: "First category", value: "First category id" },
          { label: "Second category", value: "Second category id" },
        ]}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />
    </Stack>
  );
}
