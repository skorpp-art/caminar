
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg text-gray-600">Cargando menú...</p>
    </div>
  );
};

export default LoadingSpinner;
