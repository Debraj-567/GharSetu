import { 
  MapPin, BedDouble, Bath, Square, Car, TreePine, 
  Dumbbell, ShieldCheck, Wifi, PhoneCall, Mail, MessageSquare, 
  Share2, Heart 
} from 'lucide-react';
import VirtualTour from '../components/VirtualTour';
import AreaIntelligence from '../components/AreaIntelligence';
import FinanceHub from '../components/FinanceHub';
import Reviews from '../components/Reviews';

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
];

const amenities = [
  { icon: <Car size={24} />, name: "Parking" },
  { icon: <Dumbbell size={24} />, name: "Gymnasium" },
  { icon: <TreePine size={24} />, name: "Garden" },
  { icon: <ShieldCheck size={24} />, name: "24/7 Security" },
  { icon: <Wifi size={24} />, name: "High Speed WiFi" },
];

const PropertyDetails = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Actions */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div className="text-sm text-slate-500 font-medium">
            Home / Bangalore / Whitefield / <span className="text-slate-900">Premium 3BHK Apartment</span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors font-medium text-slate-700">
              <Share2 size={18} /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors font-medium text-slate-700">
              <Heart size={18} className="text-slate-400" /> Save
            </button>
          </div>
        </div>

        {/* Image Gallery (Airbnb Style) */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 mb-10 h-[50vh] min-h-[400px] rounded-2xl overflow-hidden">
          <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
            <img src={images[0]} alt="Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:block relative group cursor-pointer">
            <img src={images[1]} alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:block relative group cursor-pointer">
            <img src={images[2]} alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:block relative group cursor-pointer">
            <img src={images[3]} alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="hidden md:block relative group cursor-pointer">
            <img src={images[4]} alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-medium text-lg border border-white px-4 py-2 rounded-lg backdrop-blur-sm">View All Photos</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Details */}
          <main className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 mb-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6 border-b border-slate-200 pb-6">
                <div>
                  <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold inline-block mb-3 border border-emerald-100 uppercase tracking-wide">
                    Ready to Move
                  </div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-2">Premium 3BHK Apartment</h1>
                  <p className="flex items-center gap-2 text-slate-500 font-medium">
                    <MapPin size={18} /> Whitefield, Bangalore
                  </p>
                </div>
                <div className="text-right">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">₹1.8 Cr</h2>
                  <p className="text-slate-500 font-medium">₹9,700 / sqft</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-4">
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <BedDouble size={28} className="text-secondary mb-2" />
                  <span className="font-bold text-slate-800 text-lg">3</span>
                  <span className="text-sm text-slate-500">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <Bath size={28} className="text-secondary mb-2" />
                  <span className="font-bold text-slate-800 text-lg">3</span>
                  <span className="text-sm text-slate-500">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <Square size={28} className="text-secondary mb-2" />
                  <span className="font-bold text-slate-800 text-lg">1,850</span>
                  <span className="text-sm text-slate-500">Sqft Area</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <Car size={28} className="text-secondary mb-2" />
                  <span className="font-bold text-slate-800 text-lg">2</span>
                  <span className="text-sm text-slate-500">Parkings</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-10">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">About Property</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Experience luxury living at its finest in this beautifully designed 3BHK apartment located in the heart of Whitefield. This east-facing, vaastu-compliant home offers breathtaking views and ample natural light throughout the day.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The property features premium Italian marble flooring, a modular kitchen with top-of-the-line appliances, and spacious balconies. The society provides world-class amenities including a clubhouse, swimming pool, indoor games, and 24/7 security.
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {amenities.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-700">
                      <div className="p-3 bg-primary/5 text-primary rounded-xl">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <VirtualTour />
            <FinanceHub />
            <AreaIntelligence />
            <Reviews />

          </main>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 p-6 sticky top-28">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-3 overflow-hidden border-4 border-white shadow-md">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Agent" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-heading font-bold text-lg text-slate-900">Prestige Group</h4>
                <p className="text-sm text-emerald-600 font-medium flex items-center justify-center gap-1">
                  <ShieldCheck size={16} /> RERA Verified Builder
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
                  <PhoneCall size={20} /> Contact Seller
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="w-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                    <MessageSquare size={18} /> WhatsApp
                  </button>
                  <button className="w-full bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                    <Mail size={18} /> Email
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-heading font-bold text-slate-900 mb-4">Schedule a Visit</h4>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button className="border border-slate-300 rounded-lg py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors">In Person</button>
                  <button className="border border-slate-300 rounded-lg py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors bg-slate-50">Video Call</button>
                </div>
                <input type="date" className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 outline-none focus:border-primary mb-4" />
                <button className="w-full bg-secondary hover:bg-emerald-600 text-white font-bold py-3 rounded-xl shadow-md transition-all">
                  Request Tour
                </button>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
