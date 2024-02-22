import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";

import CoinDetail from "./component/CoinDetail";
import Exchanges from "./component/Exchanges";
import Conias from "./component/Conias";



function App() {
  return <Router>
    <Header/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/conias" element={<Conias/>}/>
      <Route path="/exchanges" element={<Exchanges/>}/>
      <Route path="/coin/:id" element={<CoinDetail/>}/>
    </Routes>
  </Router>

  }
      


export default App;
