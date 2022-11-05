import ContractItem from './ContractIem';
import './ContractsList.css';

const ContractsList = props => {
  const { contracts, onAdd, onSubstract } = props;

  const contractsList = contracts.map(contract => 
    <ContractItem
      key={contract.code}
      contract={contract}
      onAdd={onAdd}
      onSubstract={onSubstract}
    />
  );

  return (
    <div className="white-container">
      <ul>{contractsList}</ul>
    </div>
  );
};

export default ContractsList;
