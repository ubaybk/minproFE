import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Our Website</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight">Welcome to Eventopia!</h2>
            <p className="mt-4 text-lg">A home for all kinds of joy! Whether you're a music lover, a health enthusiast, or an automotive aficionado, we have something for everyone. Join us on a journey through a series of inspiring and entertaining events. Don't miss out on unforgettable moments and discover what makes your heart race at Eventopia! Visit our website now and register to join the next adventure!</p>
            <div className="mt-6">
              <a href="#" className="inline-block bg-white py-3 px-6 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature 3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
