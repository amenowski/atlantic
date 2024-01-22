import { useSearchParams } from 'react-router-dom';
import Select from '../../ui/Select';

function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('isDiscount') || '';

  function handleChange(e) {
    searchParams.set('isDiscount', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <span className="text-sm uppercase text-gray-500">Filter by: </span>
      <Select options={options} value={filter} onChange={handleChange} />
    </div>
  );
}

export default Filter;
