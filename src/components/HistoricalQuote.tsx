import React from 'react';
import { Quote } from 'lucide-react';

interface HistoricalQuoteProps {
  quote: string;
  author?: string;
  source?: string;
  theme?: 'heritage' | 'ocean';
}

export const HistoricalQuote: React.FC<HistoricalQuoteProps> = ({
  quote,
  author,
  source,
  theme = 'heritage'
}) => {
  const isOcean = theme === 'ocean';

  return (
    <div className={`relative p-6 sm:p-8 rounded-xl border my-8 transition-all duration-300 ${
      isOcean 
        ? 'bg-heritage-oceanMist/60 border-heritage-ocean/30 text-heritage-navy' 
        : 'bg-heritage-ivoryLight border-heritage-gold/40 text-heritage-dark shadow-parchment'
    }`}>
      {/* Decorative large quotation icon watermark */}
      <Quote className={`absolute right-6 top-6 w-12 h-12 opacity-10 pointer-events-none ${
        isOcean ? 'text-heritage-ocean' : 'text-heritage-gold'
      }`} />

      {/* Quote line indicator */}
      <div className="flex items-start gap-4">
        <div className={`w-1.5 self-stretch rounded-full shrink-0 ${
          isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'
        }`} />
        <div className="space-y-2">
          <p className="font-heading italic text-lg sm:text-xl text-heritage-navy leading-relaxed">
            "{quote}"
          </p>
          {(author || source) && (
            <div className="pt-2 text-xs sm:text-sm font-medium text-heritage-muted flex flex-wrap items-center gap-2">
              {author && <span className="font-bold text-heritage-red">{author}</span>}
              {author && source && <span>—</span>}
              {source && <span className="italic">{source}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

