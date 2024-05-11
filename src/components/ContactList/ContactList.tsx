import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const filterContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  } else {
    return contacts;
  }
};

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = filterContacts(contacts, filter);

  return (
    <div className={css.contacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
}
