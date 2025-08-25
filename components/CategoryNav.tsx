
import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategoryId, onSelectCategory }) => {
  return (
    <nav className="flex justify-center">
      <div className="flex space-x-2 md:space-x-4 p-2 bg-white rounded-full shadow-sm overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ease-in-out whitespace-nowrap ${
              activeCategoryId === category.id
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-transparent text-gray-600 hover:bg-amber-100'
            }`}
          >
            {category.nombre}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
