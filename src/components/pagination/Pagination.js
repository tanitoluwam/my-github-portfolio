export const Pagination = (props) => {
  const { onPageChange, currentPage, totalPages } = props;
  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  return (
    <div>
      <button
        className={`px-4 py-2 border mr-2 bg-white text-secondary border-secondary rounded${
          isFirstPage ? " cursor-not-allowed opacity-50" : " "
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Prev
      </button>
      {Array(totalPages)
        .fill()
        .map((_, index) => (
          <button
            className={`px-3 py-2 border mr-2 border-secondary text-tertiary rounded${
              currentPage === index + 1
                ? " cursor-not-allowed bg-tertiary text-white"
                : " "
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      <button
        className={`px-4 py-2 border mr-2 bg-white text-secondary border-secondary rounded${
          isLastPage ? " cursor-not-allowed opacity-50" : " "
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};
