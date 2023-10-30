import React from 'react';
import loaderStyles from './loader.module.scss';
import Icon from '../Icon';
import loader from '../../../public/icons/loader.svg';

const Loader = () => {
  return (
    <div className={loaderStyles.main}>
      <Icon height={32} width={32} src={loader} />
    </div>
  );
};

export default Loader;
