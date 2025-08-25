
import React, { useState, useEffect, useMemo } from 'react';
import { MenuData, Dish } from './types';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import DishCard from './components/DishCard';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('/menu.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: MenuData = await response.json();
        setMenuData(data);
        if (data.categorias && data.categorias.length > 0) {
          setSelectedCategoryId(data.categorias[0].id);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(`Failed to load menu: ${e.message}`);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const filteredDishes = useMemo(() => {
    if (!menuData || !selectedCategoryId) return [];
    return menuData.platos.filter(
      (plato) => plato.disponible && plato.categoria === selectedCategoryId
    );
  }, [menuData, selectedCategoryId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-700 p-4">
        <p>{error}</p>
      </div>
    );
  }

  if (!menuData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header
        name={menuData.restaurante.nombre}
        logoUrl={menuData.restaurante.logo}
      />
      
      <main className="container mx-auto px-4 py-8">
        <CategoryNav
          categories={menuData.categorias}
          activeCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish: Dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))
          ) : (
            <p className="md:col-span-2 lg:col-span-3 text-center text-gray-500">
              No hay platos disponibles en esta categoría.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
