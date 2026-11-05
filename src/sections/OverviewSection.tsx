import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowRight, BookOpen, Landmark, Ship, Layers } from 'lucide-react';

export const OverviewSection: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const topics = [
    {
      id: "congress-ix",
      themeNumber: "I",
      title: "ĐẠI HỘI IX (2001)",
      subtitle: "Xác lập mô hình Kinh tế thị trường định hướng XHCN",
      period: "Nhiệm kỳ 2001 – 2005",
      color: "red",
      icon: Landmark,
      image: "/images/badinh_hall.jpg",
      imageAlt: "Hội trường Ba Đình, Hà Nội – Không gian diễn ra Đại hội IX năm 2001",
      description: "Đại hội mở đầu thế kỷ XXI, tổng kết thế kỷ XX, thông qua Chiến lược phát triển KT-XH 10 năm và xác định con đường quá độ lên CNXH phù hợp với thực tiễn Việt Nam.",
      sections: [
        "Bối cảnh lịch sử quốc tế & trong nước",
        "6 Nội dung cơ bản của Đại hội IX",
        "Quá trình triển khai thực hiện Nghị quyết (2001–2005)",
        "Đánh giá thành tựu, hạn chế & ý nghĩa lịch sử"
      ],
      statsCount: "6 Cột mốc Timeline • 6 Luận điểm cơ bản"
    },
    {
      id: "congress-x",
      themeNumber: "II",
      title: "ĐẠI HỘI X (2006)",
      subtitle: "Đẩy mạnh toàn diện công cuộc đổi mới & Hội nhập quốc tế",
      period: "Nhiệm kỳ 2006 – 2010",
      color: "gold",
      icon: BookOpen,
      image: "/images/badinh_interior.jpg",
      imageAlt: "Khán phòng lịch sử Đại hội X – Đánh dấu 20 năm công cuộc đổi mới",
      description: "Tổng kết 20 năm đổi mới (1986–2006), rút ra 5 bài học lớn; bước ngoặt gia nhập WTO và ban hành Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam.",
      sections: [
        "Bối cảnh lịch sử & 20 năm đổi mới",
        "5 Bài học lớn sau 20 năm công cuộc đổi mới",
        "4 Nội dung phát triển trọng tâm & Đảng viên làm kinh tế",
        "Triển khai Nghị quyết, gia nhập WTO & Kết quả KT-XH"
      ],
      statsCount: "5 Bài học • 7 Nghị quyết chuyên đề • Gia nhập WTO"
    },
    {
      id: "maritime",
      themeNumber: "III",
      title: "PHÁT TRIỂN KINH TẾ BIỂN",
      subtitle: "Xây dựng quốc gia mạnh về biển, giàu từ biển",
      period: "Tầm nhìn 2020 – 2030 – 2045",
      color: "ocean",
      icon: Ship,
      image: "/images/cargo.jpg",
      imageAlt: "Tàu container MAERSK HANOI – Vận tải biển và cảng biển quốc tế",
      description: "Phát huy tiềm năng hơn 3.260 km bờ biển; thực trạng thành tựu & thách thức; 6 nhóm giải pháp chiến lược và sứ mệnh của thế hệ sinh viên hôm nay.",
      sections: [
        "Cơ sở, tiềm năng & các chủ trương lớn của Đảng",
        "Thực trạng kinh tế biển (Thành tựu vs Thách thức)",
        "6 Nhóm giải pháp chiến lược đưa VN mạnh về biển",
        "Trách nhiệm & hành động của sinh viên Việt Nam"
      ],
      statsCount: "6 Trụ cột kinh tế • Bản đồ tương tác • 6 Sứ mệnh sinh viên"
    }
  ];

  return (
    <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader
        romanNumber="TỔNG QUAN"
        badge="Khung chương trình học tập"
        title="Ba Chủ Đề Trọng Tâm Chuyên Đề"
        subtitle="Hệ thống hóa toàn bộ kiến thức theo dòng chảy lịch sử từ Đại hội IX (2001) đến Đại hội X (2006) và định hướng vươn mình ra biển lớn của dân tộc."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topics.map((topic, cardIdx) => {
          const Icon = topic.icon;
          const isOcean = topic.color === 'ocean';

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: cardIdx * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`rounded-2xl flex flex-col justify-between border transition-all duration-300 relative group overflow-hidden ${
                isOcean
                  ? 'bg-white border-heritage-ocean/30 shadow-ocean hover:shadow-ocean-hover hover:border-heritage-ocean'
                  : 'bg-white border-heritage-gold/30 shadow-heritage hover:shadow-heritage-hover hover:border-heritage-red'
              }`}
            >
              {/* Top Accent Strip */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 z-20 ${
                  isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'
                }`}
              />

              {/* Topic Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                <img
                  src={topic.image}
                  alt={topic.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Theme Number Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white shadow-md ${
                      isOcean ? 'bg-heritage-ocean' : 'bg-heritage-red'
                    }`}
                  >
                    {topic.themeNumber}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                    {topic.period}
                  </span>
                </div>

                {/* Floating Icon */}
                <div
                  className={`absolute bottom-3 right-4 w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md shadow-md ${
                    isOcean
                      ? 'bg-heritage-ocean text-white'
                      : 'bg-heritage-red text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Main Card Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-heritage-navy mb-1 group-hover:text-heritage-red transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs font-semibold text-heritage-goldDark mb-4">
                    {topic.subtitle}
                  </p>

                  {/* Sub-sections bullet points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-heritage-navy flex items-center gap-1.5 mb-2">
                      <Layers className="w-3.5 h-3.5 text-heritage-goldDark" />
                      <span>Nội dung nghiên cứu:</span>
                    </div>
                    {topic.sections.map((sec, idx) => (
                      <div key={idx} className="text-xs text-heritage-dark flex items-start gap-2">
                        <span className="text-heritage-goldDark font-bold mt-0.5">•</span>
                        <span>{sec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => scrollTo(topic.id)}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isOcean
                        ? 'bg-heritage-ocean hover:bg-heritage-oceanDeep text-white shadow-sm'
                        : 'bg-heritage-red hover:bg-heritage-deepRed text-white shadow-sm'
                    }`}
                  >
                    <span>Khám phá chủ đề {topic.themeNumber}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
