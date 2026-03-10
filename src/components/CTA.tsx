import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for signing up with ${email}! Check your email to get started.`);
      setEmail('');
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow delay-1000"></div>

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 mr-2" />
          <span className="text-lg font-medium opacity-90">Ready to Transform Your Development?</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Build. Deploy. Scale.
          <span className="block">All in Record Time.</span>
        </h2>

        <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of developers who are already shipping faster with BuildFast. 
          Start your free trial today.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 outline-none text-lg"
            required
          />
          <button 
            type="submit"
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm opacity-80">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;