import React from 'react';
import cn from 'classnames';

import usersFromServer from '../../api/users';
import categoriesFromServer from '../../api/categories';

export const FilterTable = ({
  query,
  setQuery,
  userId,
  setUserId,
  categoryId,
  setCategoryId,
}) => {
  const selectAllUsers = () => {
    setUserId(null);
  };

  const selectUser = (id) => {
    setUserId(id);
  };

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  };

  const clearQuery = () => {
    setQuery('');
  };

  const selectAllCategories = () => {
    setCategoryId([]);
  };

  const selectCategory = (categId) => {
    setCategoryId((currentId) => {
      const isPresent = currentId.includes(categId);

      if (isPresent) {
        return currentId.filter(id => id !== categId);
      }

      return [...currentId, categId];
    });
  };

  const resetAllFilters = () => {
    setQuery('');
    setUserId(null);
    setCategoryId([]);
  };

  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <p className="panel-tabs has-text-weight-bold">
          <a
            data-cy="FilterAllUsers"
            href="#/"
            onClick={selectAllUsers}
            className={cn({ 'is-active': userId === null })}
          >
            All
          </a>

          {usersFromServer.map(user => (
            <a
              data-cy="FilterUser"
              href="#/"
              className={cn({ 'is-active': user.id === userId })}
              onClick={() => selectUser(user.id)}
              key={user.id}
            >
              {user.name}
            </a>
          ))}
        </p>

        <div className="panel-block">
          <p className="control has-icons-left has-icons-right">
            <input
              data-cy="SearchField"
              type="text"
              className="input"
              placeholder="Search"
              value={query}
              onChange={event => handleOnChange(event)}
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>

            {query && (
              <span className="icon is-right">
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete"
                  onClick={clearQuery}
                />
              </span>
            )}
          </p>
        </div>

        <div className="panel-block is-flex-wrap-wrap">
          <a
            href="#/"
            data-cy="AllCategories"
            className={cn('button is-success mr-6', {
              'is-outlined': categoryId.length !== 0,
            })}
            onClick={selectAllCategories}
          >
            All
          </a>

          {categoriesFromServer.map(category => (
            <a
              data-cy="Category"
              className={cn('button mr-2 my-1', {
                'is-info': categoryId.includes(category.id),
              })}
              href="#/"
              onClick={() => selectCategory(category.id)}
              key={category.id}
            >
              {category.title}
            </a>
          ))}
        </div>

        <div className="panel-block">
          <a
            data-cy="ResetAllButton"
            href="#/"
            className="button is-link is-outlined is-fullwidth"
            onClick={resetAllFilters}
          >
            Reset all filters
          </a>
        </div>
      </nav>
    </div>
  );
};
