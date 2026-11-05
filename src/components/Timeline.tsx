import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../types';
import { DetailModal } from './DetailModal';
import { Calendar, Bookmark } from 'lucide-react';

interface TimelineProps {
  items: TimelineItem[];
  theme?: 'heritage' | 'ocean';
}

export const Timeline: React.FC<TimelineProps> = ({ items, theme = 'heritage' }) => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const isOcean = theme === 'ocean';

  return (
    <div className="relative">
      {/* Timeline track container */}
      <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:-translate-x-1/2 md:before:bg-heritage-gold/40 border-heritage-gold/40 ml-4 md:ml-0 space-y-8 md:space-y-12">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isEven ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              } group`}
            >
              {/* Central node on timeline */}
              <div
                className={`absolute -left-[25px] md:left-1/2 md:-translate-x-1/2 top-4 w-7 h-7 rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                  isOcean
                    ? 'bg-white border-heritage-ocean group-hover:scale-125 group-hover:bg-heritage-ocean group-hover:text-white shadow-md'
                    : 'bg-white border-heritage-red group-hover:scale-125 group-hover:bg-heritage-red group-hover:text-white shadow-md'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'}`} />
              </div>

              {/* Timeline Card */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] pl-6 md:pl-0 ${
                  isEven ? 'md:pl-0 md:pr-0 md:text-left' : 'md:pl-0 md:text-left'
                }`}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedItem(item)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 paper-card relative ${
                    isOcean
                      ? 'border-heritage-ocean/20 hover:border-heritage-ocean shadow-ocean hover:shadow-ocean-hover'
                      : 'border-heritage-gold/30 hover:border-heritage-red shadow-heritage hover:shadow-heritage-hover'
                  }`}
                >
                  {/* Date badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
                        isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>

                    {item.resolutionCode && (
                      <span className="text-[11px] font-semibold text-heritage-navy bg-heritage-ivory px-2.5 py-1 rounded-md border border-heritage-gold/30 line-clamp-1">
                        <Bookmark className="w-3 h-3 inline mr-1 text-heritage-goldDark" />
                        {item.resolutionCode}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-heritage-navy mb-2.5 group-hover:text-heritage-red transition-colors leading-snug">
                    {item.title}
                  </h4>

                  {/* Summary */}
                  <p className="text-sm text-heritage-muted mb-4 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Key Highlights pill list */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-gray-100">
                      {item.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="text-xs text-heritage-dark flex items-start gap-1.5">
                          <span className="text-heritage-goldDark font-bold mt-0.5">•</span>
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal for detail view */}
      {selectedItem && (
        <DetailModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          badge={selectedItem.year}
          date={selectedItem.date}
          resolutionCode={selectedItem.resolutionCode}
          summary={selectedItem.summary}
          highlights={selectedItem.highlights}
          analysis={selectedItem.analysis}
          theme={isOcean ? 'ocean' : 'heritage'}
        />
      )}
    </div>
  );
};

