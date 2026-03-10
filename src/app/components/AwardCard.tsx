import { Award } from 'lucide-react';

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
}

export function AwardCard({ title, organization, date }: AwardCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-yellow-50 rounded-lg flex-shrink-0">
          <Award className="text-yellow-600" size={20} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{organization}</p>
        </div>
        <span className="text-sm text-gray-500 whitespace-nowrap">{date}</span>
      </div>
    </div>
  );
}
