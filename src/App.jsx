import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header.jsx';

import Home from './Home.jsx';
import Equipes from './Equipes.jsx';
import Pagina404 from './Pagina404.jsx';


const App = ()=>{
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/equipes' element={<Equipes/>}/>
            <Route path='*' element={<Pagina404/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App;
