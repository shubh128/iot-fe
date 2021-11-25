import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { serverUrl } from "./constants";
import axios from "axios";
import { useAuth } from "./authContext";

export default function EachDevice({ name, path, device }) {
  const userContext = useAuth();
  console.log(useAuth());
  const getAccess = (device, user) => {
    var data = JSON.stringify({
      user_id: user.ID,
      location: user.Location,
      device: device
    });
    console.log("user" + user.Location);
    var config = {
      method: "post",
      url: `${serverUrl}/devices`,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };
    console.log(config);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClick = () => {
    console.log(device);
    getAccess(device, userContext.currentUser);
  };
  return (
    <Card
      sx={{ maxWidth: 345, margin: 5, color: "grey" }}
      onClick={handleClick}
    >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={require("../static/sensor.png")}
          alt="iot"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
