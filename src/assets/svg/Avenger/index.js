import React from 'react';
import avenger from './avenger.svg';

const Avenger = props => (
  <img
    src={avenger}
    className="Avenger-Logo"
    alt="avenger"
    height={props.height}
    width={props.width}
  />
);

Avenger.propTypes = {};

Avenger.defaultProps = {
  height: 200,
  width: 200
};

export { Avenger };
