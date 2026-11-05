import React from 'react';
import { motion } from 'framer-motion';
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
      
      {/* Subtle radial ambient gradients with floating pulse */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-heritage-red/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-40 right-10 w-[400px] h-[300px] bg-heritage-gold/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-heritage-ocean/10 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Historical Flag / Sub-badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-heritage-red/10 border border-heritage-red/30 shadow-sm hover:scale-105 transition-transform"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-heritage-red animate-ping" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-heritage-red">
              Học phần Lịch Sử Đảng Cộng Sản Việt Nam • VNR202
            </span>
          </motion.div>

          {/* Primary Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-heritage-navy tracking-tight leading-tight"
          >
            LỊCH SỬ ĐẢNG <br />
            <span className="text-heritage-red inline-block mt-1 drop-shadow-sm">CỘNG SẢN VIỆT NAM</span>
          </motion.h1>

          {/* Subtitle with Antique Gold flourishes */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 my-2"
          >
            <div className="h-[1px] w-12 sm:w-24 bg-heritage-gold" />
            <div className="w-2.5 h-2.5 rotate-45 bg-heritage-gold shadow-sm animate-spin-slow" />
            <div className="h-[1px] w-12 sm:w-24 bg-heritage-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-heritage-dark max-w-3xl mx-auto leading-snug"
          >
            ĐẠI HỘI IX (2001) – ĐẠI HỘI X (2006) <br className="hidden sm:inline" />
            <span className="text-heritage-ocean">VÀ ĐỊNH HƯỚNG PHÁT TRIỂN KINH TẾ BIỂN VIỆT NAM</span>
          </motion.h2>

          {/* Concise Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-heritage-muted text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed pt-2"
          >
            Tìm hiểu những bước phát triển trong tư duy lý luận, đường lối đổi mới và quá trình triển khai thực hiện các chủ trương của Đảng trong giai đoạn 2001–2010.
          </motion.p>

          {/* Prominent Historical Milestone Badges with subtle floating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-4 pb-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-heritage-gold/40 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <Calendar className="w-4 h-4 text-heritage-red" />
              <span className="text-xs font-bold text-heritage-navy">Đại hội IX – 2001</span>
              <span className="text-[10px] text-heritage-muted bg-heritage-ivory px-1.5 py-0.5 rounded font-semibold">
                KTTT XHCN
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-heritage-gold/40 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <Calendar className="w-4 h-4 text-heritage-red" />
              <span className="text-xs font-bold text-heritage-navy">Đại hội X – 2006</span>
              <span className="text-[10px] text-heritage-muted bg-heritage-ivory px-1.5 py-0.5 rounded font-semibold">
                Đổi mới toàn diện
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-heritage-ocean/40 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <Compass className="w-4 h-4 text-heritage-ocean animate-spin-slow" />
              <span className="text-xs font-bold text-heritage-navy">Chiến lược biển – 2007</span>
              <span className="text-[10px] text-heritage-ocean font-semibold bg-heritage-oceanMist px-1.5 py-0.5 rounded">
                NQ 09-NQ/TW
              </span>
            </div>
          </motion.div>

          {/* Call to Action Buttons with whileHover & whileTap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('overview')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-heritage-red hover:bg-heritage-deepRed text-white font-bold text-base transition-colors shadow-heritage hover:shadow-heritage-hover"
            >
              <BookOpen className="w-5 h-5" />
              <span>Bắt đầu học</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('congress-ix')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-heritage-ivoryLight hover:bg-white text-heritage-navy font-bold text-base transition-colors border border-heritage-gold/50 shadow-sm hover:border-heritage-red hover:text-heritage-red"
            >
              <span>Khám phá nội dung</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenGame}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-heritage-ivoryLight text-heritage-red font-bold text-sm transition-colors border-2 border-heritage-gold/50 shadow-sm hover:border-heritage-red group"
            >
              <Gamepad2 className="w-4 h-4 text-heritage-red group-hover:scale-125 transition-transform" />
              <span>Trò chơi ôn tập</span>
            </motion.button>
          </motion.div>

        </div>

        {/* Featured Visual Hero Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-14">
          
          {/* Card 1: Hoi truong Ba Dinh */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl overflow-hidden border border-heritage-gold/40 shadow-heritage bg-white transition-all duration-300"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/badinh_hall.jpg"
                alt="Hội trường Ba Đình, Hà Nội – Không gian lịch sử tổ chức Đại hội Đảng IX và X"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-heritage-red/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20 shadow">
                Lịch sử Đảng (2001–2010)
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="font-heading font-bold text-lg leading-snug group-hover:text-heritage-goldLight transition-colors">
                  Hội trường Ba Đình, Thủ đô Hà Nội
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  Không gian lịch sử nơi diễn ra Đại hội đại biểu toàn quốc lần thứ IX và lần thứ X
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Vinh Ha Long & Bien Dao */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl overflow-hidden border border-heritage-ocean/40 shadow-ocean bg-white transition-all duration-300"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/hero_halong.jpg"
                alt="Vịnh Hạ Long, Quảng Ninh – Không gian biển đảo kỳ vĩ của Tổ quốc"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-heritage-ocean/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20 shadow">
                Chiến lược Biển Việt Nam
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="font-heading font-bold text-lg leading-snug group-hover:text-heritage-goldLight transition-colors">
                  Biển Trời Quê Hương & Khát Vọng Đại Dương
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  Bờ biển dài hơn 3.260 km – Định hướng đưa Việt Nam thành quốc gia mạnh về biển, giàu từ biển
                </p>
              </div>
            </div>
          </motion.div>

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
