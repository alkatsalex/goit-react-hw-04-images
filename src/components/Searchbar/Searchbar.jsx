import { useState } from 'react';
export default function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const hendleSearch = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('ops');
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">🔎</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          value={search}
          placeholder="Search images and photos"
          onChange={hendleSearch}
        />
      </form>
    </header>
  );
}
