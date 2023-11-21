import React from 'react'

function Image({src,...rest}) {
    src = src && src.includes('https://')
    ? src
    : '/uploads/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}

export default Image