import {Routes,Route} from 'react-router-dom';
import {Login,Landing,Cart,Item} from '../pages'
const Router=()=>{
    return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/product/:slug" element={<Item/>} />
    </Routes>
    )
}

export default Router;