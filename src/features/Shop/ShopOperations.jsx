import SortBy from './SortBy';

function ShopOperations() {
  return (
    <div>
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          {
            value: 'regularPrice-asc',
            label: 'Sort by price (low first)',
          },
          {
            value: 'regularPrice-desc',
            label: 'Sort by price (high first)',
          },
        ]}
      />
    </div>
  );
}

export default ShopOperations;
