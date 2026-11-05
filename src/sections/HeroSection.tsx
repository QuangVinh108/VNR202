import React from 'react';
import { ArrowRight, BookOpen, Compass, Calendar, ChevronDown, Gamepad2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenGame?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGame }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 overflow-hidden dong-son-pattern border-b border-heritage-gold/30">
      
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-heritage-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[400px] h-[300px] bg-heritage-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Historical Flag / Sub-badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-heritage-red/10 border border-heritage-red/30 shadow-sm animate-fade-in">
            <span className="w-2.5 h-2.5 rounded-full bg-heritage-red animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-heritage-red">
              Học phần Lịch Sử Đảng Cộng Sản Việt Nam • VNR202
            </span>
          </div>

          {/* Primary Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-heritage-navy tracking-tight leading-tight">
            LỊCH SỬ ĐẢNG <br />
            <span className="text-heritage-red inline-block mt-1">CỘNG SẢN VIỆT NAM</span>
          </h1>

          {/* Subtitle with Antique Gold flourishes */}
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="h-[1px] w-12 sm:w-24 bg-heritage-gold" />
            <div className="w-2 h-2 rotate-45 bg-heritage-gold" />
            <div className="h-[1px] w-12 sm:w-24 bg-heritage-gold" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-heritage-dark max-w-3xl mx-auto leading-snug">
            ĐẠI HỘI IX (2001) – ĐẠI HỘI X (2006) <br className="hidden sm:inline" />
            <span className="text-heritage-ocean">VÀ ĐỊNH HƯỚNG PHÁT TRIỂN KINH TẾ BIỂN VIỆT NAM</span>
          </h2>

          {/* Concise Description */}
          <p className="text-heritage-muted text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            Tìm hiểu những bước phát triển trong tư duy lý luận, đường lối đổi mới và quá trình triển khai thực hiện các chủ trương của Đảng trong giai đoạn 2001–2010.
          </p>

          {/* Prominent Historical Milestone Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 pb-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-heritage-gold/40 shadow-sm">
              <Calendar className="w-4 h-4 text-heritage-red" />
              <span className="text-xs font-bold text-heritage-navy">Đại hội IX – 2001</span>
              <span className="text-[10px] text-heritage-muted bg-heritage-ivory px-1.5 py-0.5 rounded">
                KTTT XHCN
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-heritage-gold/40 shadow-sm">
              <Calendar className="w-4 h-4 text-heritage-red" />
              <span className="text-xs font-bold text-heritage-navy">Đại hội X – 2006</span>
              <span className="text-[10px] text-heritage-muted bg-heritage-ivory px-1.5 py-0.5 rounded">
                Đổi mới toàn diện
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-heritage-ocean/40 shadow-sm">
              <Compass className="w-4 h-4 text-heritage-ocean" />
              <span className="text-xs font-bold text-heritage-navy">Chiến lược biển – 2007</span>
              <span className="text-[10px] text-heritage-ocean font-semibold bg-heritage-oceanMist px-1.5 py-0.5 rounded">
                NQ 09-NQ/TW
              </span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => scrollTo('overview')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-heritage-red hover:bg-heritage-deepRed text-white font-bold text-base transition-all duration-300 shadow-heritage hover:shadow-heritage-hover hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              <span>Bắt đầu học</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('congress-ix')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-heritage-ivoryLight hover:bg-white text-heritage-navy font-bold text-base transition-all duration-300 border border-heritage-gold/50 shadow-sm hover:border-heritage-red hover:text-heritage-red hover:-translate-y-0.5"
            >
              <span>Khám phá nội dung</span>
            </button>

            <button
              onClick={onOpenGame}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-heritage-ivoryLight text-heritage-red font-bold text-sm transition-all duration-300 border-2 border-heritage-gold/50 shadow-sm hover:border-heritage-red hover:-translate-y-0.5 group"
            >
              <Gamepad2 className="w-4 h-4 text-heritage-red group-hover:scale-110 transition-transform" />
              <span>Trò chơi ôn tập</span>
            </button>
          </div>

        </div>

        {/* Featured Visual Hero Cards (Historical Ba Dinh Hall & Ha Long Bay) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-14">
          
          {/* Card 1: Hoi truong Ba Dinh */}
          <div className="group relative rounded-2xl overflow-hidden border border-heritage-gold/40 shadow-heritage bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/badinh_hall.jpg"
                alt="Hội trường Ba Đình, Hà Nội – Không gian lịch sử tổ chức Đại hội Đảng IX và X"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-heritage-red/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                Lịch sử Đảng (2001–2010)
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="font-heading font-bold text-lg leading-snug">
                  Hội trường Ba Đình, Thủ đô Hà Nội
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  Không gian lịch sử nơi diễn ra Đại hội đại biểu toàn quốc lần thứ IX và lần thứ X
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Vinh Ha Long & Bien Dao */}
          <div className="group relative rounded-2xl overflow-hidden border border-heritage-ocean/40 shadow-ocean bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/hero_halong.jpg"
                alt="Vịnh Hạ Long, Quảng Ninh – Không gian biển đảo kỳ vĩ của Tổ quốc"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-heritage-ocean/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                Chiến lược Biển Việt Nam
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="font-heading font-bold text-lg leading-snug">
                  Biển Trời Quê Hương & Khát Vọng Đại Dương
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  Bờ biển dài hơn 3.260 km – Định hướng đưa Việt Nam thành quốc gia mạnh về biển, giàu từ biển
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom subtle scroll invitation */}
        <div className="text-center pt-12">
          <button
            onClick={() => scrollTo('overview')}
            className="inline-flex flex-col items-center text-xs font-semibold text-heritage-muted hover:text-heritage-red transition-colors group"
          >
            <span className="mb-1">Cuộn xuống để khám phá bài giảng</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-heritage-goldDark group-hover:text-heritage-red" />
          </button>
        </div>

      </div>
    </section>
  );
};
