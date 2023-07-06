interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Isr({ users }: { users: User[] }) {
  return (
    <div>
      <h1> Incremental Static Regeneration [ISR]</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await res.json();
  return {
    props: {
      users,
    },
    revalidate: 5, // isr 은 ssg에서 선언했던 getStaticProps 에 revalidate 속성을 넣어주게되면 isr 렌더링이 일어나게 됩니다. revalidate 의 값은 '초' 단위의 숫자를 의미합니다. revalidate 값의 시간만큼 지나게되면 이 페이지는 자동으로 다시 그려지게 됩니다
  };
}
