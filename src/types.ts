export interface Product {
  id: string;
  name: string;
  type: 'udang' | 'ikan';
  description: string;
  priceRange?: string;
  grade: string;
  survivalRate: string;
  imageUrl: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}
