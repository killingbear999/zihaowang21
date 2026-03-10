import { GraduationCap, Calendar } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  advisors?: string[];
  interests?: string[];
  program?: string;
}

export function EducationCard({ 
  institution, 
  degree, 
  period, 
  gpa, 
  advisors, 
  interests,
  program 
}: EducationCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <GraduationCap className="text-blue-600" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{institution}</h3>
          <p className="text-lg text-gray-700 mb-2">{degree}</p>
          {gpa && <p className="text-gray-600 mb-2">{gpa}</p>}
          
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <Calendar size={16} />
            <span>{period}</span>
          </div>

          {advisors && advisors.length > 0 && (
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Advisors:</span> {advisors.join(', ')}
            </p>
          )}

          {interests && interests.length > 0 && (
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Research Interests:</span> {interests.join(', ')}
            </p>
          )}

          {program && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Program:</span> {program}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
