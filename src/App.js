import {Routes, Route} from 'react-router-dom'
// import { useSelector } from 'react-redux';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import SignUpForm from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import ShowMeSomeShtBtn from "./components/ShowMeSomeShTBtn/ShowMeSomeShtBtn";
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivatRoute/PrivateRoute';






// const user = {
//   "name": 'Unga Bunga',
//   "email": 'unga-bunga@gmail.com',
//   "password": 'ungabungaconfused'
// }

function App(){


    return (
      <>
        <Routes>
          <Route path='/'>
              <Route path='signup' element={<PublicRoute>
                <SignUpForm />
              </PublicRoute>} />
              <Route path='login' element={<PublicRoute>
                <LoginForm />
              </PublicRoute>} />
          </Route>
        </Routes>
        <ShowMeSomeShtBtn />
        <LogoutButton />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>

    )
  
}

export default App;

