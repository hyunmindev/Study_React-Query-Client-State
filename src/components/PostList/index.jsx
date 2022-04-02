import { useQuery } from 'react-query';

function PostList() {
  const { data, isFetching, isLoading } = useQuery(['posts'], () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
  );
  console.log(isFetching, isLoading);
  return (
    !isFetching && (
      <>
        {data.map(({ title, id }) => (
          <h3 key={id}>{title}</h3>
        ))}
      </>
    )
  );
}

export default PostList;
