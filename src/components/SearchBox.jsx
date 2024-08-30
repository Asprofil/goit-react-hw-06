import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/FilterSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label>Find contacts by name</label>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
