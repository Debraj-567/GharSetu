import { useState } from 'react';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

const properties = [
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
  },
  {
    id: "prop-4",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    price: "₹85 Lac",
    title: "Cozy 2BHK Setup",
    location: "Kharadi, Pune",
    beds: 2,
    baths: 2,
    area: "1,100",
    type: "Apartment",
    isVerified: true
  },
  {
    id: "prop-5",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    price: "₹5.2 Cr",
    title: "Ultra Luxury Estate",
    location: "Jubilee Hills, Gurgaon",
    beds: 5,
    baths: 6,
    area: "5,000",
    type: "Villa",
    isFeatured: true
  },
  {
    id: "prop-6",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    price: "₹1.2 Cr",
    title: "Spacious Builder Floor",
    location: "Rohini, Delhi",
    beds: 3,
    baths: 2,
    area: "1,500",
    type: "Builder Floor"
  }
];

const filters = {
  propertyType: ['Apartment', 'Villa', 'Builder Floor', 'Penthouse', 'Plot'],
  bhk: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'],
  budget: ['Under ₹50 Lac', '₹50 Lac - ₹1 Cr', '₹1 Cr - ₹2 Cr', 'Above ₹2 Cr'],
  status: ['Ready to Move', 'Under Construction', 'New Launch']
};

const FilterSection = ({ title, options }: { title: string, options: string[] }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-heading font-semibold text-slate-800 mb-2"
      >
        {title}
        <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="space-y-2 mt-3">
          {options.map((option) => (
            <label 
              key={option} 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => {
                setSelected(prev => 
                  prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
                );
              }}
            >
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                selected.includes(option) ? 'bg-primary border-primary' : 'border-slate-300 group-hover:border-primary'
              }`}>
                {selected.includes(option) && <Check size={14} className="text-white" />}
              </div>
              <span className="text-slate-600 text-sm">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const PropertyListing = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">Properties for Sale</h1>
          <p className="text-slate-600">Showing 1,245 properties matching your criteria</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-28">
              <div className="flex items-center gap-2 font-heading font-bold text-lg mb-6 text-slate-900 border-b border-slate-200 pb-4">
                <SlidersHorizontal size={20} className="text-primary" />
                Filters
              </div>
              
              <FilterSection title="Property Type" options={filters.propertyType} />
              <FilterSection title="BHK Type" options={filters.bhk} />
              <FilterSection title="Budget" options={filters.budget} />
              <FilterSection title="Construction Status" options={filters.status} />
              
              <div className="pt-6">
                <button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white font-medium py-3 rounded-lg transition-colors">
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="w-full lg:w-3/4">
            
            {/* Top Toolbar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-2">
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                  Mumbai <button className="hover:text-red-500">&times;</button>
                </span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                  Apartment <button className="hover:text-red-500">&times;</button>
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 font-medium">Sort by:</span>
                <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-primary cursor-pointer">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Property Grid - Discovery Feed */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {properties.map((prop) => (
                <PropertyCard key={prop.id} {...prop} />
              ))}
            </div>
            
            {/* Infinite Scroll Loader Simulation */}
            <div className="mt-12 flex flex-col items-center justify-center py-8">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-primary rounded-full animate-spin mb-4"></div>
              <p className="text-slate-500 font-medium">Loading more properties...</p>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
