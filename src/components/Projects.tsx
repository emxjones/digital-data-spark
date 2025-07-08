
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "East Africa Deprivation Analysis",
      description: "Comprehensive spatial analysis of regional deprivation patterns using demographic and economic indicators across East African countries.",
      tools: ["Python", "GeoPandas", "matplotlib", "Looker Studio"],
      github: "https://github.com/emmanuel/east-africa-analysis",
      demo: "https://lookerstudio.google.com/demo",
      image: "📊"
    },
    {
      title: "Personality Classification with KNN",
      description: "Machine learning model using K-Nearest Neighbors to classify personality types based on behavioral data and social media activity.",
      tools: ["Python", "scikit-learn", "pandas", "Streamlit"],
      github: "https://github.com/emmanuel/personality-knn",
      demo: "https://personality-classifier.streamlit.app",
      image: "🧠"
    },
    {
      title: "Shapefile Data Pipeline",
      description: "Automated pipeline for processing and validating geographical shapefiles, with error detection and data quality reporting.",
      tools: ["Python", "GeoPandas", "Fiona", "PostGIS"],
      github: "https://github.com/emmanuel/shapefile-pipeline",
      demo: null,
      image: "🗺️"
    },
    {
      title: "Fuzzy Matching System",
      description: "Advanced text matching system for data deduplication using fuzzy logic and machine learning techniques.",
      tools: ["Python", "FuzzyWuzzy", "pandas", "SQLAlchemy"],
      github: "https://github.com/emmanuel/fuzzy-matcher",
      demo: "https://fuzzy-matcher-demo.vercel.app",
      image: "🔍"
    },
    {
      title: "Bayesian A/B Testing Framework",
      description: "Statistical framework for A/B testing using Bayesian methods to provide more intuitive and actionable results.",
      tools: ["Python", "PyMC3", "matplotlib", "Jupyter"],
      github: "https://github.com/emmanuel/bayesian-ab-testing",
      demo: null,
      image: "📈"
    },
    {
      title: "Real-time Dashboard Suite",
      description: "Collection of interactive dashboards for monitoring KPIs and business metrics with real-time data updates.",
      tools: ["Plotly Dash", "Redis", "PostgreSQL", "Docker"],
      github: "https://github.com/emmanuel/dashboard-suite",
      demo: "https://dashboard-suite.herokuapp.com",
      image: "📱"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-data-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-data-text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my work in data science, machine learning, and spatial analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-hover bg-card border border-data-text-secondary/20 rounded-lg p-6 space-y-4"
            >
              <div className="text-4xl mb-4">{project.image}</div>
              
              <h3 className="text-xl font-semibold text-data-text">
                {project.title}
              </h3>
              
              <p className="text-data-text-secondary leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-data-accent/10 text-data-accent text-sm rounded-full border border-data-accent/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-data-text-secondary hover:text-data-accent transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-data-text-secondary hover:text-data-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
