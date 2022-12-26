import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import PageNotFound from './Components/PageNotFound';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
