interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Ssr({ users }: { users: User[] }) {
  return (
    <div>
      <h1> Server Side Rendering [SSR]</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
