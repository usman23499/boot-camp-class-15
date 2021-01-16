import { Question,QuestionDataset } from "../Type/type";


export const shuffleArray=(array: any[])=>[...array].sort(()=>Math.random()-0.5)   


export async function Calldata(totalQuestions: number,level: string,cata: number){

    var res=await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=${cata}&difficulty=${level}&type=multiple`);
    
    var {results}=await res.json();

    const quiz:QuestionDataset[] =results.map((value: Question,index: number)=>{
        
        return{ // when normal return tu ye use and quiz ke ye sate ab component hain

            question: value.question,
            answer: value.correct_answer,
            All_Options: shuffleArray(value.incorrect_answers.concat(value.correct_answer))

        }
      
    }
    
    )
    return quiz;
  
}
