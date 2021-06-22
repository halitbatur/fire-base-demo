import logo from "./logo.svg";
import { useState, useEffect } from "react";
import db from "./firebaseConfig";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    // Fetching single doc
    const res = await db.collection("users").doc("halit").get();
    const data = await res.data();
    // Fetching all the collection
    const collection = await db.collection("users").get();
    const arrayOfDocs = collection.docs.map((doc) => {
      console.log(doc.id);
      return { id: doc.id, ...doc.data() };
    });
    setUsers(arrayOfDocs);
  };
  console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adding a new doc to the collection
    // db.collection("users").add({
    //   fullname,
    //   email,
    // });

    // Changing an existing docs
    db.collection("users").doc("yu6Fa64EVf18WSrTsmiY").set({
      fullname,
      email,
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>
      {users.map((user) => {
        return (
          <div>
            <span>{user.fullname}</span>
            <span> {user.email}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
