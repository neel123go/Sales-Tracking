import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import RequireAuth from './Pages/LoginRegister/RequierAuth/RequireAuth';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import { Toaster } from 'react-hot-toast';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';

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

        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>

        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
