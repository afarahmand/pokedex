import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store.js';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';

//testing
// import { fetchAllPokemon } from './util/api_util';
// import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
// import { selectAllPokemon } from './reducers/selectors';


const Root = ({store}) => (
  <Provider store={store}>
    <PokemonIndexContainer/>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

//testing
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
