import React from 'react';
import { ProductCard } from '../components/ProductCard';

export function Products() {
  const products = {
    idli: [
      {
        name: 'Classic Idli Batter',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800',
        description: 'Traditional fermented batter for soft, fluffy idlis.',
        link: '/products/classic-idli-batter',
      },
      {
        name: 'Ragi Idli Batter',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800',
        description: 'Healthy ragi-based batter for nutritious idlis.',
        link: '/products/ragi-idli-batter',
      },
    ],
    dosa: [
      {
        name: 'Classic Dosa Batter',
        image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800',
        description: 'Perfect batter for crispy, golden dosas.',
        link: '/products/classic-dosa-batter',
      },
      {
        name: 'Rava Dosa Mix',
        image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800',
        description: 'Ready-to-use mix for instant rava dosas.',
        link: '/products/rava-dosa-mix',
      },
    ],
    paddu: [
      {
        name: 'Traditional Paddu Batter',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
        description: 'Special batter for perfect paddus.',
        link: '/products/traditional-paddu-batter',
      },
    ],
    roti: [
      {
        name: 'Fresh Phulka',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
        description: 'Soft, whole wheat phulkas.',
        link: '/products/fresh-phulka',
      },
      {
        name: 'Thepla',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
        description: 'Gujarati-style methi thepla.',
        link: '/products/thepla',
      },
    ],
    chutney: [
      {
        name: 'Coconut Chutney',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
        description: 'Fresh coconut chutney made daily.',
        link: '/products/coconut-chutney',
      },
      {
        name: 'Tomato Chutney',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
        description: 'Tangy tomato chutney.',
        link: '/products/tomato-chutney',
      },
    ],
    combo: [
      {
        name: 'Breakfast Combo',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
        description: 'Idli & dosa batter with chutneys.',
        link: '/products/breakfast-combo',
      },
      {
        name: 'Family Pack',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800',
        description: 'Week-long supply of various batters.',
        link: '/products/family-pack',
      },
    ],
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Our Products</h1>

        {/* Idli Batters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Idli Batters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.idli.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Dosa Batters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Dosa Batters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.dosa.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Paddu Batters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Paddu Batters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.paddu.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Ready-to-Eat Rotis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Ready-to-Eat Rotis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.roti.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Fresh Chutneys */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Fresh Chutneys</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.chutney.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Combo Offers */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Combo Offers & Family Packs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.combo.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}