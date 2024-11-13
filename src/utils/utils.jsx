import dayjs from "dayjs";

export const formatDateTime = (selectedTime, layout = "MM-DD-YYYY") => {
  if (selectedTime) {
    return dayjs(selectedTime).format(layout);
  }
  return "Invalid date";
};
