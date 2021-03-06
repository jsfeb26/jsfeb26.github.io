import React from 'react';
import { config } from 'config';
import { rhythm } from 'utils/typography';
import profilePic from '../images/profile-picture.png';

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>{config.authorName}</strong> who lives and works in New York building useful things. <a href="https://twitter.com/jsfeb26">You should follow him on Twitter</a>
      </p>
    )
  }
}

export default Bio;
