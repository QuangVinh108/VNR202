import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Timeline } from '../components/Timeline';
import { Accordion } from '../components/Accordion';
import { HistoricalQuote } from '../components/HistoricalQuote';
import {
  congressIXContext,
  congressIXPillars,
  congressIXTimeline,
  congressIXEvaluation
} from '../data/congressIX';
import { Globe, Home, CheckCircle2, AlertTriangle, Sparkles, BookOpen } from 'lucide-react';

export const CongressIXSection: React.FC = () => {
  // Convert 6 basic pillars into accordion items
  const pillarAccordionItems = congressIXPillars.map((pillar) => ({
    id: pillar.id,
    title: `${pillar.index}. ${pillar.title}`,
    subtitle: pillar.summary,
    badge: pillar.tag,
    content: (
      <div className="space-y-4 pt-2">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-heritage-navy mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-heritage-red" />
            <span>Nội dung chi tiết luận điểm:</span>
          </h4>
          <ul className="space-y-2">
            {pillar.details.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-heritage-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-heritage-red mt-2 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }));

  return (
    <section id="congress-ix" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <SectionHeader
        romanNumber="I"
        badge="Nhiệm kỳ 2001 – 2005"
        title="Đại Hội Đại Biểu Toàn Quốc Lần Thứ IX (2001)"
        subtitle="Họp từ ngày 19 đến ngày 22/4/2001 tại Thủ đô Hà Nội. Đại hội khẳng định nền kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát trong thời kỳ quá độ."
      />

      {/* Quote Banner */}
      <HistoricalQuote
        quote="Đại hội IX của Đảng là Đại hội mở đầu thế kỷ mới, tiếp tục kế thừa và phát triển đường lối đổi mới, xác định kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát của nước ta trong thời kỳ quá độ lên chủ nghĩa xã hội."
        author="Văn kiện Đại hội IX"
        source="Thủ đô Hà Nội, 4/2001"
      />

      {/* PHẦN A: BỐI CẢNH LỊCH SỬ (2-COL LAYOUT) */}
      <div id="congress-ix-context" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-6 bg-heritage-red rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            A. Bối Cảnh Lịch Sử Đại Hội IX
          </h3>
        </div>

        {/* Historical Context Image Banner */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-heritage-gold/40 shadow-heritage bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden">
              <img
                src="/images/badinh_hall.jpg"
                alt="Hội trường Ba Đình, Hà Nội – Không gian tổ chức Đại hội IX"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-heritage-red bg-heritage-red/10 px-2.5 py-1 rounded-full">
                Thời khắc lịch sử • 19 – 22/4/2001
              </span>
              <h4 className="text-xl font-heading font-bold text-heritage-navy">
                Bước Vào Thiên Niên Kỷ Mới Với Khát Vọng Phát Triển
              </h4>
              <p className="text-sm text-heritage-muted leading-relaxed">
                Đại hội IX được triệu tập tại Thủ đô Hà Nội trong bối cảnh toàn cầu hóa và cách mạng khoa học - công nghệ bùng nổ, đất nước đã qua 15 năm đổi mới (1986–2001) với nhiều tiền đề to lớn nhưng cũng đứng trước áp lực cạnh tranh gay gắt.
              </p>
              <div className="text-xs text-heritage-goldDark font-semibold italic pt-1">
                Địa điểm: Hội trường Ba Đình, Thủ đô Hà Nội
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Bối cảnh quốc tế */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-gold/30 shadow-heritage flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-heritage-red/10 text-heritage-red flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-heading font-bold text-heritage-navy">
                  1.1. Bối cảnh quốc tế
                </h4>
              </div>

              <ul className="space-y-3 mb-6">
                {congressIXContext.internationalContext.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-heritage-dark leading-relaxed">
                    <span className="text-heritage-red font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Bối cảnh trong nước */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-heritage-gold/30 shadow-heritage flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-heritage-gold/20 text-heritage-goldDark flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-heading font-bold text-heritage-navy">
                  1.2. Bối cảnh trong nước
                </h4>
              </div>

              <ul className="space-y-3 mb-6">
                {congressIXContext.domesticContext.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-heritage-dark leading-relaxed">
                    <span className="text-heritage-goldDark font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* PHẦN B: 6 NỘI DUNG CƠ BẢN ĐẠI HỘI IX (ACCORDION & CARDS) */}
      <div id="congress-ix-pillars" className="mb-20 scroll-mt-24">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-6 bg-heritage-red rounded-full" />
            <h3 className="text-2xl font-heading font-bold text-heritage-navy">
              B. Sáu Nội Dung Cơ Bản Của Đại Hội IX
            </h3>
          </div>
        </div>

        <Accordion items={pillarAccordionItems} defaultOpenId="kinh-te-thi-truong-xhcn" theme="heritage" />
      </div>

      {/* PHẦN C: QUÁ TRÌNH TRIỂN KHAI THỰC HIỆN NGHỊ QUYẾT (2001-2005) */}
      <div id="congress-ix-timeline" className="mb-20 scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-6 bg-heritage-red rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            C. Quá Trình Triển Khai Thực Hiện Nghị Quyết Đại Hội IX (2001–2005)
          </h3>
        </div>
        <p className="text-sm text-heritage-muted mb-8 max-w-3xl">
          Hệ thống các Nghị quyết Hội nghị Trung ương khóa IX cụ thể hóa đường lối kinh tế thị trường định hướng XHCN, đất đai, đại đoàn kết toàn dân tộc và chính sách kiều bào.
        </p>

        <Timeline items={congressIXTimeline} theme="heritage" />
      </div>

      {/* PHẦN D: ĐÁNH GIÁ KẾT QUẢ VÀ Ý NGHĨA (3-COL LAYOUT) */}
      <div id="congress-ix-evaluation" className="scroll-mt-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-6 bg-heritage-red rounded-full" />
          <h3 className="text-2xl font-heading font-bold text-heritage-navy">
            D. Đánh Giá Kết Quả, Hạn Chế Và Ý Nghĩa Đại Hội IX
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Kết quả */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-emerald-800">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <h4 className="text-lg font-heading font-bold">
                  {congressIXEvaluation.results.title}
                </h4>
              </div>

              <ul className="space-y-2.5 mb-6">
                {congressIXEvaluation.results.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Hạn chế */}
          <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-amber-800">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                <h4 className="text-lg font-heading font-bold">
                  {congressIXEvaluation.limitations.title}
                </h4>
              </div>

              <ul className="space-y-2.5 mb-6">
                {congressIXEvaluation.limitations.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Ý nghĩa */}
          <div className="bg-white rounded-2xl p-6 border border-heritage-red/30 shadow-heritage flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-heritage-red">
                <Sparkles className="w-6 h-6 text-heritage-red shrink-0" />
                <h4 className="text-lg font-heading font-bold">
                  {congressIXEvaluation.significance.title}
                </h4>
              </div>

              <ul className="space-y-2.5 mb-6">
                {congressIXEvaluation.significance.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-heritage-dark leading-relaxed">
                    <span className="text-heritage-red font-bold mt-0.5">★</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

