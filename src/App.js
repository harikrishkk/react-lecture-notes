import User from '@components/User';
import Navbar from '@components/Navbar';
import { users } from './users.data';

const App = () => {
  return (
    <div className="h-full p-6 bg-gray-200">
      <Navbar />
      <div className="grid grid-cols-2 gap-4">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
