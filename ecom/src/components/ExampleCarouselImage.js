import React from 'react';

function ExampleCarouselImage({ text, src }) {
    return (
      <div>
        <img
          src={src}
          alt={text}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <h4 style={{ textAlign: 'center' }}>{text}</h4>
      </div>
    );
  }
  export default ExampleCarouselImage;  