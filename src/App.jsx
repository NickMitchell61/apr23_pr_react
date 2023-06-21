import React, { useEffect, useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { FilterTable } from './components/FilterTable/FilterTable';
import { TableProducts } from './components/TableProducts/TableProducts';

const allProducts = productsFromServer.map((product) => {
  const category = categoriesFromServer
    .find(good => good.id === product.categoryId);
  const user = usersFromServer.find(person => person.id === category.ownerId);

  return {
    ...product,
    category,
    user,
  };
});

export const App = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [categoryId, setCategoryId] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  const visibleProducts = products
    .filter((product) => {
      const lowercaseName = product.name.toLowerCase();
      const lowercaseQuery = query.toLowerCase();
      const matchesQuery = lowercaseName.includes(lowercaseQuery);

      const matchesUserId = userId === null
        || product.category.ownerId === userId;

      const matchesCategoryId = categoryId.length === 0
        || categoryId.includes(product.category.id);

      return matchesQuery && matchesUserId && matchesCategoryId;
    });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <FilterTable
          query={query}
          setQuery={setQuery}
          userId={userId}
          setUserId={setUserId}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        />

        <div className="box table-container">
          {visibleProducts.length
            ? (
              <TableProducts
                visibleProducts={visibleProducts}
              />
            ) : (
              <p data-cy="NoMatchingMessage">
                No products matching selected criteria
              </p>
            )}
        </div>
      </div>
    </div>
  );
};
