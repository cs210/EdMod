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

export default function ImgMediaCard(tileData) {
  if(Array.isArray(tileData) && tileData.length){
      return (
      <div>
      <br/>
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

          <GridListTile key={tile}>
            <img src={tile} alt={tile} />

          </GridListTile>
        ))}
      </GridList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    );
  }
  return(
    <div/>
  );
}
