import { useEffect,useState } from "react";

function Quiz(){

    const [quiz,setQuiz] =
        useState(null);

    useEffect(()=>{

        fetch(
            "http://localhost:8080/quiz"
        )
        .then(res=>res.json())
        .then(data=>setQuiz(data));

    },[]);

    if(!quiz)
        return <h2>Loading...</h2>;

    return(
        <div>

            <h2>
                {quiz.question}
            </h2>

            <button>
                {quiz.optionA}
            </button>

            <br/>

            <button>
                {quiz.optionB}
            </button>

            <br/>

            <button>
                {quiz.optionC}
            </button>

            <br/>

            <button>
                {quiz.optionD}
            </button>

        </div>
    );
}

export default Quiz;