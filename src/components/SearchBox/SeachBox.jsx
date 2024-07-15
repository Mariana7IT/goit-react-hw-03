import s from "./SeachBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div>
      <span className={s.wrapper}>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
          className={s.searchInput}
        ></input>
      </span>
    </div>
  );
};

export default SearchBox;
