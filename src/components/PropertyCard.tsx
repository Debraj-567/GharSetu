import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, BedDouble, Bath, Square, BadgeCheck, Camera, Share2, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  type: string;
  isVerified?: boolean;
  isFeatured?: boolean;
  builder?: string;
}

const PropertyCard = ({
  id,
  image,
  price,
  title,
  location,
  beds,
  baths,
  area,
  type,
  isVerified = true,
  isFeatured = false,
  builder = "Verified Builder"
}: PropertyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).toggleCompareDrawer) {
      (window as any).toggleCompareDrawer();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isFeatured && (
            <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              Featured
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
            {type}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button 
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors z-10"
            title="Save Property"
          >
            <Heart 
              size={18} 
              className={isSaved ? "fill-red-500 text-red-500" : "text-slate-600"} 
            />
          </button>
          <button 
            onClick={(e) => e.preventDefault()}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300"
            title="Share Property"
          >
            <Share2 size={18} className="text-slate-600" />
          </button>
          <button 
            onClick={handleCompare}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300 delay-75"
            title="Compare Property"
          >
            <Scale size={18} className="text-slate-600" />
          </button>
        </div>

        {/* Photo Count */}
        <div className="absolute bottom-4 left-4 bg-slate-900/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <Camera size={14} />
          <span>12</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold font-heading text-primary">{price}</h2>
          {isVerified && (
            <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-bold border border-emerald-100">
              <BadgeCheck size={14} />
              Verified
            </div>
          )}
        </div>

        <Link to={`/property/${id}`} className="block group-hover:text-secondary transition-colors mb-1">
          <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{title}</h3>
        </Link>
        
        <div className="flex items-center gap-1 text-slate-500 text-sm mb-1">
          <MapPin size={16} className="text-slate-400 shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <p className="text-xs text-slate-400 font-medium mb-4">By {builder}</p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
          <div className="flex items-center gap-4 text-slate-600 text-sm w-full justify-between">
            <div className="flex flex-col items-center gap-1" title="Bedrooms">
              <BedDouble size={18} className="text-slate-400" />
              <span className="font-semibold text-slate-800">{beds}</span>
            </div>
            <div className="flex flex-col items-center gap-1" title="Bathrooms">
              <Bath size={18} className="text-slate-400" />
              <span className="font-semibold text-slate-800">{baths}</span>
            </div>
            <div className="flex flex-col items-center gap-1" title="Area">
              <Square size={18} className="text-slate-400" />
              <span className="font-semibold text-slate-800">{area} <span className="font-normal text-xs text-slate-500">sqft</span></span>
            </div>
          </div>
        </div>
        
        {/* Quick View Button on Hover */}
        <div className={`mt-4 overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}>
          <Link 
            to={`/property/${id}`}
            className="w-full block text-center bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold py-3 rounded-xl transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
