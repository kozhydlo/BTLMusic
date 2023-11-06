const readerOn = (file, onLoadCallback) => {
  let reader = new FileReader();
  reader.onload = onLoadCallback;
  reader.readAsText(file);
};

export { readerOn };
