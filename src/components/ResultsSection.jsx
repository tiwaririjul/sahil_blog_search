import React from 'react';

const ResultsSection = ({ filteredPosts, isAnimating }) => {
  return (
    <div className={`grid md:grid-cols-1 gap-6 transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
      {filteredPosts.length === 0 ? (
        <div className="text-center bg-white shadow-md rounded-2xl p-10">
          <img 
            src="/api/placeholder/400/200" 
            alt="No results" 
            className="mx-auto mb-4 rounded-lg"
          />
          <p className="text-gray-500">No posts found matching your search criteria.</p>
        </div>
      ) : (
        filteredPosts.map(post => (
          <div 
            key={post.id} 
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h2>

              <div className="flex items-center text-sm text-gray-600 mb-3 space-x-3">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                  {post.author}
                </span>
                <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded-full">
                  {post.readTime}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{post.content}</p>

              <div className="flex space-x-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ResultsSection;
