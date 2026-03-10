import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for side projects and learning',
      price: { monthly: 0, annual: 0 },
      features: [
        '3 projects',
        '10GB bandwidth',
        'Community support',
        'Basic analytics',
        'Standard builds',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'For growing teams and businesses',
      price: { monthly: 29, annual: 290 },
      features: [
        'Unlimited projects',
        '100GB bandwidth',
        'Priority support',
        'Advanced analytics',
        'Faster builds',
        'Custom domains',
        'Team collaboration',
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: { monthly: 99, annual: 990 },
      features: [
        'Everything in Pro',
        'Unlimited bandwidth',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantee',
        'Advanced security',
        'Dedicated manager',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your needs. Start free, upgrade when you're ready.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
              Save 20%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-blue-500 shadow-xl scale-105'
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? Math.floor((plan.price.annual || 0) / 12) : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>
                  {isAnnual && plan.price.annual > 0 && (
                    <div className="text-sm text-green-600 mt-1">
                      Billed annually (${plan.price.annual}/year)
                    </div>
                  )}
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {plan.cta}
                </button>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Questions about pricing? We have answers.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            View FAQ →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;