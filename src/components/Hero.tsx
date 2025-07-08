
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeInUp">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-data-text">Hi, I'm </span>
              <span className="gradient-text">Emmanuel</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-data-accent font-medium">
              Data Scientist & Storyteller
            </h2>
            <p className="text-lg text-data-text-secondary leading-relaxed max-w-lg">
              Turning data into decisions through spatial analysis, machine learning, 
              and impactful data storytelling. I specialize in transforming complex 
              datasets into actionable insights.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/emmanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all"
            >
              <Github size={24} className="text-data-text-secondary hover:text-data-accent" />
            </a>
            <a
              href="https://linkedin.com/in/emmanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all"
            >
              <Linkedin size={24} className="text-data-text-secondary hover:text-data-accent" />
            </a>
            <a
              href="mailto:emmanuel@example.com"
              className="p-3 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all"
            >
              <Mail size={24} className="text-data-text-secondary hover:text-data-accent" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all"
            >
              <FileText size={24} className="text-data-text-secondary hover:text-data-accent" />
            </a>
          </div>

          <div className="pt-4">
            <p className="text-data-accent font-mono text-lg">
              "Turning data into decisions."
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-data-accent/20 to-data-accent/5 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-data-bg border-2 border-data-accent/30 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-data-accent/10 to-transparent flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-data-accent rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-data-accent/50 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
