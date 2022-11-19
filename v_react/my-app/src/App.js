import './App.css';
import { BrowserRouter,Routes, Route, Link,Switch } from "react-router-dom";
import Home from './component/home/home';
import Type from './component/type-test/type-test';
import Header from './component/header/header';
import ProductList from './component/product-list/product-list';
import ProductDetail from './component/product-detail/product-detail';

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type-test" element={<Type />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
      
  </BrowserRouter>
  )
}

export default App;
