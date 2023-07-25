import React from 'react';
import Image from 'next/image';

const CustomImage = ({ src, className, alt }) => {
  return <img src={src} alt={alt} className={`${className}`} />;
};

export default CustomImage;
