import { States } from './types';

const useHandlers = (states: States) => {
  const { setPokeList, pokemon_ListLazyQuery } = states;

  const getPokeList = async () => {
    const { data, error } = await pokemon_ListLazyQuery({ variables: { offset: 0, limit: 30 } });

    if (data) {
      const { pokemon_v2_pokemon: pokemonList } = data;
      setPokeList(pokemonList);
    }

    if (error) throw new Error('pokemon_ListLazyQuery error');
  };

  return { getPokeList };
};

export default useHandlers;
