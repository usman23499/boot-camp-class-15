import { useEffect, useState } from "react";
import {Calldata} from "../Services/fetchdata"
import { QuestionDataset,questionpattren} from "../Type/type";
import Displayquestion from '../component/Displayquestion';
import Loader from "../component/loader"
import Result from "../component/result"

var Quiz:React.FC<questionpattren>=({ques,cata,level})=>{

  // console.log(ques,cata,level)
  
  const [TotalQuestions,setQuestions] =useState<QuestionDataset[]>([]);
  
  var [count,setcount] =useState<number>(0);

  var [score,setscore]=useState<number>(0);

useEffect(()=>{

  // var data=Calldata(5,"easy");
  // console.log(data); // beacuse yah bhi promise so

  const data=async()=>{
  const setdata=await Calldata(ques,level,cata);
    
    setQuestions(setdata);

    // console.log(setdata)
   
  } 
  data();

  },[]) 

  if(!TotalQuestions.length){
    return(

     <Loader/>
    )
  } 
 

  const handlechale=(e: React.FormEvent<EventTarget>,selection: string)=> {
    e.preventDefault();

    // console.log(selection)
    console.log(`USER=>${selection} CORRECT=>${TotalQuestions[count].answer}`)
    if(selection===TotalQuestions[count].answer){
      setscore(score=score+1);
    }
   
    

      setcount(count=count+1)

    

    
  }

  if(count===ques){

   

    return(
      <Result ques={ques} score={score}/>

    )
   
  }
 

  return (
    <div>
     
    <Displayquestion 
    

    questions={TotalQuestions[count].question}
    options={TotalQuestions[count].All_Options}
    next={handlechale}    

    

    />


    </div>
  );
}

export default Quiz;
