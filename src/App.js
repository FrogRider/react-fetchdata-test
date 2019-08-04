import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); //how many posts needed to be displayed

  useEffect(() => { //triggers when component is mounted and fethes all the data
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, [])

  //counting posts per page
  const indexOfLastPost = currentPage * postsPerPage;
  const infexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(infexOfFirstPost, indexOfLastPost);

  //change posts for selected page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container mt-2 col-12">
      <h2 className="text-primary mb-3 center">Data from server</h2>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} 
                  totalPosts={posts.length} 
                  paginate={paginate}
                  currentPage={currentPage}/>
    </div>
    )
};

export default App;
