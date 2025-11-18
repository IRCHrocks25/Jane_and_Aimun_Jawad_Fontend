import { Shield, Clock, Thermometer, Lock, Users, Headphones } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Maximum Security',
      description: 'State-of-the-art security systems with 24/7 monitoring and surveillance',
    },
    {
      icon: Clock,
      title: '24/7 Access',
      description: 'Access your belongings anytime, day or night, 365 days a year',
    },
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'Temperature and humidity-controlled units to protect sensitive items',
    },
    {
      icon: Lock,
      title: 'Private Units',
      description: 'Individual locks and keys ensure only you have access to your unit',
    },
    {
      icon: Users,
      title: 'Trusted Service',
      description: 'Over 25 years of experience serving thousands of satisfied customers',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Dedicated customer service team ready to help with all your needs',
    },
  ];

  return (
    <div className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-4">WHY CHOOSE US?</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          We go above and beyond to provide the best storage experience
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800 transition-colors border border-slate-700"
            >
              <feature.icon className="text-orange-500 mb-4" size={40} />
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
