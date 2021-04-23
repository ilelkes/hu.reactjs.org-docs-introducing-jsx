import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'István',
  lastName: 'Lelkes'
};

function getGreeting(user) {
  if (user) {
    return <h1>Üdv, {formatName(user)}!</h1>;
  }
  return <h1>Üdv, idegen.</h1>;
}

ReactDOM.render(
  getGreeting(user),
  document.getElementById('root')
);