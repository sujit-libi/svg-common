import React from 'react';
import avatar from './avatar.svg';

const Avatar = props => (
  <img
    src={avatar}
    className="Avatar-Logo"
    alt="avatar"
    height={props.height}
    width={props.width}
  />
);

Avatar.propTypes = {};

Avatar.defaultProps = {
  height: 200,
  width: 200
};

export { Avatar };
