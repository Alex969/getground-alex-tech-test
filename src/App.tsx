import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import BooksResults from './components/BooksResults';

function App() {

  return (
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/books" replace />}
        />
        <Route path="/books/:page?" element={<BooksResults />} />
      </Routes>
  );
}

export default App;
