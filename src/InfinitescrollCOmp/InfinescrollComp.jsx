import React, { useCallback, useEffect, useRef, useState } from "react";

export default function InfinescrollComp({ dataList, fetchQuery, inputdata }) {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const handleSearch = async (inputdata, page) => {
    setIsLoading(true);
    await fetchQuery(inputdata, page);
    setIsLoading(false);
  };
  useEffect(() => {
    handleSearch(inputdata, page);
  }, [inputdata]);

  const onScrollfn = (event) => {
    const target = event.currentTarget;
    console.log(page);
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 1) {
      setPage((prev) => prev + 1);
      handleSearch(inputdata, page);
    }
  };

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div
            style={{ height: "300px", overflow: "scroll" }}
            onScroll={onScrollfn}
          >
            {dataList.map((elm, index) => {
              return <div key={index}>{elm.title}</div>;
            })}
          </div>
        </>
      )}
    </div>
  );
}
