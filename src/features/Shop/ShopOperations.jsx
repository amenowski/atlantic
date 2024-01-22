import Filter from './Filter';
import SortBy from './SortBy';

function ShopOperations() {
  return (
    <div>
      <Filter
        options={[
          { value: 'all', label: 'All' },
          {
            value: 'yes',
            label: 'On sale',
          },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          {
            value: 'price-asc',
            label: 'Sort by price (low first)',
          },
          {
            value: 'price-desc',
            label: 'Sort by price (high first)',
          },
        ]}
      />
    </div>
  );
}

export default ShopOperations;
