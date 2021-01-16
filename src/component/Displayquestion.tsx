import { useState } from "react";
import {questionType} from "../Type/type"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import "./../App.css"

var Displayquestion:React.FC<questionType>=({questions,options,next})=> {
    
    const useStyles = makeStyles((theme) => ({
        root: {
         margin:"0px auto",
         maxWidth:"800px",
         padding:"70px",
         
        },
        Papper:{

            padding:"20px",
            boxShadow:"2px 2px 10px #0d6460",
        },
        input:{
            marginRight:"20px",
            marginTop:"10px",
           
            
        }
        ,
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

var [selection,setselection]=useState<string>("");
    
var getvalue=(e: any)=>{

    // console.log(e.target)
    // console.log(e.target.value);
    setselection(e.target.value);

}


  
    return(

    <div className={classes.root}>
        <h1 className={classes.mainheading} style={{textAlign:"center",}}>QUIZ</h1>
     
     <Paper className={classes.Papper} >

     <h4>   
            {questions}
    </h4>

        <form onSubmit={(e:  React.FormEvent<EventTarget>)=>{

                var selecttransfer=selection;
                setselection("");// is se agar koe answer ke option back wale se match tab bhi auto check na ho
                next(e,selecttransfer)
                
                
        }}>
          

        {
            options.map((value: string,index: number)=>{
                
               return(
                <div key={index}>
                <label >
                <input  type="radio" name="radio" 
                value={value}
                checked={selection===value} // jab hamare selection equal value tu checked ho
                onChange={(e : React.FormEvent<EventTarget> )=>getvalue (e)}
                required
                
                className={classes.input}

                />{value}
                </label>
                </div>
               );
            })
        }

        
        <Button type="submit" variant="contained" size="large" color="primary" className={classes.button}>
          NEXT
        </Button>

        
      
      </form>
     



     </Paper>
        
    </div>

    );
    
}

export default Displayquestion;