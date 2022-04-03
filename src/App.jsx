import { QueryClient, QueryClientProvider } from 'react-query';

import Setting from './components/Setting';
import Profile from './components/Profile';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Setting />
      <Profile />
    </QueryClientProvider>
  );
}

export default App;
