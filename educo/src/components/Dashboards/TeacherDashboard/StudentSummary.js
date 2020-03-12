import React, { Component } from "react";
import StudentList from "./StudentList";

import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  List,
  IconButton,
  // ExpandMoreIcon, // this fails unless imported as below
  Avatar,
  AvatarClassKey,
  Typography
} from "@material-ui/core";

const divStyle = {
  marginTop: "30px"
};
const avatar = {
  width: "100px"
};

class StudentSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {
        name: "Austin Chow",
        school: "Williams Middle School",
        projectType: "Chatbot",
        img: "https://imgur.com/sxBbwGg.jpg"
      },
      {
        name: "Isiah Bush",
        school: "Phillips Middle School",
        projectType: "Chatbot",
        img: "https://i.imgur.com/obCDLXb.jpg"
      },
      {
        name: "Stephanie Brito",
        school: "Fernando Middle School",
        projectType: "Chatbot",
        img: "https://i.imgur.com/bQ3IRME.jpg?1"
      },
      {
        name: "Susana Benavidez",
        school: "Williams Middle School",
        projectType: "Chatbot",
        img:
          "https://pbs.twimg.com/profile_images/1212062544715665410/aIB6LaxE_400x400.jpg"
      },
      {
        name: "John Chuter",
        school: "Thomas Edison Middle School",
        projectType: "Scratch",
        img: "https://imgur.com/Drzepet.jpg"
      }
    ];
    return (
      <div style={divStyle}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.map(elem => (
            <Grid item xs={12} sm={6} key={data.indexOf(elem)}>
              <Card variant="outlined">
                <CardHeader title={elem.name} subheader={elem.school} />
                <CardContent>
                  <Typography variant="h8" gutterBottom>
                    Current Project: {elem.projectType}
                  </Typography>
                  <Avatar src={elem.img} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default StudentSummary;
