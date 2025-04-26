import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import YourTime from './pages/your-time/your-time'

export default function AppRouter() {
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/your-time' element={<YourTime />}/>
        </Routes>
    )
}