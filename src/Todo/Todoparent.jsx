import { useState } from "react";
import "./todo.css";
import Cardlist from "./Cardlist";
import { obj, helper } from "./helper";
export default function TodoParent() {
  helper();
  // console.log("1", obj);
  obj = "vishal";
  helper();
  // console.log("2", obj);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let cardDetails = {};
    console.log();
    cardDetails.title = e.target.title.value;
    cardDetails.content = e.target.content.value;
    cardDetails["isCompleted"] = e.target.iscompleted.checked;

    setList([...list, cardDetails]);
  };
  console.log(list);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="content" />
        <span>
          isCompleted : <input type="checkbox" name="iscompleted" />
        </span>
        <button type="submit">Add todo</button>
      </form>

      <div className="cardRoot">
        <Cardlist list={list} setList={setList} />
      </div>
    </>
  );
}
