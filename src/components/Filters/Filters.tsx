import { MapFiltersType } from '@/utils/store/mapStore';
import filtersStyles from '../components/styles/filters.module.scss';
import React from 'react';

interface FiltersProps {
  items: MapFiltersType[];
}

interface FilterItemProps {
  text: string;
  onCLick: () => void;
  isActive: boolean;
}

const FilterItem: React.FC<FilterItemProps> = ({ text, onCLick, isActive }) => {
  return (
    <button className={filtersStyles.filterItem}>
      <p>{text}</p>
    </button>
  );
};

const Filters: React.FC<FiltersProps> = ({ items }) => {
  return (
    <div className={filtersStyles.mapFiltersWrapper}>
      <div className={filtersStyles.main}>
        {items.map((item, i) => {
          return (
            <FilterItem
              isActive={item.isActive}
              onCLick={() => null}
              text={item.name}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
