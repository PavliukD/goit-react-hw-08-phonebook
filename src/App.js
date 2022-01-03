import {Routes, Route} from 'react-router-dom'
import ContactForm from "./components/ContactForm/ContactForm";
import Contacts from './components/Contacts/Contacts';
import SignUpForm from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivatRoute/PrivateRoute';
import Header from './components/Header/Header';
import s from './App.module.css'






// const user = {
//   "name": 'Unga Bunga',
//   "email": 'unga-bunga@gmail.com',
//   "password": 'ungabungaconfused'
// }

function App(){

  return (
    <div className={s.App}>
      <Routes>
        <Route path='/' element={<Header />}>
            <Route path='signup' element={<PublicRoute>
              <SignUpForm />
            </PublicRoute>} />
            <Route index element={<PublicRoute>
              <LoginForm />
            </PublicRoute>} />
            <Route path='addContact' element={<PrivateRoute>
              <ContactForm />
            </PrivateRoute>}/>
            <Route path='phonebook'element={<PrivateRoute>
              <Contacts />
            </PrivateRoute>}/>
        </Route>
      </Routes>
    </div>
  )  
}

export default App;

