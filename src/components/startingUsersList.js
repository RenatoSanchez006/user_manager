import { v4 as uuidv4 } from "uuid";

export default function startingUsersList() {
  return [
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
}
