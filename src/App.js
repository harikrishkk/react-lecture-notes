import User from '@components/User';
import Navbar from '@components/Navbar';

const user = {
  id: 1,
  email: 'user@test.com',
  first_name: 'John',
  last_name: 'Doe',
  avatar: 'https://reqres.in/img/faces/1-image.jpg',
  rating: 4,
};
const App = () => {
  return (
    <div className="h-full p-6 bg-gray-200">
      <Navbar />
      <User user={user}>
        <div className="card-actions mb-4">
          <div className="badge badge-ghost">Music</div>
          <div className="badge badge-ghost">Photography</div>
        </div>
      </User>
    </div>
  );
};

export default App;
