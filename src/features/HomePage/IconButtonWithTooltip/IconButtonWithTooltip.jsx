import { AddCircleOutlineRounded } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

export default function IconButtonWithTooltip({
  tooltipTitle = "",
  handleAdd,
  color = "primary",
}) {
  return (
    <Tooltip title={tooltipTitle} placement="bottom-start">
      <Box alignSelf={"center"}>
        <IconButton size="small" onClick={handleAdd}>
          <AddCircleOutlineRounded color={color} />
        </IconButton>
      </Box>
    </Tooltip>
  );
}
