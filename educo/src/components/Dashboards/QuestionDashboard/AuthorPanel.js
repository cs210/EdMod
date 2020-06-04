import React, { Component, useEffect, useMemo, useState }from "react";
import { Link as RouterLink } from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ImgMediaCard from './QA_ImgCard.js'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chip from '@material-ui/core/Chip';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';


import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Divider,
  Container,
  Button,
  Grid,
  IconButton,
  ButtonGroup,
  Box,
  Tooltip
}
from '@material-ui/core';


export default function AuthorPanel(author){
  //TODO: get author info

  //sample badge rendering
  var BadgeSample5 = 'https://www.starbreeder.org/images/5start-img.png'
  var EFTWBadgeSample = 'https://engineerfortheweek.fb.com/wp-content/uploads/2017/12/cropped-eftw-favicon.png'
  var sprintingBadge = 'https://static.thenounproject.com/png/168818-200.png'
  var badge;
  if(author === 'austin'){
    badge = (
    <Tooltip title="EFTW Top Contributor" placement="right" arrow>
        <img src={EFTWBadgeSample} width='15'/>
    </Tooltip>
    )
  }
  else if (author==='Isaiah B.'){
    badge = (
      <Tooltip title={"Currently sprinting! Spring 2020"} placement="right" arrow>
        <img src={sprintingBadge} width='20'/>
     </Tooltip>
    )
  }
  else{
    badge = (
      <Tooltip title="Taught 5 EFTW sprints!" placement="right" arrow>
        <img src={BadgeSample5} width='20'/>
     </Tooltip>
    )
  }
  


  return(
    <div>
    <Typography variant="caption" style={{marginRight:5}}>
        <font color="grey">{author}</font>
    </Typography>
    {badge}
   
    </div>
  );
}