import React, { useState, useEffect, useRef } from 'react';
import { searchIndex } from '../data/searchIndex';
import { SearchResultItem } from '../types';
import { Search, X, ArrowRight, BookOpen, Tag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResultItem[]>(searchIndex);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setFilteredResults(searchIndex);
      return;
    }

    const matches = searchIndex.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(trimmed);
      const matchSnippet = item.snippet.toLowerCase().includes(trimmed);
      const matchTopic = item.topic.toLowerCase().includes(trimmed);
      const matchTags = item.tags.some(tag => tag.toLowerCase().includes(trimmed));
      return matchTitle || matchSnippet || matchTopic || matchTags;
    });

    setFilteredResults(matches);
  }, [query]);

  const handleSelect = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-heritage-ivoryLight rounded-2xl shadow-2xl border border-heritage-gold/50 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative p-4 sm:p-5 border-b border-heritage-gold/30 bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-heritage-red shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Tìm kiếm: WTO, Nghị quyết 09, Đại hội IX, X, Cái Mép, đất đai, GDP..."
            className="w-full bg-transparent text-base sm:text-lg text-heritage-dark placeholder-heritage-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-heritage-muted hover:text-heritage-dark hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 rounded bg-heritage-ivory border border-heritage-gold/40 text-heritage-navy hover:bg-heritage-gold/20"
          >
            ESC
          </button>
        </div>

        {/* Quick Tag Suggestions */}
        <div className="px-4 py-2.5 bg-heritage-ivory border-b border-heritage-gold/20 flex items-center gap-2 overflow-x-auto text-xs text-heritage-muted">
          <span className="font-semibold text-heritage-navy shrink-0 flex items-center gap-1">
            <Tag className="w-3 h-3" /> Gợi ý:
          </span>
          {["Đại hội IX", "Đại hội X", "Kinh tế biển", "WTO", "Nghị quyết 09", "Cái Mép", "Sinh viên"].map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-0.5 rounded-full bg-white border border-heritage-gold/30 text-heritage-dark hover:border-heritage-red hover:text-heritage-red shrink-0 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {filteredResults.length === 0 ? (
            <div className="text-center py-12 text-heritage-muted">
              <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-30 text-heritage-red" />
              <p className="text-base font-medium">Không tìm thấy nội dung phù hợp với "{query}"</p>
              <p className="text-xs mt-1">Hãy thử tìm theo các từ khóa như: Đại hội IX, Đại hội X, WTO, Cảng biển, Nghị quyết...</p>
            </div>
          ) : (
            filteredResults.map(item => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.sectionId)}
                className="group p-4 rounded-xl bg-white border border-heritage-gold/30 hover:border-heritage-red hover:shadow-md cursor-pointer transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-heritage-red/10 text-heritage-red">
                    {item.topic}
                  </span>
                  <span className="text-xs font-semibold text-heritage-red flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Chuyển đến mục <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

                <h4 className="text-base font-bold font-heading text-heritage-navy group-hover:text-heritage-red transition-colors mb-1">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-heritage-muted line-clamp-2 leading-relaxed mb-2.5">
                  {item.snippet}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-heritage-ivory text-heritage-muted px-2 py-0.5 rounded border border-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-4 py-3 bg-heritage-ivory border-t border-heritage-gold/30 flex items-center justify-between text-xs text-heritage-muted">
          <span>Tìm thấy <strong>{filteredResults.length}</strong> kết quả</span>
          <span>Nhấn vào mục bất kỳ để di chuyển đến nội dung</span>
        </div>
      </div>
    </div>
  );
};

