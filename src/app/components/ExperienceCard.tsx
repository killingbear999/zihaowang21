import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  organization: string;
  position: string;
  location: string;
  period: string;
  advisors?: string[];
  responsibilities: string[];
}

export function ExperienceCard({ 
  organization, 
  position, 
  location, 
  period, 
  advisors,
  responsibilities 
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-50 rounded-lg flex-shrink-0">
          <Briefcase className="text-purple-600" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{organization}</h3>
          <p className="text-lg text-gray-700 mb-1">{position}</p>
          <p className="text-gray-600 text-sm mb-2">{location}</p>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <Calendar size={16} />
            <span>{period}</span>
          </div>

          {advisors && advisors.length > 0 && (
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-medium">Advisors:</span> {advisors.join(', ')}
            </p>
          )}

          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
