import { useState } from "react";
import { Button } from "./Button";
import { Staticline } from "./Staticsline";

const App = () => {
  // save each button click in its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncreaseGood = () => {
    setGood((good) => good + 1);
  };
  const handleIncreaseNeutral = () => {
    setNeutral((neutral) => neutral + 1);
  };
  const handleIncreaseBad = () => {
    setBad((bad) => bad + 1);
  };

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [text, setText] = useState(anecdotes[0]);
  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const maxVotes = Math.max(...points);
  const maxVotesIndex = points.reduce((element, point, index) => {
    if (point === maxVotes) {
      element.push(index);
    }
    return element;
  }, []);

  const handleSelect = () => {
    const selected = Math.floor(Math.random() * anecdotes.length);
    setSelected(selected);
    setText(anecdotes[selected]);
  };
  const feedbackTotal = good + neutral + bad;
  const feedbackAverage = (good - bad) / feedbackTotal;
  const feedbackPositive = (good * 100) / feedbackTotal;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleIncreaseGood} text="Good" />
      <Button handleClick={handleIncreaseNeutral} text="Neutral" />
      <Button handleClick={handleIncreaseBad} text="Bad" />
      <h1>statistics</h1>
      {feedbackTotal === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <Staticline text="Good" value={good} />
            <Staticline text="Neutral" value={neutral} />
            <Staticline text="Bad" value={bad} />
            <Staticline text="All" value={feedbackTotal} />
            <Staticline text="Average" value={feedbackAverage} />
            <Staticline text="Positive" value={feedbackPositive} />
          </tbody>
        </table>
      )}
      <p>{text}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleSelect} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {maxVotes === 0 ? (
        <p>No votes yet</p>
      ) : (
        <p>{anecdotes[maxVotesIndex[0]]}</p>
      )}
    </div>
  );
};

export default App;
