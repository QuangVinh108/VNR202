import React from 'react';

interface SectionHeaderProps {
  romanNumber?: string;
  badge: string;
  title: string;
  subtitle?: string;
  theme?: 'heritage' | 'ocean';
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  romanNumber,
  badge,
  title,
  subtitle,
  theme = 'heritage',
  align = 'center'
}) => {
  const isOcean = theme === 'ocean';

  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Badge with Roman numeral or category pill */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border shadow-sm ${
        isOcean 
          ? 'bg-heritage-ocean/10 text-heritage-ocean border-heritage-ocean/30' 
          : 'bg-heritage-red/10 text-heritage-red border-heritage-red/30'
      }`}>
        {romanNumber && (
          romanNumber.length <= 3 ? (
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold shrink-0 ${
              isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'
            }`}>
              {romanNumber}
            </span>
          ) : (
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] text-white font-bold tracking-wider shrink-0 whitespace-nowrap ${
              isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'
            }`}>
              {romanNumber}
            </span>
          )
        )}
        {!romanNumber && (
          <span className={`w-2 h-2 rounded-full shrink-0 animate-pulse ${
            isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'
          }`} />
        )}
        <span className="whitespace-nowrap font-bold">{badge}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heritage-navy leading-tight tracking-tight max-w-4xl mx-auto">
        {title}
      </h2>

      {/* Elegant Divider Line with Gold Diamond */}
      <div className={`flex items-center gap-3 my-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className={`h-[1px] w-12 sm:w-20 ${isOcean ? 'bg-heritage-ocean/40' : 'bg-heritage-gold'}`} />
        <div className={`w-2 h-2 rotate-45 ${isOcean ? 'bg-heritage-ocean' : 'bg-heritage-gold'}`} />
        <div className={`h-[1px] w-12 sm:w-20 ${isOcean ? 'bg-heritage-ocean/40' : 'bg-heritage-gold'}`} />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-heritage-muted text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

