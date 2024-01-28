import './App.css'
import Header from './components/HeaderComponent'   
import Footer from './components/FooterComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* // http://localhost:3000 */}
        <Route path='/' element={<ListEmployeeComponent/>}></Route>
        {/* // http://localhost:3000/employees */}
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
