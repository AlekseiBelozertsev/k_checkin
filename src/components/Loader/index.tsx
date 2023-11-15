import React from 'react';
import loaderStyles from './loader.module.scss';
import Icon from '../Icon';
import loader from '../../../public/icons/loader.svg';

type LoaderProps = {
  size: number;
};
const Loader: React.FC<LoaderProps> = ({ size }) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={loaderStyles.main}
    >
      <Icon height={size} width={size} src={loader} />
    </div>
  );
};

export default Loader;
