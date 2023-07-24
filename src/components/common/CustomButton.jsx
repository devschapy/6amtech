import React from 'react';
import { Button } from '@material-tailwind/react';

const CustomButton = ({ className, btnType, type, children, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        type={type ? type : 'button'}
        className={`${className} ${
          btnType === 'primary' ? 'bg-primary-100' : 'bg-transparent'
        }  text-white text-xs rounded-full py-1 px-4 flex gap-3 items-center font-[500] normal-case`}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
