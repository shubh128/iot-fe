const data = [
  {
    _id: "619494196ad4c431749a469c",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:13.335Z",
    updated_at: "2021-11-17T05:33:13.335Z",
    __v: 0,
  },
  {
    _id: "6194941a6ad4c431749a46a2",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:14.053Z",
    updated_at: "2021-11-17T05:33:14.053Z",
    __v: 0,
  },
  {
    _id: "6194941a6ad4c431749a46a8",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:14.658Z",
    updated_at: "2021-11-17T05:33:14.658Z",
    __v: 0,
  },
  {
    _id: "6194941b6ad4c431749a46ae",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:15.298Z",
    updated_at: "2021-11-17T05:33:15.298Z",
    __v: 0,
  },
  {
    _id: "6194941b6ad4c431749a46b4",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:15.873Z",
    updated_at: "2021-11-17T05:33:15.873Z",
    __v: 0,
  },
  {
    _id: "6194941c6ad4c431749a46ba",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:16.537Z",
    updated_at: "2021-11-17T05:33:16.537Z",
    __v: 0,
  },
  {
    _id: "6194941d6ad4c431749a46c0",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:17.053Z",
    updated_at: "2021-11-17T05:33:17.053Z",
    __v: 0,
  },
  {
    _id: "6194941d6ad4c431749a46c6",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:17.713Z",
    updated_at: "2021-11-17T05:33:17.713Z",
    __v: 0,
  },
  {
    _id: "6194941e6ad4c431749a46cc",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:18.277Z",
    updated_at: "2021-11-17T05:33:18.277Z",
    __v: 0,
  },
  {
    _id: "6194941e6ad4c431749a46d2",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:18.897Z",
    updated_at: "2021-11-17T05:33:18.897Z",
    __v: 0,
  },
  {
    _id: "6194941f6ad4c431749a46d8",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:19.493Z",
    updated_at: "2021-11-17T05:33:19.493Z",
    __v: 0,
  },
  {
    _id: "619494206ad4c431749a46df",
    ultrasonic_sensor: 0,
    created_at: "2021-11-17T05:33:20.107Z",
    updated_at: "2021-11-17T05:33:20.107Z",
    __v: 0,
  },
];

console.log(Object.keys(data[0]));
arr = ["_id", "updated_at", "created_at", "__v"];
columnHeaders = Object.keys(data[0]).filter(function (val) {
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
fieldColumns = columnHeaders.map((column) => {
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

console.log(columns);
