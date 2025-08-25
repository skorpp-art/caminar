
export interface Dish {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
  alergenos: string[];
  disponible: boolean;
}

export interface Category {
  id: string;
  nombre: string;
}

export interface Restaurant {
  nombre: string;
  logo: string;
}

export interface MenuData {
  restaurante: Restaurant;
  categorias: Category[];
  platos: Dish[];
}
