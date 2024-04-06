import { useState, useMemo } from "react";
import { Provider, FriendData } from "./FriendListContext";
import { List } from "./components/List";
import { Counter } from "./components/Counter";
import { Search } from "./components/Search";
import "./styles.css";

export default function App() {
  const [friendList, setFriendList] = useState<FriendData[]>([]);

  const contextValue = useMemo(() => {
    return {
      friendList,
      setFriendList,
    };
  }, [friendList]);

  return (
    <Provider value={contextValue}>
      <Counter />
      <Search />
      <List />
    </Provider>
  );
}
