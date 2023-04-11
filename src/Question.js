import React, { useState } from 'react';
//import Button from '@mui/material/Button';
//import { Button } from '@mui/material';

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function Question({ info }) {
    // const [is, setUserAnswer] = useState();
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(false);

    const checkAnswer = (user_choice) => {
        // if (!userAnswer) return
        if (user_choice === info.correct_answer) {
            setMessage("Congrats! You got it correct.")
            return true;
        } else {
            setMessage("Sorry, you got it incorrect :((")
            return false;
        }

    }
    //const choices = [...info.incorrect_answers, info.correct_answers];
    //choices.concat([info.correct_answers]);
    const choices = info.incorrect_answers.concat([info.correct_answer]);
    shuffle(choices);
    //const newChoices = shuffle(choices);
    //console.log(choices.length);
    //const newthings = Shuffle([1, 2, 3, 4, 5]);


    return (
        <>
            <h2>{info.question}</h2>
            {/* <button>{choices}</button>
            <button>{newChoices}</button> */}
            {choices.map((option, index) => <button disabled={disabled} onClick={() => {
                checkAnswer(option);
                setDisabled(true);
            }
            }>{option}</button>)}
            {/* <Button>Hello</Button> */}

            <p>{message}</p>
        </>

    );
}


export default Question;