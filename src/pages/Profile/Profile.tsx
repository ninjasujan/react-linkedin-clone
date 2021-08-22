import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    backCover: {
      height: "70px",
      boxShadow: "0 5px 8px -8px rgba(0, 0, 0, 0.75)",
      position: "relative",
    },
    avatar: {
      margin: "0 auto",
      position: "absolute",
      top: "20px",
      left: "40%",
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
    title: {
      marginTop: "30px",
      textAlign: "center",
    },
  };
});

const Profile: React.FC<{}> = (props) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.backCover}>
        <Avatar className={classes.avatar} />
      </div>
      <div className={classes.title}>
        <Typography variant="h6">Sujan Poojary</Typography>
        <Typography variant="subtitle1">Backend Developer@AppyHigh</Typography>
      </div>
    </div>
  );
};

export default Profile;
