import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import RequireAuth from './Pages/LoginRegister/RequierAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/itemDetails/:id' element={
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        }></Route>

        <Route path='/manageInventories' element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
