import React from 'react';
import { Search, X } from 'lucide-react';

const SearchSection = ({ searchTerm, setSearchTerm, category, setCategory, handleSearch, clearFilters }) => (
  <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-8">
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search blogs by title or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={24} />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-4 border-2 border-blue-200 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Cloud Computing">Cloud Computing</option>
        </select>

        <div className="flex space-x-3">
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300 flex-grow"
          >
            Search
          </button>

          {(searchTerm || category) && (
            <button
              onClick={clearFilters}
              className="bg-gray-200 text-gray-700 p-4 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              <X />
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default SearchSection;

