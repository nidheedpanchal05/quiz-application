import React, { useState, useEffect } from 'react';
import data from './data';
import './quiz.css';

let recordData = [{ questionAsked: '', choice: '', mark: '' }];

const SingleQuestion = ({ quest, len }) => {
  const [score, setScore] = useState(0);
  const [currQues, setCurrQues] = useState(0);
  const question = quest[currQues];
  const [clicked, isClicked] = useState(false);
  const [option, setOption] = useState([]);
  const [selected, setSelected] = useState();
  const [correct, isCorrect] = useState();
  const [record, setRecord] = useState(recordData);

  useEffect(() => {
    if (currQues >= 0) {
      const anList = [question.correctAns, ...question.incorrectAns];
      let random = anList.sort(() => Math.random() - 0.5);
      setOption(random);
    }
  }, [question, currQues]);

  if (currQues === -1) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>
          Score : <span style={{ fontSize: '34px' }}>{score}</span> / {len}
        </h2>
        <button
          type='button'
          className='nextbutton'
          onClick={() => {
            isClicked(false);
            setCurrQues(0);
            setScore(0);
            setRecord(recordData);
          }}
        >
          Play Again
        </button>
        <table cellPadding='5px' cellSpacing='5px'>
          <thead>
            <tr>
              <td>Question</td>
              <td>You Selected</td>
              <td>Mark</td>
            </tr>
            <tbody>
              {record.map((data) => {
                return (
                  <tr>
                    <td>{data.questionAsked}</td>
                    <td>{data.choice}</td>
                    <td>{data.mark}</td>
                  </tr>
                );
              })}
            </tbody>
          </thead>
        </table>
      </div>
    );
  }

  return (
    <div className='ques' key={question.id}>
      Question <span style={{ fontSize: '24px' }}>{question.id}</span> / {len}
      <h3>{question.ques}</h3>
      <ul>
        {option.map((option, index) => {
          const checkAnswer = (asked, ans) => {
            setSelected(ans);
            setRecord([
              ...record,
              {
                questionAsked: asked,
                choice: ans,
                mark: ans === question.correctAns ? 'Correct ' : 'Wrong ',
              },
            ]);
            isClicked(true);
            if (ans === question.correctAns) {
              isCorrect(ans);
              setScore(score + 1);
            }

            setTimeout(() => {
              if (currQues < len - 1) {
                isClicked(false);
                setCurrQues(currQues + 1);
              }
              if (currQues === len - 1) {
                setCurrQues(-1);
              }
            }, 1000);
          };

          const handleSelect = (ans) => {
            if (selected === ans && selected === question.correctAns) {
              return 'green-btn';
            } else if (selected === ans && selected !== question.correctAns) {
              return 'red-btn';
            } else if (ans === correct) {
              return 'green-btn';
            }
          };

          /* const specific = clicked
            ? option === question.correctAns
              ? 'green-btn'
              : 'red-btn'
            : 'none'; */

          return (
            <li key={index}>
              <button
                disabled={clicked}
                value={option}
                onClick={() => {
                  checkAnswer(question.ques, option);
                }}
                className={`none ${selected && handleSelect(option)}`}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const QuestionSet = ({ id }) => {
  const quiz = data[id - 1];
  return (
    <div className='quiz'>
      <h1>{quiz.title}</h1>
      <SingleQuestion
        key={quiz.id}
        quest={quiz.questions}
        len={quiz.questions.length}
      />
    </div>
  );
};

function Quiz() {
  const [category, setCategory] = useState(0);
  if (category === 0) {
    return (
      <div className='btn'>
        <h1 className='heading'>Brainify Quiz</h1>
        <button type='button' onClick={() => setCategory(1)}>
          Start Quiz
        </button>
      </div>
    );
  } else
    return (
      <div className='category'>
        <h2>Select categories </h2>
        <button
          type='button'
          className='nextbutton quitbutton'
          onClick={() => setCategory(0)}
        >
          Quit
        </button>
        {data.map((set) => {
          return (
            <div key={set.id} className='catList'>
              <button
                type='button'
                value={set.id}
                onClick={(e) => {
                  setCategory(e.target.value);
                }}
              >
                {set.title}
              </button>
            </div>
          );
        })}
        <QuestionSet key={category} id={category} />
      </div>
    );
}

export default Quiz;
