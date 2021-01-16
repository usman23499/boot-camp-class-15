
import {result} from "../Type/type"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import "./../App.css"
import { useState } from "react";
import App from "./../App";

var Result:React.FC<result>=({ques,score})=> {
    
    const useStyles = makeStyles((theme) => ({
        root: {
         margin:"0px auto",
         maxWidth:"800px",
         padding:"70px",
         textAlign:"center"
        },
        Papper:{

            padding:"20px",
            boxShadow:"2px 2px 10px #0d6460",
        },
       
        
        button:{
            display:"block",
            margin:"0px auto",
            marginTop:"20px",
            width:"80%",
            backgroundColor:"#0d6460",

            "&:hover":{
                backgroundColor: '#1f6e6a',
            }

            
        },
        mainheading:{
            boxShadow:"2px 2px 10px #0d6460",
        },

      }));
      const classes = useStyles();


var [changescreen,setchangescreen]= useState<boolean>(false)

if(changescreen){
    return(
        <App />
    )
}


  
    return(

    <div className={classes.root}>
        <h1 className={classes.mainheading} style={{textAlign:"center",}}>RESULT</h1>
     
     <Paper className={classes.Papper} >

<br/>
     <h4 style={{fontSize:"40px"}} >   
           SCORE: {(score*100)/ques} %
    </h4>

        
          
<br/>
        
        
        <Button onClick={()=>{
            setchangescreen(true)
        }} variant="contained" size="large" color="primary" className={classes.button}>
          RESTART
        </Button>

        
      
  
     



     </Paper>
        
    </div>

    );
    
}

export default Result;