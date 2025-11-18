import { Check, X } from 'lucide-react';

export function PricingTable() {
  const plans = [
    {
      name: 'Small',
      size: '5x5',
      price: '$49',
      features: [
        { name: '24/7 Access', included: true },
        { name: 'Climate Control', included: false },
        { name: 'Loading Dock', included: false },
        { name: 'Free Moving Truck', included: false },
      ],
    },
    {
      name: 'Medium',
      size: '10x10',
      price: '$99',
      popular: true,
      features: [
        { name: '24/7 Access', included: true },
        { name: 'Climate Control', included: true },
        { name: 'Loading Dock', included: false },
        { name: 'Free Moving Truck', included: true },
      ],
    },
    {
      name: 'Large',
      size: '10x20',
      price: '$149',
      features: [
        { name: '24/7 Access', included: true },
        { name: 'Climate Control', included: true },
        { name: 'Loading Dock', included: true },
        { name: 'Free Moving Truck', included: true },
      ],
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-4">THE SUPPLY STORAGE EXPERIENCE</h2>
        <p className="text-center text-gray-600 mb-16">Choose the perfect size for your needs</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`border rounded-lg p-8 ${
                plan.popular 
                  ? 'border-orange-500 shadow-xl scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="bg-orange-500 text-white text-center py-2 -mx-8 -mt-8 mb-6 rounded-t-lg">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl mb-2">{plan.name}</h3>
              <div className="text-gray-600 mb-4">{plan.size} ft</div>
              <div className="text-4xl mb-6">
                {plan.price}
                <span className="text-lg text-gray-600">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="text-green-500 flex-shrink-0" size={20} />
                    ) : (
                      <X className="text-gray-300 flex-shrink-0" size={20} />
                    )}
                    <span className={feature.included ? '' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-md transition-colors ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                RESERVE NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
