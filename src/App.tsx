
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import logo from './images/logo.png';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import Quiz from "./component/quiz";


function App() {

  
  const useStyles = makeStyles((theme) => ({
    root: {
     margin:"0px auto",
     maxWidth:"800px",
     padding:"70px",
     textAlign:"center"
     
    },
    Papper:{

      
        boxShadow:"2px 2px 10px #0d6460",
        
    },
  
    
    img:{
        display:"block",
        margin:"0px auto",
        paddingTop:"20px",
        width:"30%"
        
        
    },
    mainheading:{
        boxShadow:"2px 2px 10px #0d6460",

    },
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    
    button1:{
      display:"block",
      margin:"0px auto",
      marginTop:"20px",
      width:"80%",
      backgroundColor:"#0d6460",

      "&:hover":{
          backgroundColor: '#1f6e6a',
      }
    }

  }));
  const classes = useStyles();
  
  const [ques, setques] = useState<number>(5);


  const [cata, setcata] = useState<number>(9);
  
 

  const [level, setlevel] = useState<string>("easy");
  
 var [stay,setstaty]=useState<boolean>(false);

 const sendfunction=()=>{
  
  setstaty(true)
    
 }
 if(stay){
   
  
   return(
     
    <Quiz ques={ques} level={level} cata={cata} />
   )
 }



  return (
    <div className={classes.root}>
      <h1 className={classes.mainheading} style={{textAlign:"center"}}>START QUIZ</h1>
     
     <Paper className={classes.Papper} >

   <img src={logo} className={classes.img} alt="logo"/>

       
   <Grid  container spacing={3}>
        
        <Grid item xs={12} sm={4}>
          




        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Questions</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
         
          value={ques}
          onChange={(event: any)=>setques(event.target.value)}
        >
          
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>









        </Grid>





        <Grid item xs={12} sm={4}>
         
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
         
          value={cata}
          onChange={(event: any)=>setcata(event.target.value)}
        >
          
          <MenuItem value={9}>General Knowledge</MenuItem>
          <MenuItem value={27}>Animals</MenuItem>
          <MenuItem value={19}>Mathematics</MenuItem>
          
        </Select>
      </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Difficulty</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
         
          value={level}
          onChange={(event: any)=>setlevel(event.target.value)}
        >
          
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        
        </Select>
      </FormControl>
        </Grid>
       
  </Grid>



  <Button onClick={()=>{sendfunction()}}  variant="contained" size="large" color="primary" className={classes.button1}>
          START
        </Button>


<br/>
<br/>

     </Paper>
        



    </div>

    
  );
}

export default App;
