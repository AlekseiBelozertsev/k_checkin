import React from 'react';

type ShowAllBtnProps = {
  onClick: () => void;
};

const ShowAll: React.FC<ShowAllBtnProps> = ({ onClick }) => {
  return <button>{`Show all`}</button>;
};

export default ShowAll;
