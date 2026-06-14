import { motion } from 'framer-motion';
import { ShieldCheck, Wifi, Bus, Wind, Activity } from 'lucide-react';

const AreaIntelligence = () => {
  const scores = [
    { label: "Safety", score: 92, icon: <ShieldCheck size={20} className="text-emerald-500" />, color: "bg-emerald-500" },
    { label: "Connectivity", score: 88, icon: <Wifi size={20} className="text-blue-500" />, color: "bg-blue-500" },
    { label: "Transport", score: 85, icon: <Bus size={20} className="text-purple-500" />, color: "bg-purple-500" },
    { label: "Air Quality", score: 76, icon: <Wind size={20} className="text-yellow-500" />, color: "bg-yellow-500" },
    { label: "Livability", score: 90, icon: <Activity size={20} className="text-primary" />, color: "bg-primary" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8 mb-12">
      <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Area Intelligence</h3>
      <p className="text-slate-600 mb-8">Data-driven insights for Whitefield, Bangalore</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {scores.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 font-medium text-slate-700">
                  {item.icon} {item.label}
                </div>
                <span className="font-bold text-slate-900">{item.score}/100</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-2.5 rounded-full ${item.color}`}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center items-center text-center">
          <div className="text-5xl font-heading font-bold text-primary mb-2">86<span className="text-2xl text-slate-400">/100</span></div>
          <div className="text-lg font-bold text-slate-800 mb-2">Excellent Locality</div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Whitefield ranks in the top 5% of localities in Bangalore for IT professionals, offering world-class infrastructure and connectivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreaIntelligence;