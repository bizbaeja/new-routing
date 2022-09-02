import React from "react";
import { Link } from "react-router-dom";
const CreateQuestionContainer = () => {
  return (
    <div>
      <h1>CreateQuestion</h1>
      <Link to="/:question">Log in here</Link>
    </div>
  );
};

export default CreateQuestionContainer;
