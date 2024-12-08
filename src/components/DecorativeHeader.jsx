import React from 'react';
import { Sparkles } from 'lucide-react';

const DecorativeHeader = () => {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 flex justify-center items-center">
        <Sparkles className="mr-3 text-blue-500" />
        Blog Search Hub
        <Sparkles className="ml-3 text-blue-500" />
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover insightful articles across various categories. Search, filter, and explore knowledge.
      </p>
    </div>
  );
};

export default DecorativeHeader;
