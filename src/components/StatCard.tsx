import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  metric: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
  theme?: 'red' | 'gold' | 'ocean' | 'navy';
}

export const StatCard: React.FC<StatCardProps> = ({
  metric,
  label,
  description,
  icon: Icon,
  badge,
  theme = 'red'
}) => {
  const getThemeStyles = () => {
    switch (theme) {
      case 'gold':
        return {
          cardBg: 'bg-heritage-ivoryLight border-heritage-gold/50 shadow-sm hover:border-heritage-gold',
          metricColor: 'text-heritage-goldDark',
          iconBg: 'bg-heritage-gold/15 text-heritage-goldDark',
          badgeBg: 'bg-heritage-gold/20 text-heritage-goldDark',
          accentLine: 'bg-heritage-gold'
        };
      case 'ocean':
        return {
          cardBg: 'bg-white border-heritage-ocean/30 shadow-ocean hover:shadow-ocean-hover hover:border-heritage-ocean',
          metricColor: 'text-heritage-ocean',
          iconBg: 'bg-heritage-ocean/10 text-heritage-ocean',
          badgeBg: 'bg-heritage-ocean/15 text-heritage-ocean',
          accentLine: 'bg-heritage-ocean'
        };
      case 'navy':
        return {
          cardBg: 'bg-white border-heritage-navy/20 shadow-sm hover:border-heritage-navy',
          metricColor: 'text-heritage-navy',
          iconBg: 'bg-heritage-navy/10 text-heritage-navy',
          badgeBg: 'bg-heritage-navy/15 text-heritage-navy',
          accentLine: 'bg-heritage-navy'
        };
      case 'red':
      default:
        return {
          cardBg: 'bg-white border-heritage-red/20 shadow-heritage hover:shadow-heritage-hover hover:border-heritage-red',
          metricColor: 'text-heritage-red',
          iconBg: 'bg-heritage-red/10 text-heritage-red',
          badgeBg: 'bg-heritage-red/15 text-heritage-red',
          accentLine: 'bg-heritage-red'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div className={`relative rounded-xl p-6 border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${styles.cardBg}`}>
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${styles.accentLine}`} />

      <div>
        <div className="flex items-center justify-between mb-4">
          {Icon && (
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${styles.iconBg}`}>
              <Icon className="w-6 h-6" />
            </div>
          )}
          {badge && (
            <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${styles.badgeBg}`}>
              {badge}
            </span>
          )}
        </div>

        <div className={`text-3xl sm:text-4xl font-heading font-black tracking-tight mb-2 ${styles.metricColor}`}>
          {metric}
        </div>

        <h4 className="text-base sm:text-lg font-semibold text-heritage-navy mb-2 leading-snug">
          {label}
        </h4>
      </div>

      {description && (
        <p className="text-sm text-heritage-muted font-normal leading-relaxed pt-2 border-t border-gray-100">
          {description}
        </p>
      )}
    </div>
  );
};

