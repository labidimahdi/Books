import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createbook' element={<CreateBook/>}/>
      <Route path='/deletebook' element={<DeleteBook/>}/>
      <Route path='/editbook' element={<EditBook/>}/>
      <Route path='showbook' element={<ShowBook/>}/>

    </Routes>
  )
}

export default App