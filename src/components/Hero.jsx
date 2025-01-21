import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003049] mb-4">
            Generate Beautiful Lorem Ipsum Text
          </h2>
          <p className="text-lg text-[#003049]/80">
            Create customizable placeholder text for your designs, with support for special characters, 
            numbers, and multilingual content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Customizable",
              description: "Control length and content with flexible options"
            },
            {
              title: "Multilingual",
              description: "Support for special characters and accents"
            },
            {
              title: "Fast & Free",
              description: "Generate text instantly, no limits"
            }
          ].map((feature) => (
            <div 
              key={feature.title} 
              className="bg-white rounded-lg p-6 shadow-md border-2 border-[#003049]/10"
            >
              <h3 className="text-lg font-semibold text-[#003049] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#003049]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Hero