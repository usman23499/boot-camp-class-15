export type Question={

    category: String ,

    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    incorrect_answers: String[]  
    
}


export type QuestionDataset={

    question: string,
    answer: string,
    All_Options: string[]  
    
}


export type questionType={
    

    questions: string,
    options: string[],
    next : (e:React.FormEvent<EventTarget>,selection:string)=>void
}

export type questionpattren={
    ques:number,
    level:string,
    cata:number
}

export type result={
    ques:number,
    score:number,
}