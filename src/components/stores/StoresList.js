//styling

//components
import SearchBar from "../searchBar/SearchBar";
import StoreCard from "./StoreCard";

//
import { useSelector } from "react-redux";
import { useState } from "react";
import { WrapList } from "../../styles";

const StoresList = (props) => {
  const stores = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const [query, setQuery] = useState("");

  if (loading) return <h1>loading .. </h1>;

  const filteredStores = stores
    .filter((store) => store.type === "AASP")
    .filter(
      (store) =>
        store.name.toLowerCase().includes(query.toLowerCase()) ||
        store.location.toLowerCase().includes(query.toLowerCase())
    )
    .map((store) => <StoreCard key={store._id} store={store} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <WrapList>{filteredStores}</WrapList>
    </>
  );
};

export default StoresList;
