import React, { useState } from 'react';

function MiniModalWrapper({ children, size }) {
  const [style, setStyle] = useState({
    height: `${size.itemHeight * 1}vw `,
    width: `${size.itemWidth * 1}vw`,
  });
  // console.log('SIZE', size);
  // console.log('style', style);

  return (
    <div
      style={style}
      className='miniModal'
      onMouseEnter={() => {
        console.log('enter');
        setStyle({
          height: `${size.itemHeight * 2.5}vw `,
          width: `${size.itemWidth * 2}vw`,
        });
      }}
      onMouseLeave={() =>
        setStyle({
          height: `${size.itemHeight * 1}vw `,
          width: `${size.itemWidth * 1}vw`,
        })
      }>
      {children}
    </div>
  );
}

export default MiniModalWrapper;
