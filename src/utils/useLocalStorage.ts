interface Movie {
  id: number;
  title: string;
  description: string;
}

const useLocalStorage = (key: string) => {
  const localStorageItems = localStorage.getItem(key);
  let items = JSON.parse(localStorageItems);

  const addItem = (newItem: Movie) => {
    let items = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(items)) {
      items.push(newItem);
    } else {
      items = [newItem];
    }
    localStorage.setItem(key, JSON.stringify(items));
  };
  const updateItem = (updatedItem: Movie) => {
    const index = items.findIndex((item: Movie) => item.id === updatedItem.id);
    items[index] = updatedItem;
    localStorage.setItem(key, JSON.stringify(items));
  };

  const deleteItem = (deletedItem: Movie) => {
    const selectedItems = items.filter(
      (item: Movie) => deletedItem.id !== item.id
    );
    localStorage.setItem(key, JSON.stringify(selectedItems));
  };

  return { items, addItem, deleteItem, updateItem };
};

export default useLocalStorage;
