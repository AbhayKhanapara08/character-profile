import { PaginationProps } from "../types/character";

const Pagination = ({
  totalpages,
  selectedPage,
  setSelectedPage,
}: PaginationProps) => {
  if (totalpages <= 1) {
    return null;
  }

  const totalPagesToShow = 3;
  const maxPage = Math.min(totalpages, totalPagesToShow);

  const startPage = Math.max(
    1,
    selectedPage <= totalpages - totalPagesToShow
      ? selectedPage
      : totalpages - totalPagesToShow + 1
  );

  const pages = Array.from(
    { length: maxPage },
    (_, index) => startPage + index
  );

  const showDotsStart = startPage > 2;
  const showDotsEnd = startPage + totalPagesToShow - 1 < totalpages;

  return (
    <footer className="flex items-center justify-center px-2 sm:px-4 space-x-1 py-4">
      <button
        onClick={() => setSelectedPage(Math.max(1, selectedPage - 1))}
        disabled={selectedPage === 1}
        className="text-sm rounded-lg border p-2 disabled:cursor-not-allowed"
      >
        Prev.
      </button>
      {showDotsStart && (
        <>
          <button
            className="px-2 sm:px-4 py-2 rounded-lg border text-sm"
            onClick={() => setSelectedPage(1)}
          >
            1
          </button>
          <button
            disabled={true}
            className="px-3 sm:px-4 py-2 pointer-events-none rounded-lg border text-sm"
          >
            ...
          </button>
        </>
      )}
      {pages.map((page) => (
        <button
          key={page}
          className={
            selectedPage === page
              ? "px-3 sm:px-4 py-2 bg-green-500 text-white hover:bg-green-500 hover:text-white text-sm rounded-lg border"
              : "px-3 sm:px-4 py-2 text-sm rounded-lg border"
          }
          onClick={() => setSelectedPage(page)}
        >
          {page}
        </button>
      ))}
      {showDotsEnd && (
        <>
          <button
            disabled={true}
            className="px-2 sm:px-4 py-2 pointer-events-none rounded-lg border text-sm"
          >
            ...
          </button>
          <button
            className="px-2 sm:px-4 py-2 rounded-lg border text-sm text-center"
            onClick={() => setSelectedPage(totalpages)}
          >
            {totalpages}
          </button>
        </>
      )}
      <button
        onClick={() => setSelectedPage(Math.min(totalpages, selectedPage + 1))}
        disabled={selectedPage === totalpages}
        className="text-sm p-2 rounded-lg border disabled:cursor-not-allowed"
      >
        Next
      </button>
    </footer>
  );
};

export default Pagination;
