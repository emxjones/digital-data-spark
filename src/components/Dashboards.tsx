
import { ExternalLink, BarChart3 } from 'lucide-react';

const Dashboards = () => {
  const dashboards = [
    {
      title: "East Africa Regional Analytics",
      description: "Interactive dashboard visualizing regional deprivation indicators across East African countries with drill-down capabilities.",
      platform: "Looker Studio",
      url: "https://lookerstudio.google.com/reporting/demo-1",
      embedUrl: "https://lookerstudio.google.com/embed/reporting/demo-1/page/1",
      metrics: ["Population Density", "Economic Indicators", "Infrastructure Index"]
    },
    {
      title: "Personality Classification Explorer",
      description: "Real-time personality classification using KNN algorithm with interactive parameter tuning and result visualization.",
      platform: "Streamlit",
      url: "https://personality-classifier.streamlit.app",
      embedUrl: null,
      metrics: ["Classification Accuracy", "Feature Importance", "Model Performance"]
    },
    {
      title: "Sales Analytics Hub",
      description: "Comprehensive sales performance dashboard with predictive analytics and trend analysis for business decision making.",
      platform: "Plotly Dash",
      url: "https://sales-analytics.herokuapp.com",
      embedUrl: null,
      metrics: ["Revenue Trends", "Customer Segmentation", "Forecast Accuracy"]
    }
  ];

  return (
    <section id="dashboards" className="section-padding bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Live Dashboards</span>
          </h2>
          <p className="text-data-text-secondary text-lg max-w-2xl mx-auto">
            Interactive dashboards showcasing real-time data analysis and visualization capabilities
          </p>
        </div>

        <div className="space-y-12">
          {dashboards.map((dashboard, index) => (
            <div
              key={index}
              className="bg-card border border-data-text-secondary/20 rounded-lg overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="text-data-accent" size={24} />
                      <h3 className="text-2xl font-semibold text-data-text">
                        {dashboard.title}
                      </h3>
                    </div>
                    
                    <p className="text-data-text-secondary leading-relaxed">
                      {dashboard.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-data-accent font-medium">Key Metrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dashboard.metrics.map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className="px-3 py-1 bg-data-accent/10 text-data-accent text-sm rounded-full border border-data-accent/30"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-data-text-secondary">Platform:</span>
                      <span className="px-3 py-1 bg-data-text-secondary/10 text-data-text text-sm rounded">
                        {dashboard.platform}
                      </span>
                    </div>
                    
                    <a
                      href={dashboard.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-data-accent text-data-bg px-6 py-3 rounded-lg hover:bg-data-accent/90 transition-colors font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>View Dashboard</span>
                    </a>
                  </div>
                  
                  <div className="bg-data-bg/50 rounded-lg p-6 border border-data-text-secondary/20">
                    {dashboard.embedUrl ? (
                      <iframe
                        src={dashboard.embedUrl}
                        className="w-full h-64 rounded border-0"
                        title={dashboard.title}
                      />
                    ) : (
                      <div className="w-full h-64 flex items-center justify-center text-data-text-secondary">
                        <div className="text-center space-y-2">
                          <BarChart3 size={48} className="mx-auto opacity-50" />
                          <p>Dashboard Preview</p>
                          <p className="text-sm">Click "View Dashboard" to explore</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
