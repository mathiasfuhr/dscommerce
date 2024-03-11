import "./style.css";

function SearchBar() {
  return (
    <div>
      <form className="dsc-search-bar">
        <button type="submit">🔎︎</button>
        <input type="text" placeholder="Nome do produto" />
        <button type="reset">🗙</button>
      </form>
    </div>
  );
}

export default SearchBar;
