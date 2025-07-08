
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Emmanuel's analytical skills are exceptional. His ability to transform complex datasets into actionable insights has been invaluable to our team's success.",
      name: "Dr. Sarah Chen",
      title: "Lead Data Scientist",
      company: "TechCorp Analytics",
      linkedin: "https://linkedin.com/in/sarahchen"
    },
    {
      text: "Working with Emmanuel on the East Africa project was a pleasure. His expertise in spatial analysis and visualization brought our research to life.",
      name: "Prof. Michael Johnson",
      title: "Research Director",
      company: "Global Development Institute",
      linkedin: "https://linkedin.com/in/michaeljohnson"
    },
    {
      text: "Emmanuel consistently delivers high-quality work with attention to detail. His machine learning implementations are robust and well-documented.",
      name: "Lisa Rodriguez",
      title: "Senior Product Manager",
      company: "DataFlow Solutions",
      linkedin: "https://linkedin.com/in/lisarodriguez"
    },
    {
      text: "His passion for data storytelling is evident in every project. Emmanuel makes complex analysis accessible to stakeholders at all levels.",
      name: "James Wilson",
      title: "VP of Engineering",
      company: "InnovateLabs",
      linkedin: "https://linkedin.com/in/jameswilson"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-data-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Recommendations</span>
          </h2>
          <p className="text-data-text-secondary text-lg max-w-2xl mx-auto">
            What colleagues and collaborators say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-data-text-secondary/20 rounded-lg p-8 lg:p-12 relative">
            <Quote className="absolute top-6 left-6 text-data-accent/30" size={32} />
            
            <div className="text-center space-y-6">
              <blockquote className="text-xl lg:text-2xl text-data-text leading-relaxed italic">
                "{currentTestimonial.text}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="text-data-accent font-semibold text-lg">
                  {currentTestimonial.name}
                </h4>
                <p className="text-data-text-secondary">
                  {currentTestimonial.title}
                </p>
                <p className="text-data-text-secondary text-sm">
                  {currentTestimonial.company}
                </p>
                <a
                  href={currentTestimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-data-accent hover:text-data-accent/80 transition-colors text-sm"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all"
              >
                <ChevronLeft size={20} className="text-data-text-secondary hover:text-data-accent" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-data-accent'
                        : 'bg-data-text-secondary/30 hover:bg-data-text-secondary/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all"
              >
                <ChevronRight size={20} className="text-data-text-secondary hover:text-data-accent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
