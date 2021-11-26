import React from "react";
import { Container, Grid } from "@mui/material";
import EachDevice from "./EachDevice";
import { useAuth } from "./authContext";
import { serverUrl } from "./constants";
import axios from "axios";
const data = [
  {
    name: "Tilt + IR",
    path: "devices/d0",
  },
  {
    name: "Flame + Smoke",
    path: "devices/d1",
  },
  {
    name: "Ultrasonic + Photosensitive",
    path: "devices/d2",
  },
  {
    name: "Rain Drop",
    path: "devices/d3",
  },
  {
    name: "Voice + IR",
    path: "devices/d4",
  },
  {
    name: "Temperature + Humidity",
    path: "devices/d5",
  },
  {
    name: "Tilt + Ultrasonic",
    path: "devices/d6",
  },
  {
    name: "Vibration",
    path: "devices/d7",
  },
];

export default function Devices() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {data.map((device, id) => (
        <Grid item xs={4} id={id}>
          <EachDevice name={device.name} path={device.path} device={id} />
        </Grid>
      ))}
    </Grid>
  );
}
