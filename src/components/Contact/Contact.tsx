import { Phone, UserRound } from "lucide-react";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
type Props = {
  id: string;
  name: string;
  number: string;
};

export default function Contact({ id, name, number }: Props) {
  const iconsParams = {
    size: 16,
    strokeWidth: 3,
  };

  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <a href={"tel:" + number}>
        <p>
          <UserRound {...iconsParams} />
          {name}
        </p>
        <p>
          <Phone {...iconsParams} />
          {number}
        </p>
      </a>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
}
