import React, { useState } from 'react';
import './style.css';
import data from './data';
import SingleQuestion from './Question';
export default function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login </h3>
        <section className="info">
          {questions.map(question => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
