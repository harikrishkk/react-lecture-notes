import User from '@components/User';
import Navbar from '@components/Navbar';

const user = {
  id: 1,
  email: 'user@test.com',
  first_name: 'John',
  last_name: 'Doe',
  avatar: 'https://reqres.in/img/faces/1-image.jpg',
};
const App = () => {
  return (
    <div className="h-full p-6 bg-gray-200">
      <Navbar />
      <User user={user} />
    </div>
  );
};

export default App;
