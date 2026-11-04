import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowRight, Landmark, Compass, Target, Sparkles, BookOpen } from 'lucide-react';

export const ConclusionSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "ĐẠI HỘI IX (2001)",
      subtitle: "Xác lập mô hình & Thể chế KTTT XHCN",
      icon: Landmark,
      color: "red",
      content: "Phát triển nhận thức lý luận đột phá về mô hình kinh tế thị trường định hướng XHCN; thông qua Chiến lược 2001–2010 và định hình con đường quá độ lên CNXH phù hợp với kỷ nguyên mới."
    },
    {
      step: "02",
      title: "ĐẠI HỘI X (2006)",
      subtitle: "Đổi mới toàn diện & Hội nhập toàn cầu",
      icon: BookOpen,
      color: "gold",
      content: "Tổng kết 20 năm đổi mới, rút ra 5 bài học lịch sử; đột phá cho phép đảng viên làm kinh tế tư nhân; chính thức gia nhập WTO và đưa đất nước thoát khỏi ngưỡng nghèo kém phát triển."
    },
    {
      step: "03",
      title: "NGHỊ QUYẾT 09 (2007)",
      subtitle: "Chiến lược biển Việt Nam đến 2020",
      icon: Compass,
      color: "ocean",
      content: "Cụ thể hóa đường lối Đại hội X; xác định kinh tế biển là nguồn lực chiến lược sống còn; đề ra mục tiêu đóng góp 53–55% GDP và 55–60% tổng kim ngạch xuất khẩu cả nước."
    },
    {
      step: "04",
      title: "MỤC TIÊU TƯƠNG LAI",
      subtitle: "Quốc gia biển mạnh & Thịnh vượng bền vững",
      icon: Target,
      color: "navy",
      content: "Hiện thực hóa khát vọng xây dựng Việt Nam thành quốc gia mạnh về biển, giàu từ biển, an toàn và phát triển bền vững theo tinh thần Nghị quyết số 36-NQ/TW (2018)."
    }
  ];

  return (
    <section id="conclusion" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <SectionHeader
        romanNumber="IV"
        badge="Tổng kết học thuật"
        title="Mối Liên Hệ Hệ Thống & Tầm Nhìn Chiến Lược"
        subtitle="Dòng chảy tư duy lý luận của Đảng Cộng sản Việt Nam qua các kỳ Đại hội: Từ xác lập nền móng kinh tế thị trường đến mở toang cánh cửa hội nhập và vươn mình ra biển lớn."
      />

      {/* Logical Progression Diagram Flow */}
      <div className="relative mb-16">
        
        {/* Connecting line for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-heritage-red via-heritage-gold to-heritage-ocean -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div
                key={st.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-heritage-gold/40 shadow-heritage hover:shadow-heritage-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-heritage-ivory border border-heritage-gold/40 text-heritage-navy font-black text-sm flex items-center justify-center">
                      {st.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-heritage-surfaceRed text-heritage-red flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-lg font-heading font-bold text-heritage-navy mb-1 leading-snug">
                    {st.title}
                  </h4>
                  <p className="text-xs font-semibold text-heritage-goldDark mb-3">
                    {st.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-heritage-muted leading-relaxed">
                    {st.content}
                  </p>
                </div>

                {!isLast && (
                  <div className="lg:hidden flex items-center justify-center pt-4 text-heritage-gold">
                    <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Academic Conclusion Manifesto Box */}
      <div className="bg-white rounded-3xl overflow-hidden border border-heritage-gold/50 shadow-heritage relative grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] overflow-hidden bg-slate-900">
          <img
            src="/images/hero_halong.jpg"
            alt="Biển trời Tổ quốc – Di sản và khát vọng vươn ra biển lớn"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-4 right-4 text-white text-xs bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-white/10">
            Hành trình đổi mới và khát vọng xây dựng non sông Việt Nam hùng cường, thịnh vượng
          </div>
        </div>

        <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-heritage-red/10 text-heritage-red text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thông Điệp Tổng Kết Chuyên Đề</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-heritage-navy leading-snug">
            Khẳng Định Bản Lĩnh & Khát Vọng Dân Tộc
          </h3>

          <p className="text-heritage-dark text-sm sm:text-base leading-relaxed text-justify">
            Đại hội IX (2001) và Đại hội X (2006) của Đảng Cộng sản Việt Nam đã tạo nên những dấu mốc phát triển nhảy vọt trong tư duy lý luận và thực tiễn cách mạng. Từ việc kiên định nền kinh tế thị trường định hướng xã hội chủ nghĩa, mở rộng khối đại đoàn kết, đến quyết sách hội nhập WTO và ban hành Chiến lược Biển Việt Nam đến năm 2020 – Đảng đã định hình con đường vững chắc đưa đất nước thoát khỏi nghèo nàn, lạc hậu, tự tin vươn mình ra biển lớn và hội nhập sâu rộng vào đời sống quốc tế.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-heritage-goldDark font-semibold">
            <span>• Hiểu lịch sử</span>
            <span>• Vững tương lai</span>
            <span>• Phát triển Việt Nam</span>
          </div>
        </div>
      </div>

    </section>
  );
};

