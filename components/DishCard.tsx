
import React from 'react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
}

const AllergenChip: React.FC<{ allergen: string }> = ({ allergen }) => (
    <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full capitalize">
        {allergen}
    </span>
);

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
      <img
        src={dish.imagen}
        alt={dish.nombre}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-900 flex-1 pr-2">{dish.nombre}</h2>
          <span className="text-lg font-bold text-amber-600 whitespace-nowrap">
            €{dish.precio.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{dish.descripcion}</p>
        {dish.alergenos.length > 0 && (
          <div className="mt-auto pt-4 border-t border-gray-100">
            <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Alérgenos</h3>
            <div>
              {dish.alergenos.map((allergen) => (
                <AllergenChip key={allergen} allergen={allergen} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishCard;
