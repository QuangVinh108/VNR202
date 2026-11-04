import React, { useEffect } from 'react';
import { X, Calendar, BookMarked, Sparkles, FileText } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  date?: string;
  resolutionCode?: string;
  summary?: string;
  highlights?: string[];
  analysis?: string;
  details?: string[];
  theme?: 'heritage' | 'ocean';
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title,
  badge,
  date,
  resolutionCode,
  summary,
  highlights,
  analysis,
  details,
  theme = 'heritage'
}) => {
  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isOcean = theme === 'ocean';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-heritage-ivoryLight rounded-2xl shadow-2xl border border-heritage-gold/40 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className={`p-6 border-b flex items-start justify-between gap-4 text-white ${
          isOcean ? 'bg-heritage-oceanDeep' : 'bg-heritage-deepRed'
        }`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {badge && (
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 text-white">
                  {badge}
                </span>
              )}
              {date && (
                <span className="inline-flex items-center gap-1 text-xs text-white/80 bg-black/20 px-2 py-0.5 rounded-md">
                  <Calendar className="w-3.5 h-3.5" />
                  {date}
                </span>
              )}
              {resolutionCode && (
                <span className="text-xs text-heritage-goldLight font-medium">
                  • {resolutionCode}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-heritage-dark text-base leading-relaxed">
          {/* Summary */}
          {summary && (
            <div className={`p-4 rounded-xl border font-medium ${
              isOcean ? 'bg-heritage-oceanMist/50 border-heritage-ocean/20 text-heritage-navy' : 'bg-white border-heritage-gold/30 text-heritage-dark'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-heritage-goldDark mb-1">
                <FileText className="w-4 h-4" />
                <span>Tóm tắt nội dung</span>
              </div>
              <p className="text-sm sm:text-base">{summary}</p>
            </div>
          )}

          {/* Details / Bullets */}
          {details && details.length > 0 && (
            <div>
              <h4 className="text-base font-bold text-heritage-navy flex items-center gap-2 mb-3">
                <BookMarked className={`w-4 h-4 ${isOcean ? 'text-heritage-ocean' : 'text-heritage-red'}`} />
                <span>Nội dung cốt lõi và luận điểm:</span>
              </h4>
              <ul className="space-y-2.5 pl-2">
                {details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base">
                    <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="bg-heritage-ivory/80 rounded-xl p-4 border border-heritage-gold/30">
              <h4 className="text-sm font-bold uppercase tracking-wider text-heritage-navy mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-heritage-goldDark" />
                <span>Điểm nhấn trọng tâm:</span>
              </h4>
              <ul className="space-y-2">
                {highlights.map((h, i) => (
                  <li key={i} className="text-sm flex items-start gap-2 text-heritage-dark">
                    <span className="text-heritage-goldDark font-bold">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Analytical Commentary */}
          {analysis && (
            <div className={`p-5 rounded-xl border ${
              isOcean 
                ? 'bg-blue-50/70 border-blue-200 text-blue-950' 
                : 'bg-red-50/70 border-red-200 text-red-950'
            }`}>
              <div className="flex items-center gap-2 mb-2 font-bold text-sm uppercase tracking-wider">
                <span className={`w-2 h-2 rounded-full ${isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'}`} />
                <span className={isOcean ? 'text-heritage-ocean' : 'text-heritage-red'}>
                  Phân tích lý luận & Ý nghĩa thực tiễn
                </span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed italic">
                "{analysis}"
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-heritage-ivory border-t border-heritage-gold/20 flex justify-end">
          <button
            onClick={onClose}
            className={`px-6 py-2.5 rounded-lg text-white font-medium text-sm transition-colors shadow-sm ${
              isOcean ? 'bg-heritage-ocean hover:bg-heritage-oceanDeep' : 'bg-heritage-red hover:bg-heritage-deepRed'
            }`}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

