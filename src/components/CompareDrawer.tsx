import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale, BedDouble, Square, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

// Mock comparison data for demo purposes
const compareData = [
  {
    id: "prop-1",
    title: "Luxury Sea View Villa",
    price: "₹3.5 Cr",
    bhk: "4 BHK",
    area: "3,200 sqft",
    builder: "Prestige Group",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "prop-2",
    title: "Ultra Modern Penthouse",
    price: "₹2.8 Cr",
    bhk: "3 BHK",
    area: "2,500 sqft",
    builder: "Lodha Developers",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=300"
  }
];

const CompareDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(compareData);

  const removeItem = (id: string) => {
    setItems(items.filter(i => i.id !== id));
  };

  // Exposed globally just for demo interaction (in a real app, use Context/Zustand)
  if (typeof window !== 'undefined') {
    (window as any).toggleCompareDrawer = () => setIsOpen(true);
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 w-full bg-white z-[101] rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <Scale className="text-primary" /> Compare Properties ({items.length}/3)
            </h2>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
              <X size={24} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              No properties added for comparison. Add properties from the listing page.
            </div>
          ) : (
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-6 min-w-max pb-4">
                {/* Features Column */}
                <div className="w-40 flex flex-col justify-end gap-6 text-sm font-semibold text-slate-500 pb-6 shrink-0">
                  <div className="h-10 flex items-center">Price</div>
                  <div className="h-10 flex items-center">Configuration</div>
                  <div className="h-10 flex items-center">Area</div>
                  <div className="h-10 flex items-center">Builder</div>
                  <div className="h-10 flex items-center">Verified</div>
                </div>

                {/* Property Columns */}
                {items.map(item => (
                  <div key={item.id} className="w-64 bg-slate-50 rounded-2xl p-4 border border-slate-100 relative shrink-0">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="absolute -top-3 -right-3 bg-white text-red-500 rounded-full p-1 shadow-md border border-slate-100 hover:bg-red-50 hover:scale-110 transition-all z-10"
                    >
                      <X size={16} />
                    </button>
                    
                    <div className="h-32 rounded-xl overflow-hidden mb-4 border border-slate-200">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-slate-900 line-clamp-1 mb-6 text-center">{item.title}</h3>
                    
                    <div className="flex flex-col gap-6 text-center">
                      <div className="h-10 flex items-center justify-center font-bold text-primary text-lg">
                        {item.price}
                      </div>
                      <div className="h-10 flex items-center justify-center font-medium text-slate-700 gap-1">
                        <BedDouble size={16} className="text-slate-400"/> {item.bhk}
                      </div>
                      <div className="h-10 flex items-center justify-center font-medium text-slate-700 gap-1">
                        <Square size={16} className="text-slate-400"/> {item.area}
                      </div>
                      <div className="h-10 flex items-center justify-center font-medium text-slate-700">
                        {item.builder}
                      </div>
                      <div className="h-10 flex items-center justify-center">
                         <CheckCircle2 size={24} className="text-emerald-500" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add More Placeholder */}
                {items.length < 3 && (
                  <div className="w-64 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary hover:border-primary transition-colors cursor-pointer shrink-0">
                    <Scale size={32} className="mb-2" />
                    <span className="font-medium">Add Property</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default CompareDrawer;