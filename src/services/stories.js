import axios from 'axios';

const ITEMS_PER_PAGE = 10;
const idsUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';

const getAll = async (page, ids) => {
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const response = await axios.get(idsUrl);
  const storyIds = ids?.slice(startIndex, endIndex) || response.data.slice(startIndex, endIndex);

  const stories = await Promise.all(
    storyIds.map(async (id) => {
      const storyResponse = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      return storyResponse.data;
    })
  );
  return stories;
};

export default { getAll };
