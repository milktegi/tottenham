import React from 'react';
import { Link } from 'react-router-dom';
import { element } from 'prop-types';

export const Tag = props => {
  const template = (
    <div
      style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: '5px 10px',
        display: 'inline-block',
        fontFamily: 'monospace',
        fontWeight: '900',
        ...props.add
      }}
    >
      {props.children}
    </div>
  );
  if (props.link) {
    return <Link to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
};

export const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export const reverseArray = arr => {
  // let reversed = [];
  // for(let i = arr.length - 1; i >= 0; i--){
  // 	reversed.push(arr[i])
  // }
  // return reversed;
  let reversed = [...arr].reverse();
  return reversed;
  // return [...arr].reverse();
};

export const validate = formdata => {
  let error = [true, ''];

  if (formdata.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(formdata.value);
    const message = `${!valid ? '이메일을 바르게 입력해주세요' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (formdata.validation.required) {
    const valid = formdata.value.trim() !== '';
    const message = `${!valid ? '이메일을 바르게 입력해주세요' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};
