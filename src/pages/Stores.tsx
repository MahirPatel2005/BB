import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Stores() {
  const stores = [
    {
      name: 'Butter Batter - Indiranagar',
      address: '100 Feet Road, Indiranagar, Bangalore - 560038',
      phone: '+91 98765 43210',
      hours: 'Mon-Sun: 6:00 AM - 9:00 PM',
      coordinates: {
        lat: 12.9784,
        lng: 77.6408,
      },
    },
    {
      name: 'Butter Batter - Jayanagar',
      address: '4th Block, Jayanagar, Bangalore - 560041',
      phone: '+91 98765 43211',
      hours: 'Mon-Sun: 6:00 AM - 9:00 PM',
      coordinates: {
        lat: 12.9399,
        lng: 77.5827,
      },
    },
    {
      name: 'Butter Batter - Koramangala',
      address: '5th Block, Koramangala, Bangalore - 560095',
      phone: '+91 98765 43212',
      hours: 'Mon-Sun: 6:00 AM - 9:00 PM',
      coordinates: {
        lat: 12.9352,
        lng: 77.6245,
      },
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Our Stores</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div key={store.name} className="card p-6">
              <h2 className="text-xl font-semibold mb-4">{store.name}</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <p className="text-gray-600 dark:text-gray-300">{store.address}</p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <p className="text-gray-600 dark:text-gray-300">{store.phone}</p>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  <p className="text-gray-600 dark:text-gray-300">{store.hours}</p>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-block"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}