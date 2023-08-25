import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { SearchBox } from '@mapbox/search-js-react';

const Search = () => {
  const [value, setValue] = useState('');
  const accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;
  return (
    // @ts-ignore
    <SearchBox
      value={value}
      onChange={(v) => setValue(v)}
      accessToken={accessToken}
    />
  );
};

export default Search;
