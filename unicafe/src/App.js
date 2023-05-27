import React, { useState } from 'react';

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const totalFeedback = good + neutral + bad;
  const averageScore = (good - bad) / totalFeedback || 0;
  const positivePercentage = (good / totalFeedback) * 100 || 0;

  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={totalFeedback} />
          <StatisticLine text="average" value={averageScore.toFixed(2)} />
          <StatisticLine
            text="positive"
            value={`${positivePercentage.toFixed(1)} %`}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedbackType) => {
    if (feedbackType === 'good') {
      setGood(good + 1);
    } else if (feedbackType === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedbackType === 'bad') {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      <h1>give feedback</h1>

      <Button text="good" handleClick={() => handleFeedback('good')} />
      <Button text="neutral" handleClick={() => handleFeedback('neutral')} />
      <Button text="bad" handleClick={() => handleFeedback('bad')} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;



