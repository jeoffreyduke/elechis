"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import rice from "../../../public/assets/coconutrice.jpg";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { addReservation } from "../../../api/database";

const Reservation = () => {
  const [open, setOpen] = useState(false);

  const partySizes = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
  ];

  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [time, setTime] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [partySize, setPartySize] = useState("1");
  const [request, setRequest] = useState("");

  const handleSetPartySize = (event: SelectChangeEvent) => {
    setPartySize(event.target.value as string);
  };

  const handleSetPartySizee = (event: SelectChangeEvent) => {
    setPartySize(event.target.value as string);
  };

  const submitChanges = () => {
    if (
      name.length < 1 ||
      phoneNumber.length < 1 ||
      email.length < 1 ||
      date === null ||
      time === null ||
      partySize.length < 1 ||
      name.length < 1
    ) {
      setError("A required field has been left out.");
      return;
    } else
      addReservation(name, phoneNumber, email, date, time, partySize, request);

    setOpen(false);
  };

  return (
    <main className="h-[100vh]">
      <Header />
      <section className="w-100vw flex justify-center">
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="relative flex justify-center w-[90vw] h-[58vh] max-sm:h-[60vh]">
            <Image
              style={{ filter: "brightness(0.8) contrast(1.1) opacity: 0.7" }}
              src={rice}
              objectFit="cover"
              layout="fill"
              fill
              alt="menu"
            />
            <div className="absolute bottom-8 w-[60vw] h-[10vh] max-sm:h-[5vh] max-sm:w-[85vw] max-sm:text-[1.2rem] flex justify-center items-center text-center p-3 bg-[rgba(30,24,0,0.45)] text-[3rem] text-white">
              <p>Reservation</p>
            </div>
          </div>

          <button
            className="bg-[rgb(30,24,0)] text-[rgb(233,186,0)] m-5 mt-12 rounded-md h-[3rem] w-[20rem] mx-1"
            onClick={() => setOpen(true)}
          >
            <b>Book a reservation</b>
          </button>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="flex flex-col justify-center items-center"
      >
        <main className="bg-[rgb(233,186,0)] h-[95%] w-[30%] max-sm:w-[80%] overflow-y-auto p-4 px-8">
          <p className="mb-4">
            <b className="text-[1.1rem]">Book your reservation.</b>
          </p>

          <TextField
            className="mb-4"
            required
            id="outlined-required"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            className="mb-4"
            required
            id="outlined-required"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <TextField
            className="mb-4"
            required
            id="outlined-required"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="mb-4"
              label="Date *"
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
            <TimePicker
              className="mb-4"
              label="Time *"
              value={time}
              onChange={(newValue) => setTime(newValue)}
            />
          </LocalizationProvider>

          <FormControl fullWidth className="mb-4">
            <InputLabel id="demo-simple-select-label">Party Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={partySize}
              label="Party Size"
              onChange={handleSetPartySize}
            >
              {partySizes.map((partySize: string, i) => (
                <MenuItem key={i} value={(i + 1).toString()}>
                  {partySize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            className="mb-4"
            required
            id="outlined-required"
            label="Special Requests"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />

          {error && <div className="text-[0.8rem] text-[red]">{error}</div>}

          <button
            className="bg-[rgb(30,24,0)] text-[rgb(233,186,0)] m-5 rounded-md h-[3rem] w-full mx-1"
            onClick={submitChanges}
          >
            <b>Submit</b>
          </button>
        </main>
      </Modal>

      <Footer />
    </main>
  );
};

export default Reservation;
