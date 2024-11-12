import { AddRounded } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export default function IconButtonWithTooltip({
  tooltipTitle = "",
  handleAdd,
  color = "primary",
}) {
  return (
    <Tooltip title={tooltipTitle} placement="bottom-start">
      <IconButton size="small" disableRipple onClick={handleAdd}>
        <AddRounded color={color} />
      </IconButton>
    </Tooltip>
  );
}
