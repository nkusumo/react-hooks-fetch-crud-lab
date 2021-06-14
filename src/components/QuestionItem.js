import React from "react";

function QuestionItem({ question, onDelete, onAnswerUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleClick(e) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onDelete(id))
  }
  
  function handleChange(e) {
    let updatedAnswer = parseInt(e.target.value);
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({correctIndex: updatedAnswer})
    })
    .then(res => res.json())
    .then(data => onAnswerUpdate(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
