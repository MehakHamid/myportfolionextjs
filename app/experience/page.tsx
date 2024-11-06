import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Customer Service Executive (CSE)",
      company: "Samsung MRM",
      years: "2 Years",
      description: "In this role, I developed strong problem-solving and communication skills by assisting customers with various technical issues and inquiries. I aimed to provide solutions promptly, ensuring that customers received the best possible support and guidance. I also learned to work efficiently under pressure and became adept at resolving conflicts, handling sensitive issues with professionalism, and gaining valuable insight into customer experience enhancement.",
    },
    {
      role: "Network Coordinator",
      company: "Tri-Angels Electronics",
      years: "3 Years",
      description: "As a Network Coordinator, I was responsible for managing and maintaining a seamless communication channel between our service centers and the head office. I coordinated resources, optimized service delivery processes, and ensured that the service network met high standards of operation. My role involved constant communication with Customer Care Officers (CCOs), facilitating efficient troubleshooting and service execution, and identifying areas for operational improvement.",
    },
    {
      role: "Assistant Service Manager (ASM)",
      company: "Tri-Angels Electronics",
      years: "currently work here",
      description: "In my role as ASM, I supervised service operations and led a team of Customer Care Officers (CCOs), ensuring high-quality service delivery and customer satisfaction. I prepared and presented performance reports, handled pricing and forecasting for parts, and developed strategies to improve service efficiency. I also supported the training and development of team members, fostering a collaborative and performance-oriented environment that contributed to achieving the company’s service goals.",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Experience</h1>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-600">{exp.role}</h2>
            <p className="text-gray-600 italic mb-1">{exp.company} - {exp.years}</p>
            <p className="text-gray-700 mt-2 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
