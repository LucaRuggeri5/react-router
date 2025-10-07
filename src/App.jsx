import './App.css'

// import libreria di routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import del layourt
import DefaultLayout from './layouts/DefautLayout';

// import delle pagine
import MyHomePage from './pages/MyHomePage';
import MyContacts from './pages/MyContacts';
import MyProducts from './pages/MyProducts';
import MyDetailProducts from './pages/MyDetailProducts';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<MyHomePage />} />
            <Route path='/contact' element={<MyContacts />} />
            <Route path='/products'>
              <Route path='' element={<MyProducts />} />
              <Route path=':id' element={<MyDetailProducts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App