import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight, Home, Calculator, Clock, ShieldCheck, IndianRupee, Star, Zap, Percent } from 'lucide-react';

const banks = [
  { name: "HDFC Bank", rate: "8.35%", speed: "12h Approval", logo: "https://www.vectorlogo.zone/logos/hdfcbank/hdfcbank-icon.svg" },
  { name: "SBI", rate: "8.40%", speed: "24h Approval", logo: "https://www.vectorlogo.zone/logos/sbi/sbi-icon.svg" },
  { name: "ICICI Bank", rate: "8.75%", speed: "Instant", logo: "https://www.vectorlogo.zone/logos/icicibank/icicibank-icon.svg" },
  { name: "Axis Bank", rate: "8.50%", speed: "24h Approval", logo: "https://www.vectorlogo.zone/logos/axisbank/axisbank-icon.svg" },
];

const trustStats = [
  { value: "50,000+", label: "Loans Approved" },
  { value: "₹2,000 Cr+", label: "Financing Processed" },
  { value: "25+", label: "Bank Partners" },
  { value: "4.9", label: "Customer Rating", icon: true },
];

const BankOffers = () => {
  const [propertyPrice, setPropertyPrice] = useState(15000000);
  const [downPayment, setDownPayment] = useState(3000000);
  
  const loanAmount = propertyPrice - downPayment;
  const calculateEMI = (principal: number) => {
    const r = 8.5 / 12 / 100;
    const n = 20 * 12;
    return Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  };
  const estimatedEMI = calculateEMI(loanAmount);

  // Parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-500, 500], [7, -7]);
  const rotateY = useTransform(mouseX, [-500, 500], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200/50">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[60%] bg-secondary/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content Area - Spans 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm"
            >
              <Home size={16} className="text-secondary" />
              <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Home Financing Made Simple</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-[1.1]"
            >
              Find the Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Home Loan</span> in Minutes
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              Compare interest rates, calculate EMIs, check eligibility, and get personalized financing options from trusted banking partners.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-lg"
            >
              {["Lowest Interest Rates", "Fast Approval", "100% Digital Process", "No Hidden Charges"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full">
                    <CheckCircle2 size={16} className="text-secondary" />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Redesigned Bank Partner Grid - More Width */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {banks.map((bank, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, shadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm transition-all duration-300 flex flex-col items-center justify-between h-36"
                >
                  <div className="h-10 flex items-center justify-center w-full px-2 mb-2">
                    <img 
                      src={bank.logo} 
                      alt={bank.name} 
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent) parent.innerHTML = `<span class="font-black text-primary text-sm tracking-tighter">${bank.name}</span>`;
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-slate-900 font-black text-lg">{bank.rate}</p>
                    <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                      {bank.speed === 'Instant' ? <Zap size={10} className="text-yellow-500" /> : <Clock size={10} />}
                      {bank.speed}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <button className="bg-primary hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-primary/25 transition-all transform hover:-translate-y-1 active:scale-95 text-lg">
                Check Eligibility
              </button>
              <button className="text-slate-600 font-bold hover:text-primary transition-colors flex items-center gap-2 group text-lg">
                Compare Loans <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Spans 5 columns, Relative for positioning */}
          <div className="lg:col-span-5 relative h-[650px] flex items-center justify-center">
             
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[450px] aspect-[4/5] perspective-[1500px]"
            >
              {/* Main Background Property Card */}
              <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-white/40 bg-white" style={{ transform: "translateZ(0px)" }}>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover scale-110" 
                  alt="Modern Home" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Element 1: Interest Rate (Top Left) */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-6 -left-10 z-20 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white flex items-center gap-4 min-w-[200px]"
                style={{ transform: "translateZ(100px)" }}
              >
                <div className="bg-emerald-500/10 p-3 rounded-2xl">
                  <Percent className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-0.5">Interest Rate</p>
                  <p className="text-slate-900 font-black text-2xl">8.30%</p>
                </div>
              </motion.div>

              {/* Floating Element 2: Approval Status (Top Right) */}
              <motion.div 
                animate={{ y: [15, -15, 15] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="absolute top-20 -right-6 z-30 bg-white/95 backdrop-blur-xl p-4 rounded-[24px] shadow-2xl border border-white flex items-center gap-3"
                style={{ transform: "translateZ(150px)" }}
              >
                <div className="bg-primary p-2.5 rounded-full shadow-lg shadow-primary/30">
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-slate-900 font-black text-sm leading-tight">Approved in 24h</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase">Digital Process</p>
                </div>
              </motion.div>

              {/* Floating Element 3: EMI Estimator (Bottom) */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-40 w-[92%] bg-white/98 backdrop-blur-2xl p-8 rounded-[32px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] border border-white"
                style={{ transform: "translateZ(80px) translateX(-50%)" }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-primary/10 p-2 rounded-xl">
                    <Calculator size={20} className="text-primary" />
                  </div>
                  <span className="font-black text-slate-800 tracking-tight text-lg">EMI Estimator</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Property Price</span>
                      <span className="font-black text-slate-900">₹{(propertyPrice/100000).toFixed(0)} L</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000000" 
                      max="50000000" 
                      step="1000000"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Down Payment</span>
                      <span className="font-black text-slate-900">₹{(downPayment/100000).toFixed(0)} L</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000000" 
                      max={propertyPrice * 0.8} 
                      step="500000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Est. Monthly EMI</p>
                    <p className="text-3xl font-black text-primary flex items-center tracking-tighter">
                      <IndianRupee size={24} className="mr-0.5" />
                      {estimatedEMI.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Loan Amount</p>
                    <p className="text-base font-black text-slate-800">₹{(loanAmount/100000).toFixed(1)} L</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Improved Trust Banner */}
        <div className="mt-32 bg-white rounded-[32px] shadow-sm border border-slate-100 p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {trustStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="text-center px-4 pt-6 md:pt-0"
              >
                <div className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-2 flex items-center justify-center gap-1">
                  {stat.value}
                  {stat.icon && <Star size={24} className="text-yellow-400 fill-yellow-400" />}
                </div>
                <div className="text-xs font-black text-slate-400 tracking-[0.2em] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BankOffers;
