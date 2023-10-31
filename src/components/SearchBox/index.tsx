import React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { useSearchStore } from '@/utils/store/searchStore';
import { Place, useMapStore } from '@/utils/store/mapStore';
import { useModalStore } from '@/utils/store/modalStore';
import { SearchBoxRetrieveResponse } from '@mapbox/search-js-core';
import { v4 } from 'uuid';

const Search = () => {
  const setValue = useSearchStore((state) => state.setValue);
  const value = useSearchStore((state) => state.value);
  const addPlace = useMapStore((state) => state.addPlace);
  const handleModaClose = useModalStore((state) => state.closeModal);

  const accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`;
  const searchBoxTheme = {
    fontFamily: '__Jockey_One_c6ad53',
    colorBackground: '#E6ECF5',
    colorBackgroundActive: '#BFCEE4',
    colorText: '#0D121D',
    fontWeight: `normal`,
    unit: '18px',
    padding: '.5em',
    borderRadius: '8px',
    boxShadow: 'none',
  };

  const createDataObject = (place: SearchBoxRetrieveResponse) => {
    const data: Place = {
      id: v4(),
      name: place.features[0].properties.name,
      address: place.features[0].properties.address ?? '',
      country: place.features[0].properties.place_formatted ?? '',
      coordinates: [
        place.features[0].properties.coordinates.latitude,
        place.features[0].properties.coordinates.longitude,
      ],
      createdAt: new Date().toISOString(),
    };
    return data;
  };

  const { postData } = useMapStore();

  const postPlace = (place: SearchBoxRetrieveResponse) => {
    const data = createDataObject(place)
    postData(`${process.env.NEXT_PUBLIC_LOCALHOST}/addPlaces`, data);
  };

  const onSearchBoxRetrieve = (place: SearchBoxRetrieveResponse) => {
    addPlace(createDataObject(place));
    handleModaClose('add-place-modal');
    postPlace(place);
  };

  return (
    // @ts-ignore
    <SearchBox
      theme={{ variables: { ...searchBoxTheme } }}
      popoverOptions={{ offset: 10 }}
      value={value}
      onChange={(v) => setValue(v)}
      accessToken={accessToken}
      // onRetrieve uses SearchBoxApiResponse type
      onRetrieve={onSearchBoxRetrieve}
      placeholder={' '}
    />
  );
};

export default Search;
