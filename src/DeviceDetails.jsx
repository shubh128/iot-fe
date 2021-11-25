import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rawData } from "./data.js";

const setRowColumn = (data) => {
  const rows = data.map((data, id) => {
    return { ...data, id };
  });
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "flame_sensor",
      headerName: "Flame  Sensor",
      // width: 150,
      editable: true
    },
    {
      field: "smoke_sensor",
      headerName: "Smoke Sensor",
      // width: 150,
      editable: true
    },
    {
      field: "created_at",
      headerName: "Created At",
      type: "number",
      width: 200,
      editable: true
    }
  ];

  return [rows, columns];
};
export default function DeviceDetails() {
  const [data, setData] = useState([]);
  const rows = rawData.map((data, id) => {
    return { ...data, id };
  });
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "flame_sensor",
      headerName: "Flame  Sensor",
      // width: 150,
      editable: true
    },
    {
      field: "smoke_sensor",
      headerName: "Smoke Sensor",
      // width: 150,
      editable: true
    },
    {
      field: "created_at",
      headerName: "Created At",
      type: "number",
      width: 200,
      editable: true
    }
  ];
  // const firstTimeRender = useRef(true);

  // useEffect(() => {
  //   if (!firstTimeRender.current) {
  //     setData(rawData);
  //     console.log(data);
  //   }
  //   ``[(rows, columns)] = setRowColumn(data);
  // }, [data]);
  // const useEffect(() => {

  // })
  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
