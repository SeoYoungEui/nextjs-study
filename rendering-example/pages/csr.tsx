import { useEffect, useState } from "react";

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Csr() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchGetData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const users = await res.json();
      setUsers(users);
    };
    fetchGetData();
  }, []);

  return (
    <div>
      <h1> Client Side Rendering [CSR]</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
}
