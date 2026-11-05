import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {/* Badge with Roman numeral or category pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border shadow-sm transition-all hover:scale-105 duration-300 ${
          isOcean 
            ? 'bg-heritage-ocean/10 text-heritage-ocean border-heritage-ocean/30 hover:border-heritage-ocean' 
            : 'bg-heritage-red/10 text-heritage-red border-heritage-red/30 hover:border-heritage-red'
        }`}
      >
        {romanNumber && (
          romanNumber.length <= 3 ? (
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold shrink-0 shadow-sm ${
              isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'
            }`}>
              {romanNumber}
            </span>
          ) : (
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] text-white font-bold tracking-wider shrink-0 whitespace-nowrap shadow-sm ${
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
      </motion.div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heritage-navy leading-tight tracking-tight max-w-4xl mx-auto">
        {title}
      </h2>

      {/* Elegant Animated Divider Line with Gold Diamond */}
      <div className={`flex items-center gap-3 my-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '4rem', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`h-[1.5px] ${isOcean ? 'bg-heritage-ocean/50' : 'bg-heritage-gold'}`}
        />
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: 45, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className={`w-2.5 h-2.5 ${isOcean ? 'bg-heritage-ocean' : 'bg-heritage-gold'} shadow-sm`}
        />
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '4rem', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`h-[1.5px] ${isOcean ? 'bg-heritage-ocean/50' : 'bg-heritage-gold'}`}
        />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-heritage-muted text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

