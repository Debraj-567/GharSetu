import { Star, CheckCircle, ThumbsUp } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150",
    role: "Resident",
    rating: 5,
    date: "2 weeks ago",
    text: "Living here for the past 2 years. The construction quality is top-notch and the maintenance team is highly responsive. The clubhouse amenities are a major plus.",
    verified: true,
    likes: 24
  },
  {
    id: 2,
    name: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    role: "Property Investor",
    rating: 4,
    date: "1 month ago",
    text: "Great ROI potential. The upcoming metro station is just 500 meters away which will drastically improve connectivity. Only issue is slight traffic during peak hours.",
    verified: true,
    likes: 18
  },
  {
    id: 3,
    name: "Amit Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    role: "Tenant",
    rating: 5,
    date: "3 months ago",
    text: "Perfect locality for families. My kids love the play area and the security is very strict, which gives us peace of mind.",
    verified: false,
    likes: 9
  }
];

const Reviews = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 mb-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Community Reviews</h3>
          <div className="flex items-center gap-2">
             <div className="flex text-yellow-400">
               <Star size={18} className="fill-yellow-400" />
               <Star size={18} className="fill-yellow-400" />
               <Star size={18} className="fill-yellow-400" />
               <Star size={18} className="fill-yellow-400" />
               <Star size={18} className="fill-yellow-400 text-yellow-400/50" />
             </div>
             <span className="font-bold text-slate-800">4.6/5</span>
             <span className="text-slate-500 text-sm">(128 Reviews)</span>
          </div>
        </div>
        <button className="hidden md:block bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-2 px-6 rounded-xl transition-colors">
          Write a Review
        </button>
      </div>

      <div className="space-y-6">
        {reviewsData.map((review) => (
          <div key={review.id} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    {review.verified && <CheckCircle size={14} className="text-emerald-500" />}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>{review.role}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < review.rating ? "fill-yellow-400" : "fill-slate-200 text-slate-200"} />
                ))}
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">"{review.text}"</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-primary transition-colors">
                <ThumbsUp size={14} /> Helpful ({review.likes})
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 text-primary font-medium hover:text-secondary transition-colors md:hidden">
        Write a Review
      </button>
    </div>
  );
};

export default Reviews;