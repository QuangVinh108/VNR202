import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { MaritimeMapExplorer } from '../components/MaritimeMapExplorer';
import { HistoricalQuote } from '../components/HistoricalQuote';
import {
  maritimePotentials,
  maritimeResolutions,
  maritimeReality,
  strategicSolutions,
  studentResponsibilities
} from '../data/maritimeEconomy';
import {
  Compass,
  Ship,
  Fish,
  Palmtree,
  Zap,
  Anchor,
  TrendingUp,
  Cpu,
  ShieldAlert,
  GraduationCap,
  Network,
  CheckCircle2,
  AlertOctagon,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const MaritimeSection: React.FC = () => {

  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-heritage-ocean" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-heritage-ocean" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-heritage-ocean" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-heritage-ocean" />;
      case 'Network': return <Network className="w-6 h-6 text-heritage-ocean" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-heritage-ocean" />;
      case 'Ship': return <Ship className="w-5 h-5 text-heritage-goldDark" />;
      case 'Fish': return <Fish className="w-5 h-5 text-heritage-goldDark" />;
      case 'Palmtree': return <Palmtree className="w-5 h-5 text-heritage-goldDark" />;
      case 'Zap': return <Zap className="w-5 h-5 text-heritage-goldDark" />;
      default: return <Compass className="w-5 h-5 text-heritage-goldDark" />;
    }
  };

  return (
    <section id="maritime" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <SectionHeader
        romanNumber="III"
        badge="Chiến lược quốc gia"
        theme="ocean"
        title="Phát Triển Kinh Tế Biển Việt Nam"
        subtitle="Hiện thực hóa mục tiêu đưa nước ta trở thành quốc gia mạnh về biển, giàu từ biển; bảo vệ toàn vẹn chủ quyền biển đảo thiêng liêng của Tổ quốc."
      />

      {/* Quote Banner */}
      <HistoricalQuote
        quote="Đến năm 2020, phấn đấu đưa nước ta trở thành quốc gia mạnh về biển, làm giàu từ biển, bảo đảm vững chắc chủ quyền, quyền chủ quyền quốc gia trên biển, đảo, góp phần quan trọng trong sự nghiệp công nghiệp hoá, hiện đại hoá, làm cho đất nước giàu mạnh."
        author="Nghị quyết số 09-NQ/TW"
        source="Hội nghị lần thứ 4 Ban Chấp hành Trung ương Đảng khóa X (09/02/2007)"
        theme="ocean"
      />

      {/* PHẦN A: TIỀM NĂNG & LỢI THẾ BIỂN VIỆT NAM (BẢN ĐỒ TƯƠNG TÁC + 6 LỢI THẾ) */}
      <div id="maritime-potentials" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-6 bg-heritage-ocean rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            A. Tiềm Năng Và Lợi Thế Biển Việt Nam
          </h3>
        </div>

        {/* 6 Lợi thế lớn cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {maritimePotentials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-heritage-ocean/20 shadow-ocean hover:shadow-ocean-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-heritage-oceanMist flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <span className="text-xs font-bold text-heritage-ocean bg-heritage-oceanMist/80 px-2.5 py-1 rounded-full border border-heritage-ocean/20">
                  {item.value}
                </span>
              </div>

              <h4 className="text-lg font-heading font-bold text-heritage-navy mb-2">
                {item.title}
              </h4>

              <p className="text-xs sm:text-sm text-heritage-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive SVG Vietnam Coastal Map Component */}
        <MaritimeMapExplorer />
      </div>

      {/* PHẦN B: CHỦ TRƯƠNG PHÁT TRIỂN KINH TẾ BIỂN CỦA ĐẢNG */}
      <div id="maritime-policy" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-6 bg-heritage-ocean rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            B. Chủ Trương Phát Triển Kinh Tế Biển Qua Các Kỳ Đại Hội
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {maritimeResolutions.map((res, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-heritage-ocean/30 shadow-ocean flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-heritage-ocean to-heritage-gold" />

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-heritage-ocean bg-heritage-oceanMist px-2.5 py-1 rounded-full inline-block mb-3">
                  {res.period}
                </span>
                <h4 className="text-lg font-heading font-bold text-heritage-navy mb-3 leading-snug">
                  {res.title}
                </h4>
                <p className="text-sm text-heritage-dark leading-relaxed">
                  {res.content}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 text-xs font-semibold text-heritage-ocean flex items-center gap-1">
                <span>Định hướng chiến lược quốc gia</span>
                <Sparkles className="w-3.5 h-3.5 text-heritage-goldDark" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PHẦN C: THỰC TRẠNG PHÁT TRIỂN KINH TẾ BIỂN (THÀNH TỰU VS THÁCH THỨC ĐỐI LẬP) */}
      <div id="maritime-reality" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-6 bg-heritage-ocean rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            C. Thực Trạng Phát Triển Kinh Tế Biển Việt Nam
          </h3>
        </div>
        <p className="text-sm text-heritage-muted mb-8 max-w-3xl">
          Đánh giá khách quan, toàn diện giữa những thành tựu to lớn đã đạt được và những thách thức, nút thắt cần giải tỏa.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Cột 1: THÀNH TỰU ĐẠT ĐƯỢC */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-300 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-emerald-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Mặt tích cực & Kết quả
                </span>
                <h4 className="text-xl font-heading font-bold text-heritage-navy">
                  Thành Tựu Nổi Bật Đã Đạt Được
                </h4>
              </div>
            </div>

            <div className="space-y-4">
              {maritimeReality.achievements.map((ach, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <h5 className="text-sm font-bold text-emerald-950 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>{ach.sector}</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-heritage-dark leading-relaxed">
                    {ach.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cột 2: HẠN CHẾ VÀ THÁCH THỨC */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-300 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-rose-100">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  Tồn tại & Thách thức
                </span>
                <h4 className="text-xl font-heading font-bold text-heritage-navy">
                  Hạn Chế Cần Giải Quyết Cấp Bách
                </h4>
              </div>
            </div>

            <div className="space-y-4">
              {maritimeReality.challenges.map((chl, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                  <h5 className="text-sm font-bold text-rose-950 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-600" />
                    <span>{chl.sector}</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-heritage-dark leading-relaxed">
                    {chl.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* PHẦN D: SÁU NHÓM GIẢI PHÁP CHIẾN LƯỢC */}
      <div id="maritime-solutions" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-6 bg-heritage-ocean rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            D. Sáu Nhóm Giải Pháp Đưa Việt Nam Trở Thành Quốc Gia Mạnh Về Biển, Giàu Từ Biển
          </h3>
        </div>
        <p className="text-sm text-heritage-muted mb-8 max-w-3xl">
          Hệ thống giải pháp đồng bộ kết hợp kinh tế, khoa học công nghệ, môi trường, nguồn nhân lực, thể chế và quốc phòng an ninh biển đảo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategicSolutions.map((sol, index) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-ocean/30 shadow-ocean hover:shadow-ocean-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with icon & index badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-heritage-oceanMist flex items-center justify-center shrink-0">
                      {getIcon(sol.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-heritage-ocean">
                        Giải pháp chiến lược {index + 1}
                      </span>
                      <h4 className="text-lg sm:text-xl font-heading font-bold text-heritage-navy leading-snug">
                        {sol.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-sm text-heritage-muted font-medium mb-4 leading-relaxed">
                  {sol.description}
                </p>

                {/* Specific Measures List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-heritage-navy block">
                    Biện pháp cụ thể:
                  </span>
                  <ul className="space-y-2">
                    {sol.measures.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                        <span className="text-heritage-ocean font-bold mt-0.5">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Real world practical example & significance */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                {sol.realWorldExample && (
                  <div className="p-3.5 rounded-xl bg-heritage-oceanMist/60 border border-heritage-ocean/20 text-xs sm:text-sm text-heritage-navy leading-relaxed">
                    <strong className="text-heritage-ocean block mb-1 uppercase tracking-wider text-[11px]">
                      Ví dụ thực tiễn:
                    </strong>
                    {sol.realWorldExample}
                  </div>
                )}

                <div className="text-xs text-heritage-muted italic">
                  <strong>Ý nghĩa:</strong> {sol.significance}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PHẦN E: TRÁCH NHIỆM CỦA SINH VIÊN (INSPIRATIONAL AREA) */}
      <div id="student-role" className="scroll-mt-24">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-heritage-navy via-heritage-oceanDeep to-heritage-navy text-white shadow-2xl border border-heritage-gold/40 relative overflow-hidden">
          
          {/* Subtle star / pattern watermark */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-heritage-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-heritage-gold/50 text-heritage-goldLight text-xs font-bold uppercase tracking-widest mb-4">
              <HeartHandshake className="w-4 h-4" />
              <span>Sứ mệnh & Hành động của tuổi trẻ</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight mb-4">
              Thế Hệ Trẻ Hôm Nay – Trách Nhiệm Với Biển Đảo Quê Hương
            </h3>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Sinh viên là lực lượng trẻ tiên phong, mang trong mình ngọn lửa nhiệt huyết tri thức và khát vọng cống hiến bảo vệ, dựng xây non sông biển trời Tổ quốc.
            </p>
          </div>

          {/* 6 Responsibilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {studentResponsibilities.map((resp, i) => (
              <div
                key={resp.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-heritage-gold hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-heritage-gold text-heritage-navy font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-goldLight">
                      Nhiệm vụ {i + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-heading font-bold text-white mb-2 group-hover:text-heritage-goldLight transition-colors">
                    {resp.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {resp.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom call to action banner */}
          <div className="mt-10 pt-8 border-t border-white/15 text-center text-xs text-white/70 max-w-xl mx-auto">
            "Mỗi hành động nhỏ hôm nay - từ một bài viết đúng đắn trên mạng xã hội đến một mẩu rác nhặt lên bờ biển - đều là một viên gạch xây nên pháo đài vững chắc bảo vệ biển đảo quê hương."
          </div>
        </div>
      </div>

    </section>
  );
};
