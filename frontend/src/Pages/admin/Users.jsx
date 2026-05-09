import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        credentials: "include",
      });

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Data Users</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;