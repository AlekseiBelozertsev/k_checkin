import React, { useState } from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { useSearchStore } from '@/utils/store/searchStore';
import { SearchBoxRetrieveResponse } from '@mapbox/search-js-core';
import { places } from '@/utils/mocks/places';

const Search = () => {
  const setValue = useSearchStore((state) => state.setValue);
  const value = useSearchStore((state) => state.value);

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
  };

  const addPlace = (place: SearchBoxRetrieveResponse) => {
    places.push(place);
    console.log(places);
  };
  return (
    // @ts-ignore
    <SearchBox
      theme={{ variables: { ...searchBoxTheme } }}
      popoverOptions={{ offset: 10 }}
      value={value}
      onChange={(v) => setValue(v)}
      accessToken={accessToken}
      //onRetrieve gets the geoJSON I need on click of the list element.
      onRetrieve={(place) => addPlace(place)}
      placeholder={' '}
    />
  );
};

export default Search;
