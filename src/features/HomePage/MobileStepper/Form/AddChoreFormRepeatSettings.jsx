import {
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import Row from "../../../../common/Row/Row";
import {
  ArrowRightRounded,
  EventRepeatRounded,
  RepeatRounded,
  ReplayCircleFilledRounded,
} from "@mui/icons-material";

export default function AddChoreFormRepeatSettings() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6"> Repeat Settings</Typography>

      {/* Repeats */}
      <Stack sx={{ padding: "1rem", backgroundColor: "background.paper" }}>
        <Row
          firstElement={
            <Stack direction="row" alignItems="center" spacing={1}>
              <RepeatRounded color="primary" />
              <Typography variant="subtitle2" color="text.secondary">
                Repeats
              </Typography>
            </Stack>
          }
          secondElement={
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} />
            </FormGroup>
          }
        />
      </Stack>

      {/* Repeat after completion */}
      <Stack sx={{ padding: "1rem", backgroundColor: "background.paper" }}>
        <Row
          firstElement={
            <Stack direction="row" alignItems="center" spacing={1}>
              <ReplayCircleFilledRounded color="primary" />
              <Typography variant="subtitle2" color="text.secondary">
                Repeat after completion
              </Typography>
            </Stack>
          }
          secondElement={
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} />
            </FormGroup>
          }
        />
      </Stack>

      {/* Recurrance */}
      <Stack sx={{ padding: "1rem", backgroundColor: "background.paper" }}>
        <Row
          firstElement={
            <Stack direction="row" alignItems="center" spacing={1}>
              <EventRepeatRounded color="primary" />
              <Stack>
                <Typography variant="subtitle2" color="text.secondary">
                  Recurrence
                </Typography>
                <Typography variant="caption">Day</Typography>
              </Stack>
            </Stack>
          }
          secondElement={<ArrowRightRounded fontSize="small" />}
        />
      </Stack>

      {/* Recurrance Calander */}
      <Stack sx={{ padding: "1rem", backgroundColor: "background.paper" }}>
        <Row
          firstElement={
            <Stack direction="row" alignItems="center" spacing={1}>
              <ReplayCircleFilledRounded color="primary" />
              <Stack>
                <Typography variant="subtitle2" color="text.secondary">
                  Recurrence Interval
                </Typography>
                <Typography variant="caption">1 day</Typography>
              </Stack>
            </Stack>
          }
          secondElement={<ArrowRightRounded fontSize="small" />}
        />
      </Stack>
    </Stack>
  );
}
