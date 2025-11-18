export function FivePillars() {
  const pillars = [
    {
      title: 'Security First',
      description: 'Advanced surveillance systems, secure access controls, and on-site security personnel ensure maximum protection.',
      color: 'bg-teal-700',
    },
    {
      title: 'Customer Service',
      description: 'Our dedicated team is available to assist you with any questions or concerns, making your storage experience seamless.',
      color: 'bg-teal-600',
    },
    {
      title: 'Cleanliness',
      description: 'We maintain the highest standards of cleanliness and organization across all our facilities.',
      color: 'bg-teal-700',
    },
    {
      title: 'Accessibility',
      description: 'Convenient locations, extended hours, and easy unit access make storing your items hassle-free.',
      color: 'bg-teal-600',
    },
    {
      title: 'Value',
      description: 'Competitive pricing with no hidden fees, plus special promotions for long-term customers.',
      color: 'bg-teal-700',
    },
  ];

  return (
    <div className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">FIVE PILLARS OF THE STANDARD</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className={`${pillar.color} p-8 rounded-lg hover:scale-105 transition-transform`}
            >
              <div className="text-5xl mb-4">{index + 1}</div>
              <h3 className="text-2xl mb-4">{pillar.title}</h3>
              <p className="text-teal-100">{pillar.description}</p>
            </div>
          ))}
          
          <div className="bg-teal-600 p-8 rounded-lg hover:scale-105 transition-transform flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl mb-4">Ready to get started?</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors">
                RESERVE YOUR UNIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
