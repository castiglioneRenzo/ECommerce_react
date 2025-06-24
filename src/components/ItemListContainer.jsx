import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router';

function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    const urlCategory = `https://fakestoreapi.com/products/category/${categoryId}`;

    fetch(categoryId ? urlCategory : url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, [categoryId]);

  return (<ItemList items={items}/>);
}
export default ItemListContainer;