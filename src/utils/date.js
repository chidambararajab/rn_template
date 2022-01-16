import { format } from "date-fns";

export const regularDateFormat = (date) => {
  if (date) {
    return format(new Date(date), "yyyy-MM-dd");
  } else {
    return date;
  }
};

export const transactionDateFormat = (date) => {
  if (date) {
    return format(new Date(date), "dd.MM.yyyy");
  } else {
    return date;
  }
};

export const transactionDateAndTimeFormat = (date) => {
  if (date) {
    return format(new Date(date), "dd.MM.yyyy, hh:mm aaaaa'm'");
  } else {
    return date;
  }
};
