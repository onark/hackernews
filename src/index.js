import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import storyService from './services/stories'
import Pagination from './components/Pagination'
import News from './components/News'
import LoadingSpinner from './components/LoadingSpinner'
import './styles.scss'

const App = () => {
  const [page, setPage] = useState(1);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      const newStories = await storyService.getAll(page);
      setStories(newStories);
      setLoading(false);
    };
    fetchStories();
  }, [page]);

  return (
    <div className="content-wrapper">
      <h2 className="header">Top Stories</h2>
      {loading ? <LoadingSpinner /> : <News stories={stories} />}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}


createRoot(document.getElementById('root')).render(<App />)
