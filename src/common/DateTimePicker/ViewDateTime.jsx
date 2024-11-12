import { Typography } from "@mui/material";
import { formatDateTime } from "../../utils/utils";

export default function ViewDateTime({ currentTime = "", layout }) {
  return (
    <Typography variant="subtitle2" color="textSecondary">{formatDateTime(currentTime, layout)}</Typography>
  );
}
