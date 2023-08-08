import { useEffect } from 'react';

import useStates from './states';
import useHandlers from './handlers';

const List = () => {
  const states = useStates();
  const { pokeList } = states;
  const { getPokeList } = useHandlers(states);

  useEffect(() => {
    getPokeList();
  }, []);

  return <>{pokeList?.map((v, i) => <div key={i}>{v.name}</div>)}</>;
};

export default List;
