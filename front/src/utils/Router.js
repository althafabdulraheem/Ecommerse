import {Routes,Route} from 'react-router-dom';
import {Login,Landing,Cart,Item} from '../pages';
import Demo from '../pages/Demo';
const Router=()=>{
    return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/product/:slug" element={<Item/>} />
        <Route path='/demo' element={<Demo/>}></Route>
    </Routes>
    )
}

export default Router;