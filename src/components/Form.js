import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';
import WOModel from "../model.js/WOModel";

function Form({currentWO, handleAdd}) {
  const [form, setForm] = useState({
    date: '',
    distance: '',
  });

  useEffect(() => {
    if (currentWO) {
      setForm({date: currentWO.date, distance: currentWO.distance});
    }
  }, [currentWO]);

  const handleChange = evt => {
    const {name, value} = evt.target;
    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const workout = new WOModel(
      shortid.generate(),
      form.date,
      form.distance,
    );
    handleAdd(workout);
    setForm({date: '', distance: ''});
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="date">Дата (дд.мм.гг)</label>
        <input
          type="date"
          id="date"
          name="date"
          className="input"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="distance">Пройдено (км)</label>
        <input
          type="number"
          step="any"
          name="distance"
          className="input"
          id="distance"
          value={form.distance}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <button className="button" type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  setWorkouts: PropTypes.func.isRequired,
}

export default Form;