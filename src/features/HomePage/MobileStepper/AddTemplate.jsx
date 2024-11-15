import { Stack, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

export default function AddTemplate({
  titleText = "",
  emptyText = "",
  items = [],
}) {
  if (items.length <= 0) {
    return <Typography textAlign="center">{emptyText}</Typography>;
  }
  return (
    <Stack alignItems="center">
      <Typography variant="h5" gutterBottom>
        {titleText}
      </Typography>
      <Stack direction={"row"} spacing={1}>
        {items.map((group, index) => (
          <ItemCard key={index} item={group} />
        ))}
      </Stack>
    </Stack>
  );
}
