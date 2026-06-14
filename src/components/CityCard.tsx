import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CityCardProps {
  name: string;
  image: string;
  propertyCount: string;
  avgPrice: string;
  growth?: string;
}

const CityCard = ({ name, image, propertyCount, avgPrice, growth }: CityCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative rounded-2xl overflow-hidden h-72 group cursor-pointer"
    >
      <Link to={`/properties?city=${name.toLowerCase()}`} className="block w-full h-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800"; // General cityscape fallback
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        
        {growth && (
          <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            {growth} Growth
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-2xl font-heading font-bold mb-1 group-hover:text-secondary transition-colors">{name}</h3>
          
          <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <div>
              <p className="text-sm text-slate-200">{propertyCount} Properties</p>
              <p className="text-xs text-slate-300 mt-1">Avg. {avgPrice}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
              <ArrowRight size={16} className="text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CityCard;
