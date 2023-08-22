import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch(`https://randomuser.me/api/?results=1`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <>
      <div style={{ padding: "40px" }}>
        <h1>Customer Data</h1>
        <div className="customData">
          <h2>Name: {user.results[0].name.first}</h2>
          <img src={user.results[0].picture.large} alt="" />
        </div>
      </div>
    </>
  ) : (
    <h1>Data is pending...</h1>
  );
}

export default App;
