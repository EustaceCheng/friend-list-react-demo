import { useContext } from "react";
import { FriendListContext } from "../FriendListContext";

export const Counter = () => {
  const { friendList } = useContext(FriendListContext);
  return <h1>Number of friends: {friendList.length}</h1>;
};
