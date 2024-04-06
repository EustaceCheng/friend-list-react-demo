import React, { useState } from "react";

export const AddForm = ({
  onAddFriend,
}: {
  onAddFriend: (name: string, phone: string, description: string) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleAddFriend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddFriend(name, phone, description);
    setName("");
    setPhone("");
    setDescription("");
  };

  return (
    <form onSubmit={handleAddFriend} style={{ paddingTop: "20px" }}>
      <input
        style={{ marginRight: "10px" }}
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={{ marginRight: "10px" }}
        type="tel"
        placeholder="Phone"
        // pattern="[0-9]{10}"
        // required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        style={{ marginRight: "10px" }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
};
