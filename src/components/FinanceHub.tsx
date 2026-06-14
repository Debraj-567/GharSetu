import { useState } from 'react';
import { Calculator, PieChart, IndianRupee, Percent } from 'lucide-react';

const FinanceHub = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  // EMI Calculation: P x R x (1+R)^N / [(1+R)^N-1]
  const calculateEMI = () => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = tenure * 12;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 mb-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 text-primary p-3 rounded-2xl">
          <Calculator size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-slate-900">Finance Hub</h2>
          <p className="text-slate-500">Calculate EMI & Affordability</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sliders */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-slate-700">Loan Amount</label>
              <span className="font-bold text-primary flex items-center"><IndianRupee size={14}/> {(loanAmount / 100000).toFixed(1)} Lacs</span>
            </div>
            <input 
              type="range" 
              min="100000" 
              max="50000000" 
              step="100000" 
              value={loanAmount} 
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-slate-700">Interest Rate</label>
              <span className="font-bold text-primary flex items-center">{interestRate} <Percent size={14}/></span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="15" 
              step="0.1" 
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-slate-700">Tenure (Years)</label>
              <span className="font-bold text-primary">{tenure} Years</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="30" 
              step="1" 
              value={tenure} 
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
            <PieChart size={150} />
           </div>
           
           <div className="relative z-10 text-center mb-8">
             <p className="text-slate-500 font-medium mb-1">Your Monthly EMI</p>
             <div className="text-4xl md:text-5xl font-heading font-bold text-slate-900 flex justify-center items-center gap-1">
               <IndianRupee size={32} className="text-slate-500" />
               {emi.toLocaleString('en-IN')}
             </div>
           </div>

           <div className="space-y-4">
             <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-primary"></div>
                 <span className="text-slate-600 text-sm font-medium">Principal Amount</span>
               </div>
               <span className="font-bold text-slate-800">₹{(loanAmount / 100000).toFixed(2)} L</span>
             </div>
             <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-secondary"></div>
                 <span className="text-slate-600 text-sm font-medium">Total Interest</span>
               </div>
               <span className="font-bold text-slate-800">₹{(totalInterest / 100000).toFixed(2)} L</span>
             </div>
             <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm mt-4 border-t-2 border-t-primary">
               <span className="text-slate-800 font-bold">Total Payment</span>
               <span className="font-bold text-primary text-lg">₹{(totalPayment / 100000).toFixed(2)} L</span>
             </div>
           </div>
           
           <button className="w-full mt-8 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-colors">
             Apply for Home Loan
           </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceHub;