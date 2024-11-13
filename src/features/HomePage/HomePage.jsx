import dayjs from "dayjs";
import ViewDateTime from "../../common/DateTimePicker/ViewDateTime";
import AvatarWithText from "./AvatarWithText/AvatarWithText";
import Row from "../../common/Row/Row";
import { Typography } from "@mui/material";
import TaskCompletion from "./TaskCompletion/TaskCompletion";
import ItemList from "./ItemList/ItemList";
import React from "react";


export default function HomePage() {

  return (
    <>
      <AvatarWithText salutation="Good Evening, Rabin" handleAdd={() => {}} />
      <Row
        marginTop={"2rem"}
        firstElement={
          <ViewDateTime currentTime={dayjs()} layout={"MMMM DD, YYYY"} />
        }
        secondElement={<TaskCompletion completionPercent={0} />}
      />
      <ItemList dense="true" data={[]} />
    </>
  );
}
