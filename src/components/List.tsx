import { useContext } from "react";
import { AddForm } from "./AddForm";
import { Friend, type FriendData } from "./Row";
import { FriendListContext } from "../FriendListContext";

export const List = () => {
  const { friendList: friends, setFriendList: setFriends } =
    useContext(FriendListContext);

  const addFriend = (name: string, phone: string, description: string) => {
    if (friends.some((friend) => friend.name === name)) {
      alert("Friend with the same name already exists!");
      return;
    }

    const newFriend: FriendData = {
      id: self.crypto.randomUUID(),
      name,
      phone,
      description,
    };
    setFriends([...friends, newFriend]);
  };

  const deleteFriend = (id: string) => {
    const updatedFriends = friends.filter((friend) => friend.id !== id);
    setFriends(updatedFriends);
  };

  const updateFriend = (
    id: string,
    newPhone: string,
    newDescription: string
  ) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === id) {
        return { ...friend, phone: newPhone, description: newDescription };
      }
      return friend;
    });
    setFriends(updatedFriends);
  };

  return (
    <div>
      <AddForm onAddFriend={addFriend} />
      <div style={{ paddingTop: "20px", width: "600px" }}>
        <table>
          <th>Name</th>
          <th>Phone</th>
          <th>Description</th>
          <th>Action</th>
          {friends.map((friend) => (
            <Friend
              key={friend.id}
              friendInfo={friend}
              onDelete={deleteFriend}
              onUpdate={updateFriend}
            />
          ))}
        </table>
      </div>
    </div>
  );
};
