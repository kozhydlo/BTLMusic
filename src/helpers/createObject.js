const createLoveList = (music) => {
  let obj = {
    name: music.name,
    author: music.author,
    link: music.link,
  };
  return obj;
};

export default createLoveList;
