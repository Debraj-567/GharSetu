import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, Building2, Landmark, TrendingUp, ArrowRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import CityCard from '../components/CityCard';
import PropertyReels from '../components/PropertyReels';
import BankOffers from '../components/BankOffers';
import { Link } from 'react-router-dom';

const searchTabs = ['Buy', 'Rent', 'Commercial', 'PG', 'Plot'];

const featuredProperties = [
  {
    id: "prop-1",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    price: "₹3.5 Cr",
    title: "Luxury Sea View Villa",
    location: "Bandra West, Mumbai",
    beds: 4,
    baths: 4,
    area: "3,200",
    type: "Villa",
    isFeatured: true
  },
  {
    id: "prop-2",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    price: "₹1.8 Cr",
    title: "Premium 3BHK Apartment",
    location: "Whitefield, Bangalore",
    beds: 3,
    baths: 3,
    area: "1,850",
    type: "Apartment"
  },
  {
    id: "prop-3",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    price: "₹2.1 Cr",
    title: "Modern Penthouse",
    location: "Golf Course Road, Bangalore",
    beds: 4,
    baths: 5,
    area: "2,500",
    type: "Penthouse",
    isFeatured: true
  }
];

const topCities = [
  { name: "Mumbai", image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=800", propertyCount: "12,400+", avgPrice: "₹25k/sqft", growth: "+12%" },
  { name: "Bangalore", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=800", propertyCount: "18,200+", avgPrice: "₹8k/sqft", growth: "+15%" },
  { name: "Delhi", image: "https://images.unsplash.com/photo-1585467314765-06137cd9db3b?auto=format&fit=crop&q=80&w=800", propertyCount: "15,100+", avgPrice: "₹12k/sqft", growth: "+8%" },
  { name: "Pune", image: "https://images.unsplash.com/photo-1562914399-52882f026180?auto=format&fit=crop&q=80&w=800", propertyCount: "9,800+", avgPrice: "₹7k/sqft", growth: "+10%" }
];

const HomePage = () => {
  const [activeSearchTab, setActiveSearchTab] = useState('Buy');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">
              Find Your Dream <br className="hidden md:block"/>
              <span className="text-secondary">Property</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl">
              Explore over 100,000+ verified properties across top cities. Buy, sell, or rent with trust and transparency.
            </p>
          </motion.div>

          {/* Search Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 md:p-6 shadow-2xl max-w-5xl border border-white/20"
          >
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
              {searchTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSearchTab(tab)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeSearchTab === tab 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="City, locality..." 
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700 mb-1">Property Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                  <option>All Residential</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Builder Floor</option>
                </select>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700 mb-1">Budget</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                  <option>₹50 Lac - ₹1 Cr</option>
                  <option>₹1 Cr - ₹2 Cr</option>
                  <option>₹2 Cr - ₹5 Cr</option>
                  <option>₹5 Cr+</option>
                </select>
              </div>

              <div className="md:col-span-1">
                <Link to="/properties" className="w-full bg-secondary hover:bg-emerald-600 text-white font-medium py-3 rounded-lg shadow-lg shadow-secondary/30 transition-all flex items-center justify-center gap-2">
                  <Search size={18} />
                  Search
                </Link>
              </div>
            </div>

            {/* Trending Searches */}
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-slate-500 font-medium flex items-center gap-1">
                <ArrowRight size={16} /> Trending:
              </span>
              <span className="bg-slate-100 text-slate-600 hover:bg-primary hover:text-white cursor-pointer px-3 py-1 rounded-full transition-colors">Whitefield, Bangalore</span>
              <span className="bg-slate-100 text-slate-600 hover:bg-primary hover:text-white cursor-pointer px-3 py-1 rounded-full transition-colors">Bandra West, Mumbai</span>
              <span className="bg-slate-100 text-slate-600 hover:bg-primary hover:text-white cursor-pointer px-3 py-1 rounded-full transition-colors">Golf Course Road, Gurgaon</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">100K+</div>
              <div className="text-slate-500 font-medium">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">50+</div>
              <div className="text-slate-500 font-medium">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">20K+</div>
              <div className="text-slate-500 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">1000+</div>
              <div className="text-slate-500 font-medium">Top Builders</div>
            </div>
          </div>
        </div>
      </section>

      <PropertyReels />

      {/* Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Explore Property Types</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Browse properties across various categories tailored to your needs.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: <Building2 size={32}/>, name: "Apartments", count: "45K+" },
              { icon: <Home size={32}/>, name: "Villas", count: "12K+" },
              { icon: <Landmark size={32}/>, name: "Commercial", count: "8K+" },
              { icon: <TrendingUp size={32}/>, name: "Plots", count: "15K+" },
              { icon: <Building2 size={32}/>, name: "Builder Floors", count: "22K+" },
              { icon: <Home size={32}/>, name: "PG & Co-living", count: "5K+" }
            ].map((type, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center justify-center text-center cursor-pointer group"
              >
                <div className="text-primary/70 group-hover:text-secondary group-hover:scale-110 transition-all mb-4">
                  {type.icon}
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">{type.name}</h3>
                <p className="text-xs text-slate-500">{type.count} Properties</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Featured Properties</h2>
              <p className="text-slate-600 max-w-2xl">Handpicked premium properties for you.</p>
            </div>
            <Link to="/properties" className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2">
              View All Properties &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </section>

      <BankOffers />

      {/* Top Cities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Top Cities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Discover properties in India's most sought-after cities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {topCities.map((city, index) => (
               <CityCard key={index} {...city} />
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">List Your Property for Free</h2>
          <p className="text-xl text-slate-200 mb-10">Get access to millions of buyers and tenants. Sell or rent out your property faster with TerraNest.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-secondary hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-all">
              Post Property Now
            </button>
            <button className="bg-white hover:bg-slate-50 text-primary font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
