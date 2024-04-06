import { createContext } from "react";

export type FriendData = {
  id: string;
  name: string;
  phone: string;
  description: string;
};

type FriendListContextType = {
  friendList: FriendData[];
  setFriendList: React.Dispatch<React.SetStateAction<FriendData[]>>;
};

export const FriendListContext = createContext<FriendListContextType>({
  friendList: [],
  setFriendList: () => {},
});

export const Provider = FriendListContext.Provider;
