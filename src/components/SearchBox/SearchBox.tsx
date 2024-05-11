import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.box}>
      <h2>Find contacts by name</h2>
      <input
        onChange={(ev) => dispatch(changeFilter(ev.currentTarget.value))}
        type="text"
        placeholder="Find a contact"
        value={filter}
      />
    </div>
  );
}
