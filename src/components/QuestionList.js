import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questionArray, setQuestionArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestionArray(data))
  },[])

  function handleDelete(id) {
    let newArray = questionArray.filter(question => question.id !== id);
    console.log(newArray)
    setQuestionArray(newArray);
  }

  function handleAnswerUpdate(questionObj) {
    let index = questionArray.findIndex(el => el.id === questionObj.id);
    let newArray=[...questionArray];
    newArray[index] = questionObj;
    setQuestionArray(newArray);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionArray 
        ? questionArray.map(question => <QuestionItem key={question.id} question={question} onDelete={handleDelete} onAnswerUpdate={handleAnswerUpdate} />) 
        : null }
      </ul>
    </section>
  );
}

export default QuestionList;
