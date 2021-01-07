import { useEffect, useState } from "react";
import Login from "./Login";
import datas from "./data";
import "./App.css";
function App() {
  const loginUser = {
    username: "hruday@gmail.com",
    password: "hruday123",
  };

  const [user, setUser] = useState({ email: "" });
  const [Employees, setEmps] = useState([]);

  useEffect(() => {
    setEmps(datas);
  }, []);

  const loginUserFn = (details) => {
    if (
      details.email === loginUser.username &&
      details.password === loginUser.password
    ) {
      setUser({
        email: details.email,
      });
      console.log(user);
    } else {
      alert("Invalid Credenentials .Kindly Check Username and Password.");
    }
  };
  return (
    <div className="App">
      {user.email ? (
        <div className="container">
          <h1>Welcome To Employee List Page</h1>
          <table border={5} cellPadding={20}>
            <tbody>
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>AGE</td>
                <td>GENDER</td>
                <td>EMAIL</td>
                <td>PHONENO</td>
              </tr>
              {datas.user.map((user, idx) => {
                return (
                  <tr key={idx}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Login loginUserFn={loginUserFn} errors={alert} />
      )}
    </div>
  );
}

export default App;
