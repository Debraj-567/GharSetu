import { motion } from 'framer-motion';
import { Play, MapPin, Heart, Share2, Eye } from 'lucide-react';

const reels = [
  {
    id: 1,
    title: "Luxury Sea View Villa in Goa",
    location: "Goa, India",
    views: "124K",
    video: "https://videos.pexels.com/video-files/4429656/4429656-uhd_2160_4096_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Ultra Modern Penthouse",
    location: "South Mumbai",
    views: "89K",
    video: "https://videos.pexels.com/video-files/7578546/7578546-uhd_2160_3840_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Minimalist Apartment Tour",
    location: "Indiranagar, Bangalore",
    views: "210K",
    video: "https://videos.pexels.com/video-files/4429656/4429656-uhd_2160_4096_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Premium Builder Floor",
    location: "Gurgaon, Delhi NCR",
    views: "56K",
    video: "https://videos.pexels.com/video-files/7578546/7578546-uhd_2160_3840_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
  }
];

const PropertyReels = () => {
  return (
    <section className="py-16 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 flex items-center gap-3">
              <Play className="text-secondary fill-secondary" size={28} />
              Property Reels
            </h2>
            <p className="text-slate-400">Immersive short video tours of our premium listings.</p>
          </div>
          <button className="text-secondary font-medium hover:text-white transition-colors hidden md:block">
            View All Reels &rarr;
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
          {reels.map((reel) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={reel.id} 
              className="min-w-[280px] w-[280px] h-[500px] rounded-3xl overflow-hidden relative group snap-center shadow-2xl border border-white/10 shrink-0 cursor-pointer"
            >
              <img 
                src={reel.poster} 
                alt={reel.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800";
                }}
              />
              {/* Note: In a real app, we would use a <video> tag with IntersectionObserver for autoplay. Using images for stability here. */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
              
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={20} className="fill-white" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                <h3 className="font-heading font-bold text-lg mb-1 line-clamp-1 shadow-sm">{reel.title}</h3>
                <div className="flex items-center gap-1 text-sm text-slate-300 mb-4">
                  <MapPin size={14} className="text-secondary" />
                  <span className="line-clamp-1">{reel.location}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md">
                    <Eye size={12} /> {reel.views}
                  </div>
                  <div className="flex gap-3">
                    <button className="hover:text-red-500 transition-colors"><Heart size={20} /></button>
                    <button className="hover:text-secondary transition-colors"><Share2 size={20} /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyReels;