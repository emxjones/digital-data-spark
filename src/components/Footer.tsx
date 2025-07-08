
import { Github, Linkedin, Mail, FileText, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="section-padding bg-card border-t border-data-text-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold gradient-text">
              Let's Connect
            </h2>
            <p className="text-data-text-secondary text-lg max-w-2xl mx-auto">
              Interested in collaborating or discussing data science projects? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/emmanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all group"
            >
              <Github size={24} className="text-data-text-secondary group-hover:text-data-accent" />
            </a>
            <a
              href="https://linkedin.com/in/emmanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all group"
            >
              <Linkedin size={24} className="text-data-text-secondary group-hover:text-data-accent" />
            </a>
            <a
              href="mailto:emmanuel@example.com"
              className="p-4 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all group"
            >
              <Mail size={24} className="text-data-text-secondary group-hover:text-data-accent" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-data-text-secondary hover:border-data-accent hover:bg-data-accent/10 rounded-lg transition-all group"
            >
              <FileText size={24} className="text-data-text-secondary group-hover:text-data-accent" />
            </a>
          </div>

          <div className="pt-8 border-t border-data-text-secondary/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-data-text-secondary text-sm">
                © {currentYear} Emmanuel. All rights reserved.
              </p>
              <p className="text-data-text-secondary text-sm flex items-center space-x-1">
                <span>Built with</span>
                <Heart size={14} className="text-red-400" />
                <span>using React & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
