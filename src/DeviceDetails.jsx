import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rawData } from "./data.js";
import { awsUrl } from "./constants";
import CircularProgress from "@mui/material/CircularProgress";

var axios = require("axios");

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
      editable: true,
    },
    {
      field: "smoke_sensor",
      headerName: "Smoke Sensor",
      // width: 150,
      editable: true,
    },
    {
      field: "created_at",
      headerName: "Created At",
      type: "number",
      width: 200,
      editable: true,
    },
  ];
  console.log("row", rows);
  return [rows, columns];
};
export default function DeviceDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  // let rows = rawData.map((data, id) => {
  //   return { ...data, id };
  // });
  // let columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "flame_sensor",
  //     headerName: "Flame  Sensor",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "smoke_sensor",
  //     headerName: "Smoke Sensor",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "created_at",
  //     headerName: "Created At",
  //     type: "number",
  //     width: 200,
  //     editable: true,
  //   },
  // ];

  useEffect(() => {
    var config = {
      method: "get",
      url: `${awsUrl}/api/d2/`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    if (!loading) {
      console.log("hemlo");
      setTableData(setRowColumn(data));
      setTableLoading(false);
    }
  }, [data, loading]);

  if (tableLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  else
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <DataGrid
          rows={tableData[0]}
          columns={tableData[1]}
          pageSize={5}
          autoHeight={true}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          disableExtendRowFullWidth={true}
        />
      </Box>
    );
}
