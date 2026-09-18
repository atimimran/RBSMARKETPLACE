'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import CategoryTabs from './components/CategoryTabs';
import SubTabs from './components/SubTabs';
import SearchForm from './components/SearchForm';
import HeroImages from './components/HeroImages';
import TrustBadges from './components/TrustBadges';
import PopularRoutes from './components/PopularRoutes';

import type { SearchCategory, SearchTab } from './components/SearchForm/types';

export default function Home() {
  const [activeCategory, setActiveCategory] =
    useState<SearchCategory>('quotes');

  const [activeTab, setActiveTab] =
    useState<SearchTab>('quote');

  return (
    <div className="min-h-screen bg-white text-gray-900 pb-12">
      <Navbar />

      <main className="w-full max-w-420 mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <div className="bg-[#f4f6f8] rounded-4xl p-6 sm:p-8 lg:p-10 border border-gray-200/60 shadow-2xs mb-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-7 flex flex-col space-y-5">

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-3">
                  Compare freight quotes from trusted logistics partners.
                </h1>

                <p className="text-gray-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                  Get the best rates from carriers, shipping lines, warehouses,
                  customs brokers & manufacturers worldwide.
                </p>
              </div>

              <CategoryTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />

              <SubTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              <SearchForm
                activeCategory={activeCategory}
                activeTab={activeTab}
              />

              <TrustBadges />
            </div>

            <div className="lg:col-span-5">
              <HeroImages />
            </div>

          </div>

        </div>

        {/* <PopularRoutes /> */}

      </main>
    </div>
  );
}
