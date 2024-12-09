import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
      </div>
    </Router>
  );
}
