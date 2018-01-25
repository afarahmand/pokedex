import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  let arr = [];
  arr = values(state.entities.pokemon);
  return arr;
};
