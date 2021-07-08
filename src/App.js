import User from '@components/User';
import Navbar from '@components/Navbar';

function App() {
  return (
    // Static card html
    <div className="h-screen p-6 bg-gray-200">
      <Navbar />
      <User />
    </div>
  );
}

export default App;
