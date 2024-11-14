import { Avatar, Stack, Typography } from "@mui/material";
import IconButtonWithTooltip from "../IconButtonWithTooltip/IconButtonWithTooltip";

export default function AvatarWithText({ salutation, handleAdd }) {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack spacing={2}>
        <Avatar sx={{ width: 78, height: 78 }} />
        <Typography variant="h5">{salutation}</Typography>
      </Stack>
      <IconButtonWithTooltip tooltipTitle={"Add new chore"} handleAdd={handleAdd} />
    </Stack>
  );
}
