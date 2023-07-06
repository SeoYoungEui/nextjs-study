interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Ssg({ users }: { users: User[] }) {
  return (
    <div>
      <h1> Static Site Generation [SSG]</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // ssr 과 다른점은 getStaticProps 를 사용하고 build 할 때 하단 api 를 호출해서 html 를 만들어 user에게 제공합니다.
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
