import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const products = [
  {
    image: '/images/iron-pipes.jpg',
    titleKey: 'product_iron_title',
    descKey: 'product_iron_desc',
    features: ['product_iron_f1', 'product_iron_f2', 'product_iron_f3'],
  },
  {
    image: '/images/galvanized-pipes.jpg',
    titleKey: 'product_galvanized_title',
    descKey: 'product_galvanized_desc',
    features: ['product_galvanized_f1', 'product_galvanized_f2', 'product_galvanized_f3'],
  },
  {
    image: '/images/steel-profiles.jpg',
    titleKey: 'product_profiles_title',
    descKey: 'product_profiles_desc',
    features: ['product_profiles_f1', 'product_profiles_f2', 'product_profiles_f3'],
  },
];

export default function Products() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-bg text-white min-h-screen flex items-center py-16 px-4 relative overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gray-500 text-sm tracking-[0.2em] uppercase mb-4 block">
            {t('products_header')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {t('products_title')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('products_subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-[#0B1222] rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={t(product.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1222] via-[#0B1222]/40 to-transparent" />
              </div>

              {/* Product Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {t(product.titleKey)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {t(product.descKey)}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {product.features.map((featureKey, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
