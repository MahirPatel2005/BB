import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

export function ProductCard({ name, image, description, link }: ProductCardProps) {
  return (
    <div className="card group">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}