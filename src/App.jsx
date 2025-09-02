
import './App.css'
import ListofEmployees from './Components/ListofEmployees'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import EmployeeComponent from './Components/EmployeeComponent'
function App() {
  

  return (
    <> 
   <BrowserRouter basename="/employees-management-sys">
  <HeaderComponent/>

  <Routes>
    <Route path="/" element={<ListofEmployees/>} />
    <Route path="/employees" element={<ListofEmployees/>} />
    <Route path="/add-employee" element={<EmployeeComponent/>} />
    <Route path="/update-employees/:id" element={<EmployeeComponent/>} />
  </Routes>

  <FooterComponent/>
</BrowserRouter>

    
    </>
  )
}

export default App