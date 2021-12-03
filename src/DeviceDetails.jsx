import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rawData } from "./data.js";
import { awsUrl } from "./constants";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router";
var axios = require("axios");

const setRowColumn = (data) => {
  const rows = data.map((data, id) => {
    return { ...data, id };
  });
  let arr = ["_id", "updated_at", "created_at", "__v"];
  let columnHeaders = Object.keys(data[0]).filter(function (val) {
    return arr.indexOf(val) == -1;
  });
  function headerString(str) {
    var splitStr = str.toLowerCase().split("_");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }
  let fieldColumns = columnHeaders.map((column) => {
    return {
      field: column,
      headerName: headerString(column),
      editale: true,
    };
  });
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    ...fieldColumns,
    {
      field: "created_at",
      headerName: "Created At",
      type: "number",
      width: 200,
      editable: true,
    },
  ];

  return [rows, columns];
};
export default function DeviceDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
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
      url: `${awsUrl}/api/${id}/`,
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
