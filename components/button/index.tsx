import React from 'react';
import { Button as ButtonAntd, ButtonProps } from 'antd';
import clsx from '@/helpers/clsx';

interface IProps extends ButtonProps {
  className?: string;
}

const Button: React.FC<IProps> = ({ className, ...others }) => {
  return <ButtonAntd className={clsx('custom-btn', className)} {...others} />;
};

export default Button;
