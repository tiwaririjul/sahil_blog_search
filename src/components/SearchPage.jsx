import React, { useState, useEffect } from 'react';
import BLOG_POSTS from '../data/Blog_Post';
import SearchSection from './SearchSection';
import ResultsSection from './ResultsSection';
import DecorativeHeader from './DecorativeHeader';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSearch = () => {
    setIsAnimating(true);
    const results = BLOG_POSTS.filter(post => 
      (searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === '' || post.category === category)
    );
    setFilteredPosts(results);

    setTimeout(() => setIsAnimating(false), 300);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setCategory('');
    setFilteredPosts(BLOG_POSTS);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">

        <DecorativeHeader />
        <SearchSection 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          category={category} 
          setCategory={setCategory}
          handleSearch={handleSearch} 
          clearFilters={clearFilters}
        />
        <ResultsSection 
        filteredPosts={filteredPosts} isAnimating={isAnimating} 
        />
      </div>
    </div>
  );
};

export default SearchPage;


