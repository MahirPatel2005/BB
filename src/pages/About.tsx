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
              <h3 className="text-xl font-semibold mb-2 text-center">Rajesh Kumar</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Founder & CEO</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                With over 20 years of experience in traditional cooking, Rajesh brings his 
                family's secret recipes and passion for authentic flavors to Butter Batter.
              </p>
            </div>
            <div className="card p-6">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400" 
                alt="Co-founder" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">Priya Sharma</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Co-founder & COO</p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Priya's background in food technology and business operations ensures that 
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
              What started as a small operation in our grandmother's kitchen has grown into 
              a beloved brand trusted by thousands of families. Our journey began with a 
              simple mission: to make authentic South Indian cooking accessible to everyone.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we serve customers across multiple cities, but our commitment to quality 
              and tradition remains unchanged. Every batch of batter is still prepared with 
              the same care and attention to detail as it was in our grandmother's kitchen.
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