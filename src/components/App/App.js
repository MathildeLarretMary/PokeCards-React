import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
// import { getAllGen, getAllTypes, getAllPkm  } from '../../request/requests';

function App() {

  // render
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home />}
          index
        />
      </Routes>
    </div>
  );
}

export default App;
