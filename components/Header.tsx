
import React from 'react';

interface HeaderProps {
  name: string;
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ name, logoUrl }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center text-center">
        <img src={logoUrl} alt={`${name} Logo`} className="h-16 w-16 rounded-full mr-4 object-cover" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">{name}</h1>
      </div>
    </header>
  );
};

export default Header;
