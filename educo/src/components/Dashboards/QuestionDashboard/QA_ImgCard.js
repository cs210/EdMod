import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachFileIcon from '@material-ui/icons/AttachFile';

export default function ImgMediaCard() {
  const tileData = [
    {
     img: 'https://u.cubeupload.com/XxShazammxX/forumsamended.jpg',
     title: 'Image',
    },
    {
       img: 'https://zdnet1.cbsistatic.com/hub/i/r/2019/08/20/b3fbfed9-ec64-4efc-a7af-f0360ba90a08/resize/1200x900/755e999f592b0e0d7a21f93536a81d35/scratch3-on-raspbian-cropped1.png',
      title: 'Image',
    },
    {
     img: 'https://u.cubeupload.com/XxShazammxX/forumsamended.jpg',
     title: 'Image',
    },
    {
       img: 'https://zdnet1.cbsistatic.com/hub/i/r/2019/08/20/b3fbfed9-ec64-4efc-a7af-f0360ba90a08/resize/1200x900/755e999f592b0e0d7a21f93536a81d35/scratch3-on-raspbian-cropped1.png',
      title: 'Image',
    },
    {
     img: 'https://u.cubeupload.com/XxShazammxX/forumsamended.jpg',
     title: 'Image',
    },
    {
       img: 'https://zdnet1.cbsistatic.com/hub/i/r/2019/08/20/b3fbfed9-ec64-4efc-a7af-f0360ba90a08/resize/1200x900/755e999f592b0e0d7a21f93536a81d35/scratch3-on-raspbian-cropped1.png',
      title: 'Image',
    },
  ];

  return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        > 
          <AttachFileIcon color='disabled' fontSize='small'/>
          <Typography variant="body2" color="textSecondary">Attached Files</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GridList className={'gridList'} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: 'titleBar',
                title: 'title',
              }}
            />
          </GridListTile>
        ))}
      </GridList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}
