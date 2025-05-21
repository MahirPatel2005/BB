import React from 'react';
import { ProductCard } from '../components/ProductCard';

export function Products() {
  const products = {
    idli: [
      {
        name: 'Udupi Standard Idli Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.lRuB9j-n52QrRzg9cp5kDAHaHF?rs=1&pid=ImgDetMain',
        description: 'Made from Fine blend of Rice, Sooji (Samolina) and urad dal.',
        price: '₹75.00',
      },
      {
        name: 'Ragi Idli Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.rmyx8r-dqwaYFMnSVim9uQHaLH?rs=1&pid=ImgDetMain',
        description: 'Healthy blend of authentic Idli batter with high-quality Ragi flour.',
        price: '₹85.00',
      },
      {
        name: 'Masala Idli Batter - (750ml)',
        image: 'https://i0.wp.com/southindianrecipes.in/wp-content/uploads/2021/07/Masala-Idli.jpg?resize=768%2C900&ssl=1',
        description: 'Masala twist to authentic Idli batter with Carrot, Chilli, Ginger, and more.',
        price: '₹85.00',
      },
      {
        name: 'Dill Leaf (Sabsige) Batter - (750ml)',
        image: 'https://th.bing.com/th/id/R.80d6a734d9c36e73aad333308b799e6c?rik=djpqe9vtdrud2A&riu=http%3a%2f%2fwww.archanaskitchen.com%2fimages%2farchanaskitchen%2f1-Author%2fgauravi%2fSabsige_soppina_Idli_Dill_leaves_Idli.jpg&ehk=0wnCqIJ04cXYq%2fd9wz0TQWXnzbDaFxhY1%2bEIzrWeyeE%3d&risl=&pid=ImgRaw&r=0',
        description: 'Idli batter blended with Dill Leaf gives an extinct aroma. It is Popularly known as Sabsige soppu Idli',
        price: '₹85.00',
      },
    ],
    dosa: [
      {
        name: 'Udupi Standard Dosa Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.JOlO2To7LKAoeIWLVQW5xAHaD2?rs=1&pid=ImgDetMain',
        description: 'A perfect blend of Rice, Urad Dal, Fenugreek, and more fermented to perfection.',
        price: '₹75.00',
      },
      {
        name: 'Ragi Dosa Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.5t_08q1Vn2auV5oR4LqzPgHaEK?rs=1&pid=ImgDetMain',
        description: 'Healthy Dosa batter with perfect blend of high quality ragi flour.',
        price: '₹85.00',
      },
      {
        name: 'Millet Dosa Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.lmmAsiQR4bLFsV8v_XSSoQHaG5?rs=1&pid=ImgDetMain',
        description: 'Authentic Udupi Dosa batter infused with all 4 millets (Finger/Foxtail/Jowar/Pearl).',
        price: '₹85.00',
      },
      {
        name: 'Chatpata Pudina Dosa Batter - (750ml)',
        image: 'https://sankalprestaurants.com/wp-content/uploads/2024/07/Mysore-chatpata-dosa.jpg',
        description: 'Pudina (Mint) Dosa batter is green textured and a healthy batter. It has a bit of Garlic in for flavor.',
        price: '₹85.00',
      },
      {
        name: 'Butter Dosa Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.Qhl2NtDKcAYxSmcjPH_H2QHaGP?rs=1&pid=ImgDetMain',
        description: 'Tasty desi cow butter blended into fresh Dosa batter. Ideal for Butter masala Dosa.',
        price: '₹85.00',
      },
      {
        name: 'Palak Magic Dosa Batter - (750ml)',
        image: 'https://static.vecteezy.com/system/resources/previews/016/283/228/non_2x/palak-dosa-made-using-mixing-spinach-or-keerai-in-batter-served-with-red-chutney-free-photo.jpg',
        description: 'Spinach Dosa batter is made from fresh spinach blended with Dosa batter. It has a bit of Garlic in it.',
        price: '₹85.00',
      },
      {
        name: 'Set Dosa Batter - (750ml)',
        image: 'https://i.ytimg.com/vi/UboF2QmswPM/maxresdefault.jpg',
        description: 'This is made of Rice, Urad Dal, Flattened rice, Sabudana (Sago), etc. This is named Set Dosa as it is served in a set of 3 Dosas in restaurants.',
        price: '₹85.00',
      },
      {
        name: 'Beetroot Dosa Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.plrvCJFPMdRArDxBl03VuwHaHa?rs=1&pid=ImgDetMain',
        description: 'A perfect blend of Rice, Urad Dal, Fenugreek, and Beetroot fermented to perfection.',
        price: '₹85.00',
      },
      {
        name: 'Chilli Cheese Dosa Batter - (750ml)',
        image: 'https://i.pinimg.com/originals/00/07/8c/00078c3a5782b1367a6cdfcc03f710a9.jpg',
        description: "Butter Batter's signature Dosa batter with richness of high-quality cheese and chilli.",
        price: '₹95.00',
      },
      {
        name: 'Yummy Chocolate Dosa Batter - (750ml)',
        image: 'https://i.pinimg.com/736x/5e/4a/2d/5e4a2db552f2bd4f814d4ace1e78e3c0.jpg',
        description: 'Chocolate infused Dosa batter is a sweet & salt batter. Goes well with chocolate sauce/Jam.',
        price: '₹95.00',
      },
    ],
    weekendSpecialty: [
      {
        name: 'Neer Dosa Batter - (750ml)',
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2017/10/neer-dosa-recipe.jpg',
        description: 'Authentic Udupi style Dosa batter. This thin watery batter made of rice.',
        price: '₹85.00',
      },
      {
        name: 'Rava Dosa Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.K3SeQzlTBTAqc-Wyo1aZLQAAAA?rs=1&pid=ImgDetMain',
        description: 'Authentic Udupi style Rava Dosa batter is a thin crispy fried crepe made with Semolina, Rice flour, and chosen spices. Best tasted with Butter Batter chutney.',
        price: '₹85.00',
      },
      {
        name: 'Masala Dosa Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.XSCo5S6kP3o-7-jVqH4vGgHaE8?rs=1&pid=ImgDetMain',
        description: 'Made of Rice, Urad Dal, Flattened rice, Fenugreek seeds.',
        price: '₹85.00',
      },
      {
        name: 'Thatte Idli Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.x4uTdLXhkQvVemkZbCwU-AHaFj?rs=1&pid=ImgDetMain',
        description: 'Made of Rice, Urad dal, Beaten rice, Salt, which is perfectly fermented.',
        price: '₹85.00',
      },
      {
        name: 'Multigrain Dosa Batter - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.n6_JdnkNbL0eFRMLDNEmhgHaE8?rs=1&pid=ImgDetMain',
        description: 'Made from Channa dal, Sago, Green gram, Urad dal, rice (<20%).',
        price: '₹125.00',
      },
    ],
    paddu: [
      {
        name: 'Guliyappa / Paddu batter - (750ml)',
        image: 'https://img-global.cpcdn.com/recipes/07e454200549b257/680x482cq70/guliyappa-recipe-main-photo.jpg',
        description: "Udupi's authentic batter variant. Has various spices/herbs in it",
        price: '₹85.00',
      },
      {
        name: 'Palak Paddu batter - (750ml)',
        image: 'https://foodofinterest.com/wp-content/uploads/2018/08/DSC_0042_00042-1200x803.jpg',
        description: 'Fresh Spinach blended batter variant has various spices /herbs in it.',
        price: '₹95.00',
      },
      {
        name: 'Pudina Paddu Batter - (750ml)',
        image: 'https://i.ytimg.com/vi/676-FkxfhrE/maxresdefault.jpg',
        description: 'Pudina (Mint) batter is green textured and has a bit of Garlic in for flavor.',
        price: '₹95.00',
      },
      {
        name: 'Butter Paddu Batter - (750ml)',
        image: 'https://i.ytimg.com/vi/9sIPdtibeEY/maxresdefault.jpg',
        description: 'Tasty desi cow butter blended into fresh batter.',
        price: '₹95.00',
      },
      {
        name: 'Beetroot Paddu Batter - (750ml)',
        image: 'https://i0.wp.com/kitchenkathukutty.com/wp-content/uploads/2017/09/beetroot-dumplings.jpg?resize=830%2C467',
        description: 'A perfect blend of Rice, Urad Dal, Fenugreek, and Beetroot fermented to perfection.',
        price: '₹95.00',
      },
      {
        name: 'Ragi Paddu Batter - (750ml)',
        image: 'https://i.ytimg.com/vi/DqbAEhnT84o/maxresdefault.jpg',
        description: 'Healthy batter with perfect blend of high quality ragi flour.',
        price: '₹95.00',
      },
      {
        name: 'Millet Paddu Batter - (750ml)',
        image: 'https://i.ytimg.com/vi/7ojr4NgauDM/maxresdefault.jpg',
        description: 'Authentic Udupi batter infused with all 4 millets (Finger/ Foxtail/ Jowar/ Pearl)',
        price: '₹95.00',
      },
      {
        name: 'Cheese Paddu batter - (750ml)',
        image: 'https://i.ytimg.com/vi/676-FkxfhrE/maxresdefault.jpg',
        description: 'Cheese batter variant has various spices /herbs in it.',
        price: '₹100.00',
      },
    ],
    roti: [
      {
        name: 'Phulka - (5 pieces)',
        image: 'https://5.imimg.com/data5/GQ/FU/MY-39838230/phulka-roti-500x500.png',
        description: 'Wheat Flour and Salt.',
        price: '₹50.00',
      },
      {
        name: 'Chapati - (5 pieces)',
        image: 'https://th.bing.com/th/id/OIP.iABVK73UYywVNC4mweoCjgHaGN?rs=1&pid=ImgDetMain',
        description: 'Wheat Flour, Salt and oil.',
        price: '₹50.00',
      },
      {
        name: 'Thepla - (5 pieces)',
        image: 'https://th.bing.com/th/id/OIP.mLPze5nnmiRJ9culplB2rAHaHa?rs=1&pid=ImgDetMain',
        description: 'Wheat flour, Methi leaves, Ginger, Spices, Green chili, Coriander leaves',
        price: '₹70.00',
      },
    ],
    chutney: [
      {
        name: 'Tomato Chutney - (250ml)',
        image: 'https://th.bing.com/th/id/OIP.E1AJjvJmFw_DgyTQc4QXoAHaE8?rs=1&pid=ImgDetMain',
        description: 'Tomato, Onion, Coconut, Fried Gram, Jeera, Garlic, Guntur Chilli, Byadagi Chilli, Salt, Green Chilli, Turmeric powder, Jaggery',
        price: '₹49.00',
      },
      {
        name: 'Pudina Chutney - (250ml)',
        image: 'https://th.bing.com/th/id/OIP.G9Taf9kPpNOPeRFbIH-kdgAAAA?rs=1&pid=ImgDetMain',
        description: 'Coconut, Fried Gram, Green Chilli, Pudina (Mint leaves), Tamarind, Salt, Jaggery.',
        price: '₹45.00',
      },
      {
        name: 'Chutney Powder - (750ml)',
        image: 'https://th.bing.com/th/id/OIP.Y4KMpEntiKsTlEnyU0LI5gHaFj?rs=1&pid=ImgDetMain',
        description: 'Bengal Gram, Black Gram, Chilli, Salt, Tamarind, Mustard Asafoetida, Refined Oil, Jaggery.',
        price: '₹125.00',
      },
    ],
    combo: [
      {
        name: 'Choose any 2 Batters from the menu, of 500ml each',
        image: 'https://thumbs.dreamstime.com/z/south-indian-breakfast-idli-dosa-chutney-indian-breakfast-lentil-rice-pancake-also-known-as-dosa-dumplings-known-as-idli-158574513.jpg',
        description: '',
        price: '₹119.00',
      },
      {
        name: 'Family Packs (Only upon bringing own containers)',
        image: 'https://th.bing.com/th/id/OIP.s61yJEbF6CAb2Ky6d_EcSgHaI1?rs=1&pid=ImgDetMain',
        description: 'Standard Idli/Dosa Batter BYOC (Bring your own container): For all 750ML packs, avail 5% off. Family pack prices are inclusive of discounts.',
        price: '1000 ML - ₹95 , 1500 ML - ₹130, 2000 ML - ₹160',
      },
    ],
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Our Products</h1>

        {/* Idli Batters (Special Menu) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Idli Batters (Special Menu)</h2>
          <p className="mb-6">
            Elevate your breakfast game with our Fluffy Idli Batter. Specially crafted to create soft and spongy idli’s, this batter guarantees a delightful start to your day. Just steam and enjoy these delectable bite-sized delights with your favorite chutneys and sambar.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.idli.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Dosa Batters (Special Menu) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Dosa Batters (Special Menu)</h2>
          <p className="mb-6">
            Unleash the magic of crispy, golden Dosas with our Classic Dosa Batter. Made from premium rice and urad dal, this batter is fermented to perfection, ensuring that each Dosa is light, airy, and irresistibly flavorful.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.dosa.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Weekend specialty batters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Weekend specialty batters One Special Batter every weekend!</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.weekendSpecialty.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Paddu Batters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Paddu Batters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.paddu.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Ready to Eat Rotis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Ready to Eat Rotis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.roti.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Fresh Chutney */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Fresh Chutney</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.chutney.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Combo */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Combo</h2>
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
