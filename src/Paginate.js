import React from 'react';

const Paginate = ({
	postsPerPage,
	totalPosts,
	currentPage,
	paginate,
	previousPage,
	nextPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className="pagination-container">
			<ul className="pagination">
				<a onClick={previousPage} className="page-number">
					Prev
				</a>
				{pageNumbers.map((number) => (
					<a
						key={number}
						onClick={() => paginate(number)}
						className={
							'page-number ' + (number === currentPage ? 'active' : '')
						}
					>
						{number}
					</a>
				))}
				<a onClick={nextPage} className="page-number">
					Next
				</a>
			</ul>
		</div>
	);
};

export default Paginate;