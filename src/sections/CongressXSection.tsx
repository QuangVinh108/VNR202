import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Timeline } from '../components/Timeline';
import { HistoricalQuote } from '../components/HistoricalQuote';
import { StatCard } from '../components/StatCard';
import {
  congressXContext,
  congressXLessons,
  congressXPillars,
  congressXTimeline,
  congressXStats,
  congressXEvaluation
} from '../data/congressX';
import {
  Globe,
  Home,
  CheckCircle2,
  AlertTriangle,
  Sparkles
} from 'lucide-react';

export const CongressXSection: React.FC = () => {
  return (
    <section id="congress-x" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <SectionHeader
        romanNumber="II"
        badge="Nhiệm kỳ 2006 – 2010"
        title="Đại Hội Đại Biểu Toàn Quốc Lần Thứ X (2006)"
        subtitle="Họp từ ngày 18 đến ngày 25/4/2006 tại Hà Nội. Đánh dấu mốc son 20 năm đổi mới, đưa đất nước chính thức gia nhập WTO và ban hành Chiến lược Biển Việt Nam đến năm 2020."
      />

      {/* Quote Banner */}
      <HistoricalQuote
        quote="Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển."
        author="Chủ đề Đại hội X"
        source="Văn kiện Đại hội đại biểu toàn quốc lần thứ X"
      />

      {/* PHẦN A & B: BỐI CẢNH LỊCH SỬ & CHỦ ĐỀ ĐẠI HỘI X */}
      <div id="congress-x-context" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-6 bg-heritage-gold rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            A & B. Bối Cảnh Lịch Sử, Chủ Đề Và Mục Tiêu Đại Hội X
          </h3>
        </div>

        {/* 20 Years Renewal Highlight Banner */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-heritage-gold/50 shadow-sm bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden">
              <img
                src="/images/modernization.jpg"
                alt="Diện mạo đất nước sau 20 năm đổi mới"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-red bg-heritage-red/10 px-2.5 py-1 rounded-full">
                  Mốc son lịch sử trọng đại • 1986 – 2006
                </span>
                <span className="text-xs font-bold text-heritage-navy bg-heritage-ivory px-2.5 py-1 rounded-md border border-heritage-gold/30">
                  {congressXContext.generalSecretary}
                </span>
              </div>
              <h4 className="text-xl font-heading font-bold text-heritage-navy">
                Tổng Kết 20 Năm Thực Hiện Công Cuộc Đổi Mới
              </h4>
              <p className="text-sm text-heritage-muted leading-relaxed">
                {congressXContext.historicalSignificance} Thế và lực của đất nước tăng lên rõ rệt; nền kinh tế tăng trưởng liên tục, chính trị – xã hội ổn định vững chắc, vị thế quốc tế được nâng cao chưa từng có.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column: Bối cảnh quốc tế & trong nước */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Quốc tế */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-gold/30 shadow-heritage flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-heritage-ocean/10 text-heritage-ocean flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-heading font-bold text-heritage-navy">
                  Bối cảnh quốc tế
                </h4>
              </div>

              <ul className="space-y-3 mb-6">
                {congressXContext.internationalContext.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-heritage-dark leading-relaxed">
                    <span className="text-heritage-ocean font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-heritage-ivory border border-heritage-gold/30 text-xs sm:text-sm text-heritage-dark leading-relaxed">
              <strong className="text-heritage-ocean block mb-1 uppercase tracking-wider text-[11px]">
                Phân tích:
              </strong>
              {congressXContext.internationalContext.analysis}
            </div>
          </div>

          {/* Trong nước */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-gold/30 shadow-heritage flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-heritage-red/10 text-heritage-red flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-heading font-bold text-heritage-navy">
                  Bối cảnh trong nước & Thành tựu 20 năm đổi mới
                </h4>
              </div>

              <ul className="space-y-3 mb-6">
                {congressXContext.domesticContext.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-heritage-dark leading-relaxed">
                    <span className="text-heritage-red font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-heritage-ivory border border-heritage-gold/30 text-xs sm:text-sm text-heritage-dark leading-relaxed">
              <strong className="text-heritage-red block mb-1 uppercase tracking-wider text-[11px]">
                Phân tích:
              </strong>
              {congressXContext.domesticContext.analysis}
            </div>
          </div>

        </div>
      </div>

      {/* PHẦN C: NĂM BÀI HỌC LỚN SAU 20 NĂM ĐỔI MỚI (5 CARDS / INFOGRAPHIC) */}
      <div id="congress-x-lessons" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-6 bg-heritage-gold rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            C. Năm Bài Học Lớn Rút Ra Sau 20 Năm Đổi Mới (1986–2006)
          </h3>
        </div>
        <p className="text-sm text-heritage-muted mb-8 max-w-3xl">
          Đại hội X đúc kết tinh hoa thực tiễn 20 năm kiến thiết đất nước thành 5 quy luật chỉ đạo xuyên suốt cho mọi giai đoạn phát triển tiếp theo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {congressXLessons.map((lesson) => (
            <div
              key={lesson.number}
              className={`rounded-2xl p-6 border bg-white shadow-heritage hover:shadow-heritage-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                lesson.number === 5 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-heritage-red text-white font-black text-sm flex items-center justify-center shadow-sm">
                    {lesson.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-goldDark bg-heritage-ivory px-2 py-0.5 rounded-full border border-heritage-gold/30">
                    Bài học #{lesson.number}
                  </span>
                </div>

                <h4 className="text-lg font-heading font-bold text-heritage-navy mb-2 leading-snug">
                  {lesson.title}
                </h4>

                <p className="text-xs font-semibold text-heritage-red mb-3">
                  {lesson.principle}
                </p>

                <p className="text-sm text-heritage-muted leading-relaxed mb-4">
                  {lesson.content}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-heritage-ivoryLight border border-heritage-gold/30 text-xs text-heritage-dark italic">
                <span className="font-bold text-heritage-navy not-italic block mb-0.5">Phân tích:</span>
                "{lesson.analysis}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PHẦN D: BỐN NỘI DUNG PHÁT TRIỂN QUAN TRỌNG */}
      <div id="congress-x-pillars" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-6 bg-heritage-gold rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            D. Bốn Nội Dung Phát Triển Trọng Tâm Của Đại Hội X
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {congressXPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-heritage-gold/40 shadow-heritage flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-heritage-red/10 text-heritage-red inline-block mb-2">
                  Trọng tâm Đại hội X
                </span>
                <h4 className="text-xl font-heading font-bold text-heritage-navy mb-1 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs font-semibold text-heritage-goldDark mb-4">
                  {pillar.subtitle}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {pillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                      <span className="text-heritage-red font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-heritage-ivory border border-heritage-gold/30 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                <strong className="text-heritage-navy block mb-0.5 uppercase tracking-wider text-[11px]">
                  Ý nghĩa lý luận & Đột phá:
                </strong>
                {pillar.analysis}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PHẦN E: QUÁ TRÌNH TRIỂN KHAI THỰC HIỆN NGHỊ QUYẾT (2006-2010) - TIMELINE */}
      <div id="congress-x-timeline" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-6 bg-heritage-gold rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            E. Quá Trình Triển Khai Thực Hiện Nghị Quyết Đại Hội X (2006–2010)
          </h3>
        </div>
        <p className="text-sm text-heritage-muted mb-8 max-w-3xl">
          Đặc biệt làm nổi bật 2 mốc son lịch sử: Ngày 11/01/2007 Việt Nam chính thức trở thành thành viên WTO và Ngày 09/02/2007 ban hành Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020.
        </p>

        {/* Highlight Banner: WTO & Nghị quyết 09 with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* WTO Card */}
          <div className="rounded-2xl overflow-hidden border border-red-900/30 shadow-lg bg-gradient-to-br from-red-950 to-red-900 text-white flex flex-col justify-between group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/images/wto_geneva.jpg"
                alt="Trụ sở WTO tại Geneva, Thụy Sĩ"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-800/90 text-heritage-goldLight text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm border border-red-700">
                11/01/2007 • Cột mốc lịch sử
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-heading font-bold text-white">
                Gia Nhập WTO (Thành viên thứ 150)
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Sau 11 năm đàm phán kiên trì, Việt Nam chính thức hòa mạng thương mại toàn cầu, thúc đẩy xuất khẩu và tạo bước nhảy vọt dòng vốn FDI từ 6,84 lên 19,88 tỷ USD.
              </p>
              <div className="text-[11px] text-heritage-goldLight italic pt-1">
                Địa điểm: Trụ sở WTO (Centre William Rappard), Geneva, Thụy Sĩ
              </div>
            </div>
          </div>

          {/* NQ09 Maritime Card */}
          <div className="rounded-2xl overflow-hidden border border-cyan-900/30 shadow-lg bg-gradient-to-br from-teal-950 to-cyan-950 text-white flex flex-col justify-between group">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src="/images/cargo.jpg"
                alt="Tàu container MAERSK HANOI cập cảng"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-950 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-800/90 text-cyan-200 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm border border-cyan-700">
                09/02/2007 • Quyết sách biển thế kỷ
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-heading font-bold text-white">
                Nghị Quyết 09-NQ/TW Về Chiến Lược Biển Đến 2020
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Mục tiêu lịch sử: Đưa nước ta trở thành quốc gia mạnh về biển, làm giàu từ biển; phấn đấu kinh tế biển đóng góp 53–55% GDP và 55–60% tổng kim ngạch xuất khẩu cả nước.
              </p>
              <div className="text-[11px] text-cyan-300 italic pt-1">
                Hội nghị lần thứ 4 Ban Chấp hành Trung ương Đảng khóa X
              </div>
            </div>
          </div>

        </div>

        <Timeline items={congressXTimeline} theme="heritage" />
      </div>

      {/* PHẦN F: KẾT QUẢ THỰC HIỆN ĐƯỜNG LỐI ĐẠI HỘI X & SỐ LIỆU THỐNG KÊ CHUẨN XÁC */}
      <div id="congress-x-stats" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-6 bg-heritage-gold rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            F. Kết Quả Thực Hiện Đường Lối Đại Hội X (Số Liệu Chính Thức)
          </h3>
        </div>
        <p className="text-sm text-heritage-muted mb-8">
          Số liệu thống kê xác thực từ giáo trình môn học (Session 25) phản ánh sinh động bước phát triển vượt bậc về kinh tế và đối ngoại.
        </p>

        {/* 5 Stats Infographic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {congressXStats.map((st) => (
            <StatCard
              key={st.id}
              metric={st.metric}
              label={st.label}
              description={st.description}
              theme={st.id === 'fdi-inflow' ? 'red' : st.id === 'trade-relations' ? 'ocean' : 'gold'}
            />
          ))}
        </div>

        {/* 3 Columns: Thành tựu, Hạn chế, Ý nghĩa */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kết quả */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-emerald-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <h4 className="text-lg font-heading font-bold">
                  {congressXEvaluation.results.title}
                </h4>
              </div>
              <ul className="space-y-2.5 mb-6">
                {congressXEvaluation.results.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-950 text-xs leading-relaxed italic border border-emerald-200/60">
              "{congressXEvaluation.results.analysis}"
            </div>
          </div>

          {/* Hạn chế */}
          <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-amber-800">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                <h4 className="text-lg font-heading font-bold">
                  {congressXEvaluation.limitations.title}
                </h4>
              </div>
              <ul className="space-y-2.5 mb-6">
                {congressXEvaluation.limitations.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50 text-amber-950 text-xs leading-relaxed italic border border-amber-200/60">
              "{congressXEvaluation.limitations.analysis}"
            </div>
          </div>

          {/* Ý nghĩa */}
          <div className="bg-white rounded-2xl p-6 border border-heritage-red/30 shadow-heritage flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-heritage-red">
                <Sparkles className="w-6 h-6 text-heritage-red shrink-0" />
                <h4 className="text-lg font-heading font-bold">
                  {congressXEvaluation.significance.title}
                </h4>
              </div>
              <ul className="space-y-2.5 mb-6">
                {congressXEvaluation.significance.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                    <span className="text-heritage-red font-bold mt-0.5">★</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3.5 rounded-xl bg-heritage-surfaceRed text-red-950 text-xs leading-relaxed italic border border-red-200/60">
              "{congressXEvaluation.significance.analysis}"
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
