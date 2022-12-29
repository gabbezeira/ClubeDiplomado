import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vantagens from '../components/Vantagens';
import Conveniados from '../components/Conveniados';
import Formulario from '../components/Formulario';
import Home from '../pages/Home';

export default function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Vantagens' element={<Vantagens/>} />
                <Route path='/Conveniados' component={Conveniados} />
                <Route path='/Formulario' component={Formulario} />
            </Routes>
           
        </BrowserRouter>
    )

}