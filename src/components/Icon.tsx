import React from 'react';
import Image from 'next/image';

type IconProps = {
  width: number;
  height: number;
  src: string;
};

const Icon: React.FC<IconProps> = ({ width, height, src }) => {
  return <Image src={src} width={width} height={height} alt={`icon`} />;
};

export default Icon;
