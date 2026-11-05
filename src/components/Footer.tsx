import React from 'react';

interface FooterProps {
  onOpenGame?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGame }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-heritage-navy text-white pt-16 pb-14 border-t-4 border-heritage-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Platform Overview */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-heritage-red flex items-center justify-center text-white border border-heritage-gold/50 shadow-md">
                <span className="font-heading font-black text-sm">CPV</span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-heritage-goldLight">
                  Nền tảng học tập số hóa
                </span>
                <span className="block text-lg font-heading font-bold text-white">
                  Lịch Sử Đảng Cộng Sản Việt Nam (VNR202)
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-lg">
              Chuyên đề: Phân tích nội dung cơ bản Đại hội đại biểu toàn quốc lần thứ IX (2001) và lần thứ X (2006), quá trình triển khai thực hiện các nghị quyết và định hướng chiến lược đưa Việt Nam trở thành quốc gia mạnh về biển, giàu từ biển.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-heritage-goldLight font-heading border-b border-white/10 pb-2">
              Mục Lục Chuyên Đề
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <button
                  onClick={() => scrollTo('overview')}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Tổng quan 3 chủ đề trọng tâm
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('congress-ix')}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Đại hội IX (2001) & 6 Nội dung cơ bản
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('congress-x')}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Đại hội X (2006) & 5 Bài học lớn
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('maritime')}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Chiến lược Kinh tế Biển Việt Nam
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('student-role')}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Trách nhiệm của Thế hệ Trẻ
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGame}
                  className="hover:text-heritage-gold transition-colors text-left"
                >
                  Trò chơi ôn tập
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Standards & Citations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-heritage-goldLight font-heading border-b border-white/10 pb-2">
              Nguồn Trích Dẫn & Tài Liệu
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Nội dung biên soạn dựa trên giáo trình chuẩn môn Lịch sử Đảng Cộng sản Việt Nam, văn kiện Đại hội Đảng toàn quốc lần thứ IX, X và các nghị quyết Trung ương liên quan.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
