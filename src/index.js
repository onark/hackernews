import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import storyService from './services/stories'
import Pagination from './components/Pagination'
import News from './components/News'
import './styles.scss'

const App = () => {
  const [page, setPage] = useState(1);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const newStories = await storyService.getAll(page);
      setStories(newStories);
    };
    fetchStories();
  }, [page]);

  return (
    <div className="content-wrapper">
      <News stories={stories}/>
      <Pagination page={page} setPage={setPage}/>
    </div>
  );
}


createRoot(document.getElementById('root')).render(<App />)
