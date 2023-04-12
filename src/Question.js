import React, { useState } from 'react';
import Button from '@mui/material/Button';

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


function Question({ info }) {
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(false);

    const checkAnswer = (user_choice) => {
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


    return (
        <>
            <h2>{info.question}</h2>
            {choices.map((option, index) => <Button
                disabled={disabled} variant="contained" color="secondary" size="large" onClick={() => {
                    checkAnswer(option);
                    setDisabled(true);
                }
                }>{option}</Button>)}
            {/* {choices.map((option, index) => <button disabled={disabled} onClick={() => {
                checkAnswer(option);
                setDisabled(true);
            }
            }>{option}</button>)} */}
            <p>{message}</p>

        </>


    );
}


export default Question;