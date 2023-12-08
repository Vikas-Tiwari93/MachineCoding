import ParentHead from "./ParentHead";

export default function ParentForHead() {
  const renderArr = [
    {
      name: "Tab1",
      render: () => {
        return <div>hello1</div>;
      },
    },
    {
      name: "Tab2",
      render: () => {
        return <div>hello2</div>;
      },
    },
    {
      name: "Tab3",
      render: () => {
        return <div>hello3</div>;
      },
    },
  ];
  return (
    <div>
      <ParentHead renderArr={renderArr} />
    </div>
  );
}
