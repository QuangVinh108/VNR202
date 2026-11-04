import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { SectionHeader } from './SectionHeader';
import { CheckCircle2, XCircle, Award, RotateCcw, HelpCircle, ArrowRight } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentIdx];
  const userSelected = selectedAnswers[currentQuestion.id];
  const isAnswered = userSelected !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return; // Prevent changing answer once selected
    setSelectedAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }));
    setShowExplanation(prev => ({ ...prev, [currentQuestion.id]: true }));
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setShowExplanation({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <section id="quiz-review" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeader
        romanNumber="ÔN TẬP"
        badge="Kiểm tra & Củng cố kiến thức"
        title="Trắc Nghiệm Ôn Tập Lịch Sử Đảng (VNR202)"
        subtitle="Hệ thống 10 câu hỏi trắc nghiệm trọng tâm bao quát nội dung Đại hội IX, Đại hội X và Chiến lược phát triển kinh tế biển Việt Nam."
      />

      <div className="bg-white rounded-3xl shadow-heritage border border-heritage-gold/40 p-6 sm:p-10 relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-heritage-red via-heritage-gold to-heritage-ocean" />

        {!isCompleted ? (
          <div>
            {/* Progress Bar & Question Counter */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-heritage-red text-white text-xs font-bold flex items-center justify-center">
                  {currentIdx + 1}
                </span>
                <span className="text-sm font-semibold text-heritage-navy">
                  Câu hỏi {currentIdx + 1} / {quizQuestions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-32 sm:w-48 bg-heritage-ivory rounded-full h-2.5 overflow-hidden border border-heritage-gold/30">
                <div
                  className="bg-heritage-red h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-heritage-navy leading-snug mb-8">
              {currentQuestion.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3.5 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isCorrect = idx === currentQuestion.correctIndex;
                const isUserChoice = userSelected === idx;

                let optionStyles = 'bg-heritage-ivoryLight border-heritage-gold/30 hover:border-heritage-red hover:bg-white text-heritage-dark';

                if (isAnswered) {
                  if (isCorrect) {
                    optionStyles = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500';
                  } else if (isUserChoice && !isCorrect) {
                    optionStyles = 'bg-rose-50 border-rose-500 text-rose-950 ring-1 ring-rose-500';
                  } else {
                    optionStyles = 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border font-medium text-sm sm:text-base flex items-start gap-4 transition-all duration-200 ${optionStyles}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isAnswered
                          ? isCorrect
                            ? 'bg-emerald-600 text-white'
                            : isUserChoice
                            ? 'bg-rose-600 text-white'
                            : 'bg-gray-200 text-gray-600'
                          : 'bg-heritage-ivory border border-heritage-gold/40 text-heritage-navy'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>

                    <span className="flex-1 leading-snug pt-0.5">{option}</span>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    {isAnswered && isUserChoice && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {isAnswered && showExplanation[currentQuestion.id] && (
              <div className="p-5 rounded-2xl bg-heritage-ivory border border-heritage-gold/40 mb-8 animate-fade-in text-sm sm:text-base">
                <div className="flex items-center gap-2 font-bold text-heritage-navy mb-2">
                  <HelpCircle className="w-4 h-4 text-heritage-goldDark" />
                  <span>Giải thích chi tiết & Cơ sở tài liệu:</span>
                </div>
                <p className="text-heritage-dark leading-relaxed mb-2">
                  {currentQuestion.explanation}
                </p>
                <div className="text-xs text-heritage-muted italic">
                  Nguồn: {currentQuestion.source}
                </div>
              </div>
            )}

            {/* Nav controls */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button
                onClick={handlePrevious}
                disabled={currentIdx === 0}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  currentIdx === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-heritage-navy hover:bg-heritage-ivory'
                }`}
              >
                ← Câu trước
              </button>

              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
                  isAnswered
                    ? 'bg-heritage-red hover:bg-heritage-deepRed text-white hover:shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>{currentIdx === quizQuestions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results Summary Screen */
          <div className="text-center py-8 sm:py-12 animate-fade-in max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-heritage-gold/20 text-heritage-goldDark mx-auto flex items-center justify-center mb-6">
              <Award className="w-10 h-10" />
            </div>

            <h3 className="text-3xl font-heading font-bold text-heritage-navy mb-2">
              Hoàn Thành Bài Ôn Tập!
            </h3>
            <p className="text-heritage-muted text-sm sm:text-base mb-6">
              Chúc mừng bạn đã hoàn thành 10 câu hỏi trắc nghiệm củng cố kiến thức môn Lịch sử Đảng Cộng sản Việt Nam.
            </p>

            {/* Score Ring */}
            <div className="inline-block p-6 rounded-2xl bg-heritage-ivory border border-heritage-gold/40 mb-8">
              <div className="text-5xl font-black font-heading text-heritage-red mb-1">
                {score} / {quizQuestions.length}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-heritage-navy">
                Đạt {percentage}% số điểm
              </div>
            </div>

            {/* Feedback based on score */}
            <div className="p-4 rounded-xl bg-heritage-ivoryLight border border-heritage-gold/30 text-sm text-heritage-navy mb-8">
              {percentage >= 80 ? (
                <p className="font-semibold text-emerald-800">
                  Xuất sắc! Bạn đã nắm rất vững nội dung lịch sử Đại hội IX, Đại hội X và các nghị quyết chiến lược phát triển kinh tế biển.
                </p>
              ) : percentage >= 50 ? (
                <p className="font-semibold text-amber-800">
                  Khá tốt! Bạn đã nắm được các điểm chính, hãy đọc lại các mốc timeline và bài học lớn để đạt kết quả tối đa.
                </p>
              ) : (
                <p className="font-semibold text-rose-800">
                  Bạn nên dành thêm thời gian đọc lại các đề mục Đại hội IX, X và các nhóm giải pháp kinh tế biển để củng cố kiến thức nhé!
                </p>
              )}
            </div>

            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-heritage-red hover:bg-heritage-deepRed text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại bài trắc nghiệm</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

