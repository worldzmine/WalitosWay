import React from 'react';
import { Zap, Shield, Globe, Code, Rocket, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy applications in under 30 seconds with our optimized build pipeline and global CDN.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, automatic SSL, and advanced threat protection.',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Automatically scale across 200+ edge locations worldwide for optimal performance.',
    },
    {
      icon: Code,
      title: 'Developer First',
      description: 'Intuitive APIs, extensive documentation, and seamless integration with your favorite tools.',
    },
    {
      icon: Rocket,
      title: 'CI/CD Pipeline',
      description: 'Automated testing, building, and deployment with rollback capabilities and preview URLs.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools, shared environments, and role-based access controls.',
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From idea to production with enterprise-grade tools that scale with your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="feature-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who've already made the switch to faster, more reliable deployments.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;