import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [animateElements, setAnimateElements] = useState(false);
  const [emailSignup, setEmailSignup] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setAnimateElements(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSignup) {
      alert(`Thanks for signing up with ${emailSignup}! Check your email for next steps.`);
      setEmailSignup('');
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Social Proof Badge */}
          <div className={`inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 transform transition-all duration-700 delay-300 ${
            animateElements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Star className="h-4 w-4 fill-current" />
            <span>Trusted by 50,000+ developers</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-700 delay-500 ${
            animateElements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Ship Your Ideas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              10x Faster
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto transform transition-all duration-700 delay-600 ${
            animateElements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Transform your ideas into production-ready applications with our lightning-fast development platform. 
            Build, deploy, and scale modern apps in minutes, not months.
          </p>

          {/* Email Signup */}
          <form onSubmit={handleEmailSubmit} className={`flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8 transform transition-all duration-700 delay-700 ${
            animateElements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <input
              type="email"
              value={emailSignup}
              onChange={(e) => setEmailSignup(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
              required
            />
            <button type="submit" className="btn-primary flex items-center justify-center space-x-2 whitespace-nowrap">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          {/* Demo Button */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 transform transition-all duration-700 delay-800 ${
            animateElements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button className="btn-secondary flex items-center space-x-2 group">
              <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
            <p className="text-sm text-gray-500">No credit card required • 14-day free trial</p>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto transform transition-all duration-700 delay-900 ${
            animateElements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10x</div>
              <div className="text-gray-600">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">500k+</div>
              <div className="text-gray-600">Apps Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;