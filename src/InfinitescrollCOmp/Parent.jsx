import { useCallback, useState } from "react";
import InfinescrollComp from "./InfinescrollComp";

export default function Parent() {
  const [dataList, setDataList] = useState([]);
  const [inputdata, setInputData] = useState("");
  const APIkey = "c45a857c193f6302f2b5061c3b85e743";
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleDataFetching = useCallback(async (searchparam, pageno) => {
    const dataJson = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${searchparam}&page=${pageno}`
    );
    const data = await dataJson.json();

    setDataList((prev) => [...prev, ...data.results]);
  }, []);
  console.log(dataList);
  return (
    <div>
      <input
        type="text"
        value={inputdata}
        onChange={(e) => handleInputChange(e)}
      />
      <InfinescrollComp
        dataList={dataList}
        fetchQuery={handleDataFetching}
        inputdata={inputdata}
      />
    </div>
  );
}
