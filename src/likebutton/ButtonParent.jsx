import { useState } from "react";
import LikeButton from "./Likebutton";

export default function ButtonParent() {
  const APIkey = "c45a857c193f6302f2b5061c3b85e743";
  const [list, setList] = useState([]);
  const handleClick = async (
    setIsClicked,
    setIsLOding,
    searchparam = "a",
    pageno = 1
  ) => {
    setIsLOding(true);
    let jsonData = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${searchparam}&page=${pageno}`
    );
    let data = await jsonData.json();
    console.log(data);
    setIsLOding(false);
    jsonData.status === 200 && setIsClicked(true);

    setList(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newList = [...list];
    newList.push({ name: name, value: value });
    setList(newList);
  };
  const handleSubmit = async (e) => {
    console.log(e.target.d);
    e.preventDefault();

    e.target.reset();
  };

  return (
    <>
      <LikeButton onClick={handleClick} />
      <form action="" onSubmit={handleSubmit}>
        <input type="number" name="d" id="" />
        <input type="number" name="fr" id="" />
        <input type="number" name="f" id="" />
        <input type="number" name="fr" id="" />
        <input type="submit" name="s" id="" />
      </form>
    </>
  );
}
