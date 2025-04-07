import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cabecera from './components/Cabecera/Cabecera'
import Auth from './pages/Auth/Auth'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Tasks from './pages/Tasks/Tasks'
import CrearTaskForm from './components/CrearTaskForm/CrearTaskForm'
import EditarTaskForm from './components/EditarTaskForm/EditarTaskForm'
import EliminarTaskForm from './components/EliminarTaskForm/EliminarTaskForm'
function App() {

  return (
    <>
    <Cabecera></Cabecera>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Auth></Auth>}></Route>
      <Route path="/tasks" element={<Tasks></Tasks>}></Route>
      <Route path="/tasks/create" element={<CrearTaskForm></CrearTaskForm>}></Route>
      <Route path="/tasks/update" element={<EditarTaskForm></EditarTaskForm>}></Route>
      <Route path="/tasks/delete" element={<EliminarTaskForm></EliminarTaskForm>}></Route>


    </Routes>
    </>
  )
}

export default App;