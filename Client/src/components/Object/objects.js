import React, { useEffect, useState } from "react";
import "./object.css";
import axios from "axios";
import Object_function from "./object";
const URL = "http://localhost:3001/cardinals/view";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Objects = () => {
  const [objects, setObjects] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setObjects(data.objects));
  }, []);
  console.log(objects);
  return (
    <div>
      <ul>
        {objects &&
          objects.map((object, i) => (
            <li key={i}>
              <Object_function object={object} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Objects;