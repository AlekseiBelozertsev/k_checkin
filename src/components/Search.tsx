import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { SearchBox } from '@mapbox/search-js-react';

const Search = () => {
  const [value, setValue] = useState('');
  const accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;
  const searchBoxTheme = {
    fontFamily: '__Jockey_One_c6ad53',
    colorBackground: '#E6ECF5',
    colorBackgroundActive: '#BFCEE4',
    colorText: '#0D121D',
    fontWeight: `400`,
    unit: '16px',
    padding: '.5em',
    borderRadius: '8px',
    boxShadow: 'none',
  }
  return (
    // @ts-ignore
    <SearchBox
      theme={{ variables: { ...searchBoxTheme } }}
      value={value}
      onChange={(v) => setValue(v)}
      accessToken={accessToken}
      //onRetrieve gets the geoJSON I need on click of the list element.
      onRetrieve={(place) => console.log(place)}
      placeholder={' '}
    />
  );
};

export default Search;
