import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import "./style.css";

const UserCard = () => {
  const { name } = useSelector((state) => state.user);

  const [newName, setNewName] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeName(newName));
    setNewName("");
  };

  return (
    <div className="Card">
      <p>User name: {name}</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
