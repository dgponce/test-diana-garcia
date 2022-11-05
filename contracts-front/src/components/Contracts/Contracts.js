import { useState, useEffect } from 'react';

import Cart from '../Cart/Cart';
import ContractsList from './ContractsList';

const Contracts = () => {
  const [ contracts, setContracts] = useState([]);
  const [ cartContracts, setCartContracts ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/contracts')
      .then(response => response.json())
      .then(res => {
        if (res && res.data) {
          setContracts(res.data);
        }
      });
  }, []);

  const onAddHandler = contract => {
    const found = cartContracts.find(item => item.code === contract.code);
    contract.count += 1;
  
    if (found) {
      setCartContracts(cartContracts.map(item => item.code === contract.code ? { ...found, count: found.count + 1 } : item ));
    } else {
      setCartContracts([...cartContracts, { ...contract, count: 1 }]);
    }
  };

  const onSubstractHandler = contract => {
    const found = cartContracts.find(item => item.code === contract.code);
    contract.count -= 1;
    
    if (found.count === 1) {
      setCartContracts(cartContracts.filter(item => item.code !== contract.code));
    } else {
      setCartContracts(cartContracts.map(item => item.code === contract.code ? { ...found, count: found.count - 1 } : item ));
    }
  };

  return (
    <>
      <ContractsList onSubstract={onSubstractHandler} onAdd={onAddHandler} contracts={contracts} />
      <Cart cartContracts={cartContracts} />
    </>
  );
};

export default Contracts;
