import { Route, Routes } from 'react-router-dom';
import Doctors from './components/Doctors';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <section id="main-sec">
      <Routes>
        <Route path="/" element={<Doctors />} />
      </Routes>
    </section>
  </div>
);

export default App;
