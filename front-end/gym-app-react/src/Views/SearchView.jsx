import { Navbar } from "../components/navbar/Navbar";
import { Search } from "../components/search/Search";
import { ToastContainer } from "react-toastify";

export const SearchView = () => {
  return (
    <div>
      <ToastContainer theme="light" />
      <Navbar />

      <Search />
    </div>
  );
};
