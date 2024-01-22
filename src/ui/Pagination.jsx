import { useSearchParams } from 'react-router-dom';
import Button from './Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PAGE_SIZE } from '../utils/constants';

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>
      <div className="flex items-center gap-2">
        <Button
          type="primarySmall"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FaChevronLeft /> <span>Previous</span>
        </Button>
        <Button
          type="primarySmall"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span> <FaChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
