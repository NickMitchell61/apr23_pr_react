import React from 'react';

export const TableProducts = ({ visibleProducts }) => (
  <table
    data-cy="ProductTable"
    className="table is-striped is-narrow is-fullwidth"
  >
    <thead>
      <tr>
        <th>
          <span className="is-flex is-flex-wrap-nowrap">
            ID

            <a href="#/">
              <span className="icon">
                <i data-cy="SortIcon" className="fas fa-sort" />
              </span>
            </a>
          </span>
        </th>

        <th>
          <span className="is-flex is-flex-wrap-nowrap">
            Product

            <a href="#/">
              <span className="icon">
                <i
                  data-cy="SortIcon"
                  className="fas fa-sort-down"
                />
              </span>
            </a>
          </span>
        </th>

        <th>
          <span className="is-flex is-flex-wrap-nowrap">
            Category

            <a href="#/">
              <span className="icon">
                <i
                  data-cy="SortIcon"
                  className="fas fa-sort-up"
                />
              </span>
            </a>
          </span>
        </th>

        <th>
          <span className="is-flex is-flex-wrap-nowrap">
            User

            <a href="#/">
              <span className="icon">
                <i
                  data-cy="SortIcon"
                  className="fas fa-sort"
                />
              </span>
            </a>
          </span>
        </th>
      </tr>
    </thead>

    <tbody>
      {visibleProducts.map((product) => {
        const {
          id,
          name,
          category,
          user,
        } = product;

        return (
          <tr
            data-cy="Product"
            key={id}
          >
            <td className="has-text-weight-bold" data-cy="ProductId">
              {id}
            </td>

            <td data-cy="ProductName">
              {name}
            </td>
            <td data-cy="ProductCategory">
              {`${category.icon} - ${category.title}`}
            </td>

            <td
              data-cy="ProductUser"
              className="has-text-link"
            >
              {user.name}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
