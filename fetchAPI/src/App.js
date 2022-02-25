import { useState } from "react";
import "./styles.css";

export default function App() {
  const [Data, Details] = useState([]);
  const load = async () => {
    const api = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await api.json();
    Details(jsonResponse.data);
  };
  return (
    <div className="App">
      <div id="flex">
        <span> LetsGrowMore Task-2 </span>
        <input type="button" onClick={load} value="Get Users" id="btn" />
      </div>
      <div id="layout">
        {Data.map((fetchData) => (
          <div id="subLayout">
            <img src={fetchData.avatar} alt="avatar" />
            <p id="nameDetails">
              {" "}
              {fetchData.first_name} {fetchData.last_name}
            </p>
            <p id="emailDetails"> {fetchData.email} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
