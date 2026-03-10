import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "BuildFast completely transformed our development workflow. We went from taking weeks to deploy to literally minutes. The developer experience is incredible.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c8e19fd4?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      content: "The reliability and speed are unmatched. We've saved countless hours and our customers love how fast our apps load now. Best decision we made this year.",
      author: "Marcus Johnson",
      role: "Lead Developer at InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      content: "As a startup, we needed to move fast. BuildFast gave us enterprise-grade infrastructure without the complexity. We scaled from 0 to 100k users seamlessly.",
      author: "Emily Rodriguez",
      role: "Founder at StartupX",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it — see what developers and teams are saying about BuildFast
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-blue-600 mb-4" />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by companies of all sizes</p>
          <div className="flex flex-wrap items-center justify-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">ACME Corp</div>
            <div className="text-2xl font-bold text-gray-400">TechFlow</div>
            <div className="text-2xl font-bold text-gray-400">InnovateCorp</div>
            <div className="text-2xl font-bold text-gray-400">StartupX</div>
            <div className="text-2xl font-bold text-gray-400">DevTools Inc</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;