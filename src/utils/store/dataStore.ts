import { create } from 'zustand';
import { Place } from './mapStore';

type DataStoreType = {
  places: Place[];
  postData: (url: string, data: Place) => void;
  getData: (url: string) => void;
};
