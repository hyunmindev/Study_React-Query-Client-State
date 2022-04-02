import { QueryClient, QueryClientProvider } from 'react-query';

import Header from './components/Header';
import Profile from './components/Profile';
import PostList from './components/PostList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Profile />
      <PostList />
    </QueryClientProvider>
  );
}

export default App;
