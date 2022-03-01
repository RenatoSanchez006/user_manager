import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useUsers = () => {
  const startingUsersList = [
    {
      id: uuidv4(),
      name: "Tony",
      lastName: "Stark",
      email: "iron_man@avengers.com",
      image: "../images/ironman.jpg",
      isActive: false,
    },
    {
      id: uuidv4(),
      name: "Thor",
      lastName: "Odinson",
      email: "thor_odinson@avengers.com",
      image: "../images/thor.jpg",
      isActive: true,
    },
    {
      id: uuidv4(),
      name: "Natasha",
      lastName: "Romanoff",
      email: "black_widow@avengers.com",
      image: "../images/blackwidow.jpg",
      isActive: false,
    },
    {
      id: uuidv4(),
      name: "Peter",
      lastName: "Quill",
      email: "starlord@gotg.com",
      image: "../images/starlord.jpg",
      isActive: true,
    },
    {
      id: uuidv4(),
      name: "Johnny",
      lastName: "Storm",
      email: "torch@fantasticfour.com",
      image: "../images/human_torch.jpg",
      isActive: false,
    },
  ];

  const emptyNewUser = {
    id: "",
    name: "",
    lastName: "",
    email: "",
    image: "",
    isActive: true,
  };

  const [users, setUsersState] = useState(startingUsersList);
  const [userModal, setUserModalState] = useState(emptyNewUser);
  const [isEdition, setIsEditionState] = useState(false);

  const addUser = () => {
    setUsersState([...users, { ...userModal, id: uuidv4() }]);
  };

  const updateStatus = (id, newStatus) => {
    const usersCopy = [...users];
    usersCopy.find((user) => user.id === id).isActive = newStatus;
    setUsersState(usersCopy);
  };

  const deleteUser = (id) => {
    const usersCopy = users.filter((user) => user.id !== id);
    setUsersState(usersCopy);
  };

  const editUserHandler = (id) => {
    setUserModalState(users.filter((user) => user.id === id)[0]);
    setIsEditionState(!isEdition);
  };

  const modalUserHandler = (newValue) => {
    setUserModalState({ ...userModal, ...newValue });
  };

  const editUser = () => {
    const userIndex = users.findIndex((user) => user.id === userModal.id);
    let usersCopy = [...users];
    usersCopy[userIndex] = userModal;
    setUsersState(usersCopy);
  };

  return {
    emptyNewUser,
    users,
    setUsersState,
    userModal,
    setUserModalState,
    isEdition,
    setIsEditionState,
    addUser,
    updateStatus,
    deleteUser,
    editUserHandler,
    modalUserHandler,
    editUser,
  };
};
