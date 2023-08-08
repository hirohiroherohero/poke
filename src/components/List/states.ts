import { useState } from 'react';

import { Pokemon_ListQuery, usePokemon_ListLazyQuery } from '@/graphql/queries/pokemonList.graphql';

const useStates = () => {
  const [pokeList, setPokeList] = useState<Pokemon_ListQuery['pokemon_v2_pokemon']>();

  const [pokemon_ListLazyQuery] = usePokemon_ListLazyQuery();

  const getter = { pokemon_ListLazyQuery, pokeList };
  const setter = { setPokeList };

  return { ...getter, ...setter };
};

export default useStates;
