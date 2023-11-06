const createPlayList = (file) => {
  let result = [];
  for (let i = 0; i < Math.ceil(file.length / 6); i++) {
    result[i] = file.slice(i * 6, i * 6 + 6);
  }

  return result;
};

export default createPlayList;
