import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if(!query) return ;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" 
        placeholder="Search the order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-yellow-100 px-4 py-2 w-28 sm:w-64 placeholder:text-stone-400 focus:outline-none"
      />
    </form>
  );
}

export default SearchOrder;
