import { React, useEffect, useState, Fragment} from 'react';
import './App.css';
import { AppBar, Paper, Fab, Snackbar, IconButton, Button, Tab, Tabs} from "@material-ui/core"
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Document, Page } from "react-pdf/dist/umd/entry.parcel"
import EmailIcon from '@material-ui/icons/Email';
import CloseIcon from '@material-ui/icons/Close';
import TabPanel from './TabPanel';
import SwipeableViews from 'react-swipeable-views';

function App() {

  const getData=()=>{
    fetch('./info.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])


  const useStyles = makeStyles((theme) => ({
    tab: {
      
    },
    infoBox:{
      width: '100vw',

    },
    paperWheel: {
      display: 'flex',
    },
    FAB: {
      position: 'absolute',
      bottom:10,
      right:10,
    },
  }));


  const classes = useStyles()
  const theme = useTheme();

  const [data,setData] = useState([])
  const [info, setInfo] = useState({title: "info Title"})
  const [openInfo, setOpenInfo] = useState(false);
  const handleOpenInfo = () => {
    setOpenInfo(true);
  }
  const handleCloseInfo = () => {
    setOpenInfo(false);
  } 

  const [openNotify, setOpenNotify] = useState(false);
  const handleOpenNotify = () => {
    setOpenNotify(true);
  };
  const handleCloseNotify = (event, reason) => {
    if (reason === 'clickaway') { return; }
    setOpenNotify(false);
  };

  const [tabVal, setTab] = useState(0)
  const tabChange = (event, newValue) => {
    setTab(newValue);
  };


  return (
    <div className="App">
      <AppBar position="static">
        <Tabs
          value={tabVal}
          onChange={tabChange}
          indicatorColor="primary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="TODO">
            <Tab label="Home" value={0}/>
            <Tab label="Resume" value={1}/>
            <Tab label="About Me" value={2}/>
        </Tabs>
      </AppBar>



      <TabPanel value={tabVal} index={0} className={classes.tab}>
        <Paper className={classes.paper}>
          <Button onClick={handleOpenInfo}>Testing1</Button>
          <Button>Testing2</Button>
        </Paper>

        <Dialog
          open={openInfo}
          onClose={handleCloseInfo}
          scroll='paper'
          className={classes.infoBox}
        >
          <DialogTitle>{info.title}</DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText>
              {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseInfo} color="primary">Close</Button>
          </DialogActions>
          
        </Dialog>


      </TabPanel>
      <TabPanel value={tabVal} index={1} className={classes.tab}>
        <Paper className={classes.paper}>
          RESUME
          <Document file='/Resume.pdf'>
            <Page pageNumber={1}/>
          </Document>
        </Paper>
      </TabPanel>
      <TabPanel value={tabVal} index={2} className={classes.tab}>
        <Paper className={classes.paper}>
          About me
        </Paper>
      </TabPanel>

      
    
    <Fab color="primary" onClick={handleOpenNotify} className={classes.FAB}>
      <EmailIcon />
    </Fab>
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openNotify}
        autoHideDuration={6000}
        onClose={handleCloseNotify}
        message="Note archived"
        action={
          <Fragment>

            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseNotify}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
}

export default App;
