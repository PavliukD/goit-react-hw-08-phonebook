import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import s from './Contacts.module.css'


export default function Contacts(){
    return(
        <div className={s.contacts}>
            <Filter />
            <ContactList />
        </div>
    )

}