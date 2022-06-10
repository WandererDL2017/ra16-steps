import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [currentWO, setCurrentWO] = useState({
    date: '',
    distance: ''
  });

  const sortItems = (startDate, nextDate) => {
    if (startDate.date > nextDate.date) return -1;
    if (startDate.date < nextDate.date) return 1;
    return 0
  };

  const handleAdd = workout => {
    setWorkouts(prevWorkouts => {
      for (let prevWorkout of prevWorkouts) {
        if (prevWorkout && prevWorkout.date === workout.date) {
          prevWorkout.distance =
            Number(prevWorkout.distance) + Number(workout.distance);
          return [...prevWorkouts].sort(sortItems);
        }
      }
      return [...prevWorkouts, workout].sort(sortItems);
    });
  };

  const handleDelete = id => {
    setWorkouts(prevWorkouts =>
      prevWorkouts.filter(workout => workout.id !== id),
    );
  };

  const handleEdit = id => {
    const workout = workouts.find(item => item.id === id);
    setCurrentWO({
      date: workout.date,
      distance: workout.distance,
    });
    handleDelete(workout.id);
  };

  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <Form
          setWorkouts={setWorkouts}
          handleAdd={handleAdd}
          currentWO={currentWO}
        />
        <Table
          workouts={workouts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
