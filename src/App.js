import {Routes, Route} from 'react-router-dom'
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import SignUpForm from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import ShowMeSomeShtBtn from "./components/ShowMeSomeShTBtn/ShowMeSomeShtBtn";
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivatRoute/PrivateRoute';
import Header from './components/Header/Header';






// const user = {
//   "name": 'Unga Bunga',
//   "email": 'unga-bunga@gmail.com',
//   "password": 'ungabungaconfused'
// }

function App(){


  return (
    <div>
      <ShowMeSomeShtBtn>SHOW!!!</ShowMeSomeShtBtn>
      <LogoutButton />
      <Routes>
        <Route path='/' element={<Header />}>
            <Route path='signup' element={<PublicRoute>
              <SignUpForm />
            </PublicRoute>} />
            <Route index element={<PublicRoute>
              <LoginForm />
            </PublicRoute>} />
            <Route index element={<PrivateRoute>
              <ContactForm />
            </PrivateRoute>}/>
            <Route path='phonebook'element={<PrivateRoute>
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </PrivateRoute>}/>
        </Route>
      </Routes>
    </div>
  )  
}

export default App;

