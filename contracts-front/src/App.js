import Header from './components/Header/Header';
import Contracts from './components/Contracts/Contracts';

function App() {

  return (
    <div className="main-container">
      <Header />
      <div className="row">
        <Contracts />
      </div>
    </div>
  );
}

export default App;
