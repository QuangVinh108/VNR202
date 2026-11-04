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
  Award,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ExternalLink
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
        <div className="mb-8 p-6 rounded-2xl bg-heritage-ivoryLight border border-heritage-gold/50 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-heritage-gold/20 text-heritage-goldDark flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-heritage-red">
                Mốc son lịch sử trọng đại
              </span>
              <h4 className="text-xl font-heading font-bold text-heritage-navy">
                Tổng Kết 20 Năm Thực Hiện Công Cuộc Đổi Mới (1986–2006)
              </h4>
              <p className="text-sm text-heritage-muted mt-1">
                {congressXContext.historicalSignificance}
              </p>
            </div>
          </div>
          <div className="text-xs font-bold text-heritage-navy bg-white px-3 py-1.5 rounded-lg border border-heritage-gold/30 shrink-0">
            {congressXContext.generalSecretary}
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

        {/* Highlight Banner: WTO & Nghị quyết 09 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-heritage-goldLight">
              <ExternalLink className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-heritage-goldLight">
                11/01/2007 • Cột mốc lịch sử
              </span>
              <h4 className="text-lg font-heading font-bold text-white mt-0.5">
                Gia Nhập WTO (Thành viên thứ 150)
              </h4>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                Sau 11 năm đàm phán, mở toang cánh cửa thương mại toàn cầu, thúc đẩy xuất khẩu và kỷ lục thu hút FDI.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-900 to-cyan-900 text-white shadow-lg flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-cyan-200">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                09/02/2007 • Quyết sách biển thế kỷ
              </span>
              <h4 className="text-lg font-heading font-bold text-white mt-0.5">
                Nghị Quyết 09-NQ/TW Về Chiến Lược Biển Đến 2020
              </h4>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                Mục tiêu đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ biển, kinh tế biển đóng góp 53–55% GDP.
              </p>
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
