import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(() => {
    return Math.floor(Math.random() * 7);
  });

  const [mostPopular, setMostPopular] = useState(() => {
    return 0;
  })

  function vote(num){
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    let mostPopular = 0;
    let mostVotes = copy[0];
    for (let i = 0; i < copy.length; i++){
      if (copy[i] > mostVotes){
        mostPopular = i;
        mostVotes = copy[i];
      }
    }
    setMostPopular(mostPopular);
  }

  function next(){
    let newSelect = selected + 1;
    if (newSelect >= anecdotes.length){
      newSelect = 0;
    }
    setSelected(newSelect);
  }

  const points = new Array(7).fill(0);

  const [votes, setVotes] = useState(points);
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has { votes[selected] } votes</div>
      <Button onClick={() => vote(selected)} text="vote" />
      <Button onClick={() => next()} text="next" />
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostPopular]}
      <div>with {votes[mostPopular]} votes</div>
    </div>
  )
}

export default App