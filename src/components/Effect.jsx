import { useEffect } from "react";
import { useState } from "react";

export default function Effect() {
  const [nameList, setNameList] = useState([]);

  async function getData() {
    const list = await getFromDb();

    setNameList(list);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Effect</h1>
      {nameList.map((ele) => {
        return <h2> {ele}</h2>;
      })}
      <button>getData</button>
    </div>
  );
}

async function getFromDb() {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(["yash", "biswa", "shivam", "birju"]);
    }, 3000);
  });
}
