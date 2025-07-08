
const TechStack = () => {
  const techCategories = [
    {
      category: "Programming",
      icon: "💻",
      technologies: [
        { name: "Python", level: "Expert" },
        { name: "SQL", level: "Advanced" },
        { name: "R", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      category: "Data Science Libraries",
      icon: "📊",
      technologies: [
        { name: "pandas", level: "Expert" },
        { name: "NumPy", level: "Expert" },
        { name: "scikit-learn", level: "Advanced" },
        { name: "GeoPandas", level: "Advanced" },
        { name: "matplotlib", level: "Advanced" },
        { name: "Seaborn", level: "Advanced" }
      ]
    },
    {
      category: "Machine Learning",
      icon: "🧠",
      technologies: [
        { name: "TensorFlow", level: "Intermediate" },
        { name: "PyTorch", level: "Intermediate" },
        { name: "XGBoost", level: "Advanced" },
        { name: "LightGBM", level: "Advanced" }
      ]
    },
    {
      category: "Visualization",
      icon: "📈",
      technologies: [
        { name: "Plotly", level: "Advanced" },
        { name: "Streamlit", level: "Advanced" },
        { name: "Looker Studio", level: "Expert" },
        { name: "Tableau", level: "Intermediate" }
      ]
    },
    {
      category: "Web Technologies",
      icon: "🌐",
      technologies: [
        { name: "React", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      technologies: [
        { name: "Git/GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "Jupyter", level: "Expert" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "border-green-400 text-green-400 bg-green-400/10";
      case "Advanced":
        return "border-data-accent text-data-accent bg-data-accent/10";
      case "Intermediate":
        return "border-yellow-400 text-yellow-400 bg-yellow-400/10";
      default:
        return "border-data-text-secondary text-data-text-secondary bg-data-text-secondary/10";
    }
  };

  return (
    <section id="tech-stack" className="section-padding bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-data-text-secondary text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring data science projects to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-data-text-secondary/20 rounded-lg p-6 space-y-4 card-hover"
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-data-text">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative"
                  >
                    <div className={`tech-badge px-3 py-2 rounded-lg text-center text-sm font-medium ${getLevelColor(tech.level)}`}>
                      {tech.name}
                    </div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-data-bg border border-data-text-secondary/20 rounded text-xs text-data-text opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {tech.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-card border border-data-text-secondary/20 rounded-lg px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-sm text-data-text-secondary">Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-data-accent"></div>
              <span className="text-sm text-data-text-secondary">Advanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <span className="text-sm text-data-text-secondary">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
