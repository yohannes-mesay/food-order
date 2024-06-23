import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Fast Pizza React
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
