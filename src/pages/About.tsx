import React from 'react';

export function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">About Butter Batter</h1>
        
        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Butter Batter is your trusted source for authentic South Indian batter and chutneys. 
            We bring the traditional taste of Udupi to your kitchen, making it easier for you to 
            prepare delicious meals for your family.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To preserve and share authentic South Indian culinary traditions while making 
                home cooking convenient and delicious for everyone.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To become the most trusted name in fresh, traditional Indian batters and 
                chutneys across the country.
              </p>
            </div>
          </div>
        </section>

        {/* Our Management */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Management</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400" 
                alt="Founder" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">Meghana Manjunath</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Founder & CEO</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                With over 20 years of experience in traditional cooking, Meghana Manjunath brings his 
                family's secret recipes and passion for authentic flavors to Butter Batter.
              </p>
            </div>
            <div className="card p-6">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400" 
                alt="Co-founder" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">Sheethal Subhash </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Co-founder & COO</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Sheethal Subhash's background in food technology and business operations ensures that 
                we maintain the highest quality standards while scaling our operations.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
          <div className="card p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "A Taste of Tradition: From Grandma's Kitchen to Yours"
               Once upon a time in a small village nestled in the heart of South India, there lived a wise and seasoned chef named Shalini Sundar (grandma). Her culinary prowess was renowned far and wide, especially for her secret recipes of dose and idli batters. Her kitchen was a hub of warmth, laughter, and the unmistakable aroma of freshly made doses and idlis.

               Word of grandma’s delectable creations reached the bustling city, where a young entrepreneur named Meghana Manjunath was searching for the perfect venture to bring the flavors of her childhood to the modern world. Intrigued by the tales of grandma’s kitchen, Meghana embarked on a journey to the village, eager to learn the art of crafting the perfect dose and idli batters.

               Under grandma’s guidance, Meghana discovered the magic of selecting the finest ingredients, the precise proportions, and the art of fermentation that gave the batters their unique taste and texture. The recipes had been passed down through generations, and Meghana felt a deep sense of responsibility to share this culinary heritage with the world.

            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With Shalini’s blessings and the secret recipes in hand, Meghana returned to the Bengaluru city and founded "Butter Batter” in 2021 with her. The mission was clear – to bring the authentic flavors of South Indian doses and idlis to kitchens around the world, just as they had been enjoyed for centuries in grandma’s village.

The journey of Butter Batter was not just about selling batters; it was a celebration of tradition, a tribute to the timeless recipes that had been perfected over generations. Each pack of dose and idli batter was a piece of Shalini’s legacy, carefully crafted to transport customers to the heart of South India with every bite.

The batters were not just products; they were stories – stories of grandma’s kitchen, stories of a vibrant culture, and stories of the love and care that went into every batch. Customers didn't just buy dose and idli batters from Butter Batter; they became a part of a culinary journey that connected them to the rich heritage of South India. The aroma of doses sizzling on the griddle and the softness of idlis became more than just a meal – it was an experience, a connection to the past that enriched the present.

And so, the story of Butter Batter continues, inviting people from all walks of life to savor the magic of tradition, one dose and idli at a time. Because at Butter Batter, it's not just about selling batters; it's about sharing a piece of South India's heart and soul with the world.

            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Why Choose Butter Batter?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Traditional Recipe</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Authentic Udupi recipes passed down through generations.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Fresh Daily</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fresh batters prepared daily using premium ingredients.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rigorous quality control and hygienic preparation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}