import { useState } from "react";

export interface FriendData {
  id: string;
  name: string;
  phone: string;
  description: string;
}

export const Friend = ({
  friendInfo,
  onDelete,
  onUpdate,
}: {
  friendInfo: FriendData;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newPhone: string, newDescription: string) => void;
}) => {
  const { id, name, phone, description } = friendInfo;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState<string>(description);
  const [newPhone, setNewPhone] = useState<string>(phone);

  const handleUpdateDescription = () => {
    onUpdate(id, newPhone, newDescription);
    setEditMode(false);
  };

  return (
    <tr>
      <td>
        <p>{name}</p>
      </td>
      <td>
        {editMode ? (
          <input
            type="tel"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUpdateDescription();
              }
            }}
          />
        ) : (
          <p>{phone}</p>
        )}
      </td>
      <td>
        {editMode ? (
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUpdateDescription();
              }
            }}
          />
        ) : (
          <p>{description}</p>
        )}
      </td>

      <td>
        {editMode ? (
          <button onClick={handleUpdateDescription}>Save</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
};
