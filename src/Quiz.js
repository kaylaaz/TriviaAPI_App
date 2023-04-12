import './App.css';
import Question from './Question';

function Quiz({ results }) {
    // App.js - data
    // Quiz.js - results(data.results)
    // Question.js - question_infot(daata.results[0])
    return (
        <div className="App">
            <h1>OpenTriviaAPI Quiz</h1>
            {results && results.map((item, index) => {
                return (
                    <Question key={"question" + index} info={item} />
                )
            })}
        </div>
    );
}


export default Quiz;