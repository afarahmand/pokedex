import React from 'react';

class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.pokemon.map(poke =>
            <li key={poke.id}>
               {poke.name}
               <img src={poke.image_url} height="50" width="50"></img>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
