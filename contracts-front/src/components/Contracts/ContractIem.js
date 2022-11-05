import './ContractItem.css';

const ContractItem = (props) => {
  const { contract, onAdd, onSubstract } = props;
  const { count, name } = contract;
  const styleName = contract.count ? 'selected' : 'unselected';
  const disable = contract.count ? false : true;

  const onSubClickHandler = () => {
    onSubstract(contract);
  };

  const onAddClickHandler = () => {
    onAdd(contract);
  };

  return (
    <li className={styleName}>
      <button className={`btn-${styleName}`} disabled={disable} onClick={onSubClickHandler}>-</button>
      <button className={`count-${styleName}`}>{count}</button>
      <button className={`btn-${styleName}`} onClick={onAddClickHandler}>+</button>
      <div className="name">{name}</div>
    </li>
  );
};

export default ContractItem;
