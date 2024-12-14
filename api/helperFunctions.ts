import { Dayjs } from "dayjs";

export const prependZero = (value: number) => {
  if (value < 10) return `0${value}`;
  else return value.toString();
};

export const generateDate = (date: Dayjs) => {
  let day: any = prependZero(date.day());
  let month: any = prependZero(date.month());
  let year: any = date.year();

  return `${day}/${month}/${year}`;
};

export const generateTime = (time: Dayjs) => {
  let hour: any = prependZero(time.hour());
  let minute: any = prependZero(time.minute());

  if (+hour > 12) return `${hour}:${minute} PM`;

  return `${hour}:${minute} AM`;
};

export const createImageName = (input: string): string => {
  const lowerCaseInput = input.toLowerCase();
  const firstWord = lowerCaseInput.split(" ")[0];

  return firstWord;
};
