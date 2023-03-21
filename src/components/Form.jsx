import React from 'react';
import validate from './validate';

const Form = () => {
  const [userData, setUserData] = React.useState({ username: '', password: '' });
  const [errors, setErrors] = React.useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(userData);
    setErrors(errors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={userData.username} onChange={handleInputChange} />
      {errors.username && <span>{errors.username}</span>}

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} />
      {errors.password && <span>{errors.password}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
