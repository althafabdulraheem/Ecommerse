import {Routes,Route} from 'react-router-dom';
import {Login,Landing} from '../pages'
const Router=()=>{
    return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/landing' element={<Landing/>} />
    </Routes>
    )
}

export default Router;