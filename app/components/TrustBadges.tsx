import { ShieldCheck, BadgePercent, Clock, Headphones } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, title: 'Verified Partners', subtitle: 'Trusted & audited worldwide' },
    { icon: BadgePercent, title: 'Best Price Guarantee', subtitle: 'Compare & save more' },
    { icon: Clock, title: 'Fast Response', subtitle: 'Quotes in minutes' },
    { icon: Headphones, title: '24/7 Support', subtitle: 'Real people, real help' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-gray-100">
      {badges.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}