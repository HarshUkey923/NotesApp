import {Route, Routes} from 'react-router';
import toast from 'react-hot-toast';

import HomePage from './pages/HomePage';
import CreateNote from './pages/CreateNote'
import NoteDetails from './pages/NoteDetails';

const App = () => {
  return (
    <div data-theme = "night">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreateNote/>} />
        <Route path="/note/:id" element={<NoteDetails/>} />
      </Routes>
    </div>
  )
}

export default App