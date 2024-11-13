import { Stack, Typography } from "@mui/material";

export default function TaskCompletion({ completionPercent }) {
  return (
    <Stack>
      <Typography>{completionPercent}% done</Typography>
      <Typography variant="subtitle2" color="textSecondary">Completed Tasks</Typography>
    </Stack>
  );
}
