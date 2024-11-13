import { Stack } from "@mui/material";

export default function Row({
  marginTop = "0rem",
  firstElement,
  secondElement,
}) {
  return (
    <Stack
      direction="row"
      justifyContent={firstElement ? "space-between" : "right"}
      marginTop={marginTop}
    >
      {firstElement}
      {secondElement}
    </Stack>
  );
}
