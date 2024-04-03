import React from 'react';
import styled from 'styled-components';

const Banner = ({title,desc}) => {
  const bannerStyle = {
    backgroundColor: 'powderblue',
    padding: '50px 20px',
    textAlign: 'center',
  };
  return (
    <div style={bannerStyle}>
        <h3 className={title}>{title}</h3>
        <p className={desc}>{desc}</p>
    </div>
  )
}

export default Banner