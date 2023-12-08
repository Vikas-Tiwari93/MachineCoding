import React, { useState } from "react";

export default function Cardlist({ list, setList }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editeElmIndex, setEditElmIndex] = useState();
  const [FormValues, setFormValues] = useState({ title: "", content: "" });
  const handleDelete = (index) => {
    let newList = [...list];
    console.log(newList, index);
    newList.splice(index, 1);

    setList(newList);
  };
  const handleEdit = (index) => {
    setEditElmIndex(index);
    setIsEdit(!isEdit);
  };
  const handleFormChange = (e) => {
    let newFormValues = { ...FormValues };
    const { name, value } = e.target;
    newFormValues[name] = value;
    setFormValues(newFormValues);
  };
  const handleEnter = (e, index) => {
    if (e.key === "Enter") {
      let newList = [...list];
      FormValues.isCompleted = list[index].isCompleted;
      newList[index] = FormValues;
      setList(newList);
      setIsEdit(false);
    }
  };
  console.log(FormValues);
  return (
    <div className="Cardroot">
      {list.map((elm, index) => {
        return (
          <div key={elm.title} className="card">
            <div>
              <span>To Do Title:</span>
              <span>{elm.title}</span>
              {isEdit && editeElmIndex === index && (
                <div>
                  <input
                    name="title"
                    type="text"
                    value={FormValues.title}
                    onChange={(e) => handleFormChange(e)}
                    onKeyDown={(e) => {
                      handleEnter(e, index);
                    }}
                  />
                </div>
              )}
            </div>
            <div>
              <span>To Do Content:</span>
              <span>{elm.content}</span>
              {isEdit && editeElmIndex === index && (
                <div>
                  <input
                    name="content"
                    type="text"
                    value={FormValues.content}
                    onChange={(e) => handleFormChange(e)}
                    onKeyDown={(e) => {
                      handleEnter(e, index);
                    }}
                  />
                </div>
              )}
            </div>
            <div>
              <span>Is Completed:</span>
              <span>{!elm.isCompleted ? "false" : "true"}</span>
            </div>
            <button onClick={() => handleEdit(index)}> Edit</button>
            <button onClick={() => handleDelete(index)}> Delete</button>
          </div>
        );
      })}
    </div>
  );
}
