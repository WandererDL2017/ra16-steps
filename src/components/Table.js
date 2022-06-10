function Table({
  workouts, 
  handleEdit, 
  handleDelete 
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата (дд.мм.гг)</th>
          <th>Пройдено (км)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map(workout => (
          <tr key={workout.id}>
            <td>{workout.date}</td>
            <td>{workout.distance}</td>
            <td>
              <button onClick={() => handleEdit(workout.id)}>
                <i className="material-icons">assignment</i>
              </button>
              <button onClick={() => handleDelete(workout.id)}>
                <i className="material-icons">
                  delete_sweep
                </i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;