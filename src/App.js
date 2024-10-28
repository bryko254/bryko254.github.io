import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Brian Koech</h1>
          <h2 className="text-2xl mb-6">DevOps Engineer & Full Stack Developer</h2>
          <div className="flex space-x-4">
            <a href="mailto:your.email@example.com" className="flex items-center hover:text-blue-200">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a href="https://github.com/yourusername" className="flex items-center hover:text-blue-200">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/brian-koech-b75a93174/" className="flex items-center hover:text-blue-200">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700 mb-4">
              Experienced DevOps Engineer with 6+ years of expertise in building and maintaining scalable infrastructure,
              implementing CI/CD pipelines, and developing full-stack applications. Passionate about automation,
              cloud technologies, and creating efficient development workflows.
            </p>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">DevOps & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'GitLab CI/CD', 'Zabbix', 'Python', 'Security', 'Automation'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                {['REST APIs', 'Frontend Development', 'Backend Development', 'Database Design', 'UI/UX', 'Keycloak'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Navicus360 - Freight Management System</h3>
              <p className="text-gray-600 mb-4">
                Led the development of a comprehensive freight management system featuring:
                <ul className="list-disc list-inside mt-2">
                  <li>Real-time cargo tracking with GPS integration</li>
                  <li>Automated shipment documentation workflow</li>
                  <li>Interactive dashboard for freight analytics</li>
                  <li>Multi-carrier integration system</li>
                  <li>Custom reporting and analytics tools</li>
                </ul>
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">MongoDB</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Docker</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <a href="https://navicus360.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View Project</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Telkes - Solar Energy Platform</h3>
              <p className="text-gray-600 mb-4">
                Developed a comprehensive solar energy management platform featuring:
                <ul className="list-disc list-inside mt-2">
                  <li>Real-time solar panel performance monitoring</li>
                  <li>Energy consumption analytics dashboard</li>
                  <li>ROI calculator for solar installations</li>
                  <li>Automated maintenance scheduling system</li>
                  <li>Integration with weather APIs for optimization</li>
                </ul>
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Vue.js</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Python</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">PostgreSQL</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">AWS</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <a href="https://www.telkes.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View Project</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">KEBS Information Management System</h3>
              <p className="text-gray-600 mb-4">
                Engineered a comprehensive information management system with:
                <ul className="list-disc list-inside mt-2">
                  <li>Automated workflow management system</li>
                  <li>Document versioning and tracking</li>
                  <li>Role-based access control system</li>
                  <li>Advanced search and filtering capabilities</li>
                  <li>Integration with existing government systems</li>
                </ul>
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Python</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Django</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">PostgreSQL</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Docker</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">RabbitMQ</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Celery</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">BookayFlorists - E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Developed a comprehensive flower shop management system featuring:
                <ul className="list-disc list-inside mt-2">
                  <li>User authentication and role-based access control</li>
                  <li>Product catalog with category management</li>
                  <li>Integrated blogging platform for floristry content</li>
                  <li>Admin dashboard for inventory management</li>
                  <li>Supabase backend integration for real-time updates</li>
                </ul>
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">HTML5</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">CSS3</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">JavaScript</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Supabase</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Bootstrap</span>
                </div>
                <div className="flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  <a href="https://github.com/bryko254/flowershop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View Source Code</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">DevOps Engineer</h3>
              <p className="text-gray-600">Atlancis Technologies Ltd | 2018 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Implemented CI/CD pipelines using GitLab</li>
                <li>Developed and maintained REST APIs</li>
                <li>Managed containerization using Docker</li>
                <li>Implemented monitoring solutions with Zabbix</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">IT Specialist</h3>
              <p className="text-gray-600">Bomet County Government | 2018</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Configured hardware and software systems</li>
                <li>Implemented technical procedures and standards</li>
                <li>Managed system documentation</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Brian Koech. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="mailto:your.email@example.com" className="hover:text-blue-400">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/yourusername" className="hover:text-blue-400">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
