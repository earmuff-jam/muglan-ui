import { DeleteRounded } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function ItemList({
  dense = true,
  data = [],
  handleClick = () => {},
}) {
  return (
    <List dense={dense}>
      {data.map((d, index) => {
        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteRounded onClick={() => handleClick(d)} color="error" />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                {d?.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={d?.primary ? d.primary : null}
              secondary={d?.secondary ? d.secondary : null}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
