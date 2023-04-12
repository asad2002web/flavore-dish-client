import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/utilities/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className='md:min-h-[calc(100vh-341px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
