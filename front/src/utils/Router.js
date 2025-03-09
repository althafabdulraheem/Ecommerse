import {Routes,Route} from 'react-router-dom';
import {Login,Landing,Cart} from '../pages'
const Router=()=>{
    return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    )
}

export default Router;