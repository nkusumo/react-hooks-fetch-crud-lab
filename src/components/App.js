import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [newQuestion, setNewQuestion] = useState({});
  // const [questionArray, setQuestionArray] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:4000/questions")
  //   .then(res => res.json())
  //   .then(data => setQuestionArray(data))
  // },[])

  function handleNewQuestion(qstn) {
    // let newArray=[...questionArray, qstn];
    // console.log(newArray)
    // console.log(questionArray)
    setNewQuestion(qstn);
  }

  // function handleDelete(id) {
  //   let newArray = questionArray.filter(question => question.id !== id);
  //   setQuestionArray(newArray);
  // }

  // function handleAnswerUpdate(questionObj) {
  //   let index = questionArray.findIndex(el => el.id === questionObj.id);
  //   let newArray=[...questionArray];
  //   newArray[index] = questionObj;
  //   setQuestionArray(newArray);
  // }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onNewQuestion={handleNewQuestion} /> : <QuestionList newQuestion={newQuestion} />}
    </main>
  );
}

export default App;
