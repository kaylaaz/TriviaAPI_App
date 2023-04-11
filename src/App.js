import logo from './logo.svg';
import './App.css';
import Quiz from "./Quiz.js"
import React, { useEffect, useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=easy"
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        //console.log(data.results); //to get first question: data.results[0].question
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);


  return (
    <div className="App">
      <Quiz results={results} />
    </div> /* When click button, we want to get a new set of questions. UseState? */
  );
}
//<button onClick={() => correctAnswer()}>Get More Questions</button>
//      <button onClick={() => getQuestions()}>Get More Questions</button>
{/* <div>
{
  Object.keys(vals).map((key, index) => ( 
    <p key={index}> {key} {vals[key]} </p> 
  ))
}
</div> */}

export default App;



//CORRECT START:
// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from 'react';

// function App() {

//   //should use state keep track of: 
//   //1) whether questtion is true/ false
//   //2) which questions are printed on the screen
//   // when we click the button, we want new questions (is this new state?)
//   const [questions, setQuestions] = useState(false);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setResults(data.results);
//         //console.log(data.results); //to get first question: data.results[0].question
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }, []);


//   //write function to loop through each result and print the results' question
//   // map? 

//   // let listOfQuestions = [];
//   // for (let groupQuestion in results) {
//   //   //console.log(groupQuestion.question);
//   //   listOfQuestions.push(groupQuestion.question);
//   // }

//   const correctAnswer = (input) => {
//     if (input === results.correct_answer) {
//       return true;
//       //set the state to true so we know they selected correct answer
//       //if correct, we want to use that state to:
//       //print out the "Congrats! You got it correct." message
//       //if not correct, do nothing and let them keep selecting T/F
//     } else {
//       return false;
//     }
//   }
//   //if correct answer, print "Congrats! You got it correct."

//   //create array w/ everything in correct_answer and incorrect_answers
//   //const allAnswers = [...item.incorrect_answers, item.correct_answer]
//   ////if false button clicked do correctAnswer()
//   return (


//     <div className="App">
//       <h1>OpenTriviaAPI Quiz</h1>
//       {results.map((item, index) => {
//         return (
//           <div key={index}>
//             <h2>{item.question}</h2>
//             <button>True</button>
//             <button>False</button>
//           </div>
//         )
//       })}
//     </div> /* When click button, we want to get a new set of questions. UseState? */
//   );
// }
// //<button onClick={() => correctAnswer()}>Get More Questions</button>
// //      <button onClick={() => getQuestions()}>Get More Questions</button>
// {/* <div>
// {
//   Object.keys(vals).map((key, index) => ( 
//     <p key={index}> {key} {vals[key]} </p> 
//   ))
// }
// </div> */}

// export default App;
//CORRECT END!!







































// export default function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   console.log(questions);
// }

// const generateQuestions = (setData) => {
//   fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean")
//     .then((response) => response.json())
//     .then((data) => setData(data.results));
// }
