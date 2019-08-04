import React, { useEffect } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

    useEffect(() => {
        const pageLinks = document.getElementsByClassName('page-item');

        for(let i = 0; i < totalPosts/postsPerPage; i++) //whenever page number is changed, remove active class from all
            pageLinks.item(i).classList.remove("active");

        if (pageLinks.length !== 0) //add active class to curent page
            pageLinks.item(currentPage - 1).classList.add("active");

      }, [currentPage]) //change active page when currentPage variable changes

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    } //filling array with pages numbers

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => ( //add button for each page 
                    <li key={number} className="page-item">
                        <a 
                            onClick={() => paginate(number)}
                            href="!#" 
                            className='page-link'> 
                            {number} 
                            
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
