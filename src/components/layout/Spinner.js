import { Fragment } from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
  return (
    <Fragment>
      <img src={spinner} alt='Loading' style={spinnerStyle} />
    </Fragment>
  );
}

const spinnerStyle = {
  width: 200,
  margin: 'auto',
  display: 'block'
};
