import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import SignUpForm from "./components/SignupForm/SignupForm";
import LoginForm from "./components/LoginForm/LoginForm";
import * as api from "./services/api/api";





// const user = {
//   "name": 'Unga Bunga',
//   "email": 'unga-bunga@gmail.com',
//   "password": 'ungabungaconfused'
// }

function App(){

  console.log(api)

    return (
      <>
        {/* <SignUpForm /> */}
        <LoginForm />
        <h1>Phonebook</h1>
        <ContactForm />
        {/* <h2>Contacts</h2>
        <Filter />
        <ContactList /> */}
      </>

    )
  
}

export default App;

