import { useState, useContext } from "react";
import { FriendListContext } from "../FriendListContext";

export const Search = () => {
  const { friendList } = useContext(FriendListContext);
  const [name, setName] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = friendList.filter((friend) => friend.name === name);
    if (target.length > 0) {
      const { id, name, phone, description } = target[0];
      alert(
        `ID: ${id}, Name: ${name}, Phone: ${phone}, Description: ${description}`
      );
    } else {
      alert("Friend not found");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ marginRight: "10px" }}
        type="text"
        placeholder="Search by name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
