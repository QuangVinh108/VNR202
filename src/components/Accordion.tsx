import React, { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  theme?: 'heritage' | 'ocean';
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  allowMultiple = false,
  theme = 'heritage'
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : [items[0]?.id || '']
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  const isOcean = theme === 'ocean';

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? isOcean
                  ? 'bg-white border-heritage-ocean shadow-ocean'
                  : 'bg-white border-heritage-red shadow-heritage'
                : 'bg-heritage-ivoryLight/70 border-heritage-gold/30 hover:border-heritage-gold hover:bg-white'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isOpen
                      ? isOcean
                        ? 'bg-heritage-ocean text-white'
                        : 'bg-heritage-red text-white'
                      : 'bg-heritage-ivory text-heritage-navy border border-heritage-gold/30'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3
                      className={`text-base sm:text-lg font-bold font-heading transition-colors ${
                        isOpen
                          ? isOcean
                            ? 'text-heritage-ocean'
                            : 'text-heritage-red'
                          : 'text-heritage-navy'
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isOcean
                            ? 'bg-heritage-ocean/10 text-heritage-ocean'
                            : 'bg-heritage-red/10 text-heritage-red'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.subtitle && (
                    <p className="text-xs sm:text-sm text-heritage-muted line-clamp-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? isOcean
                      ? 'bg-heritage-ocean/10 text-heritage-ocean rotate-180'
                      : 'bg-heritage-red/10 text-heritage-red rotate-180'
                    : 'text-heritage-muted hover:bg-heritage-ivory'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                className={`px-5 sm:px-6 pb-6 pt-2 border-t text-heritage-dark text-sm sm:text-base leading-relaxed ${
                  isOcean ? 'border-heritage-ocean/15' : 'border-heritage-red/10'
                }`}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

