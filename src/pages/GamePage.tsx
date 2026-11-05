import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import {
  Gamepad2,
  Trophy,
  Flame,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Volume2,
  VolumeX,
  Award,
  Sparkles,
  Zap,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface GamePageProps {
  onBackToHome: () => void;
}

interface AnswerRecord {
  questionId: number;
  questionText: string;
  options: string[];
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  explanation: string;
  source: string;
}

export const GamePage: React.FC<GamePageProps> = ({ onBackToHome }) => {
  // Game screens: 'intro' | 'playing' | 'result'
  const [gameStage, setGameStage] = useState<'intro' | 'playing' | 'result'>('intro');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Gameplay state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [answersHistory, setAnswersHistory] = useState<AnswerRecord[]>([]);
  const [expandedReviewId, setExpandedReviewId] = useState<number | null>(null);

  const currentQuestion = quizQuestions[currentIdx];

  // Sound Synthesizer (Web Audio API)
  const playBeep = (freq: number, type: OscillatorType, duration: number, delay = 0) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      setTimeout(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      }, delay * 1000);
    } catch {
      // Audio context disabled or not allowed yet
    }
  };

  const playSuccessSound = () => {
    playBeep(523.25, 'sine', 0.12, 0);       // C5
    playBeep(659.25, 'sine', 0.12, 0.08);    // E5
    playBeep(783.99, 'sine', 0.15, 0.16);    // G5
    playBeep(1046.50, 'triangle', 0.25, 0.24); // C6
  };

  const playErrorSound = () => {
    playBeep(280, 'sawtooth', 0.15, 0);
    playBeep(210, 'sawtooth', 0.25, 0.12);
  };

  const playVictoryFanfare = () => {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => {
      playBeep(f, 'triangle', 0.3, i * 0.1);
    });
  };

  // Start / Restart game
  const handleStartGame = () => {
    setGameStage('playing');
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setAnswersHistory([]);
    setExpandedReviewId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select an option
  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQuestion.correctIndex;

    if (isCorrect) {
      playSuccessSound();
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Score calculation: 100 base + streak bonus
      const streakBonus = (newStreak - 1) * 25;
      const pointsEarned = 100 + streakBonus;
      setScore((prev) => prev + pointsEarned);
    } else {
      playErrorSound();
      setStreak(0);
    }

    const record: AnswerRecord = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.question,
      options: currentQuestion.options,
      selectedIndex: idx,
      correctIndex: currentQuestion.correctIndex,
      isCorrect,
      explanation: currentQuestion.explanation,
      source: currentQuestion.source,
    };
    setAnswersHistory((prev) => [...prev, record]);
  };

  // Go to next question or complete game
  const handleNextQuestion = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setGameStage('result');
      playVictoryFanfare();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Rank and Title based on correct answers
  const correctCount = answersHistory.filter((a) => a.isCorrect).length;
  const accuracy = Math.round((correctCount / quizQuestions.length) * 100);

  const getRankBadge = () => {
    if (correctCount === 10) {
      return {
        title: 'Nhà Sử Học Xuất Sắc',
        rank: 'Hạng Đại Kiện Tướng Lịch Sử',
        color: 'from-amber-500 to-yellow-300 text-amber-950',
        borderColor: 'border-yellow-400',
        desc: 'Tuyệt đối 10/10 câu hỏi! Bạn đã nắm vững xuất sắc toàn bộ văn kiện Đại hội IX, Đại hội X và Chiến lược biển.',
        icon: '🏆',
      };
    }
    if (correctCount >= 8) {
      return {
        title: 'Nhà Nghiên Cứu Lịch Sử Tài Ba',
        rank: 'Hạng Nhất Lịch Sử Đảng',
        color: 'from-red-600 to-rose-400 text-white',
        borderColor: 'border-rose-400',
        desc: 'Kết quả tuyệt vời! Bạn có vốn hiểu biết rất sâu rộng và chuẩn xác về các mốc lịch sử trọng yếu.',
        icon: '🥇',
      };
    }
    if (correctCount >= 6) {
      return {
        title: 'Học Viên Đạt Chuẩn Kiến Thức',
        rank: 'Hạng Khá VNR202',
        color: 'from-blue-600 to-cyan-400 text-white',
        borderColor: 'border-cyan-400',
        desc: 'Bạn đã nắm được các nội dung cơ bản. Ôn thêm một chút nữa là có thể đạt điểm số tối đa!',
        icon: '🥈',
      };
    }
    return {
      title: 'Tân Binh Đang Rèn Luyện',
      rank: 'Cần Ôn Luyện Thêm',
      color: 'from-stone-600 to-stone-400 text-white',
      borderColor: 'border-stone-400',
      desc: 'Hãy xem lại các phân tích chi tiết trong bài học và thử sức lại để nâng cao kết quả nhé!',
      icon: '🥉',
    };
  };

  const rankInfo = getRankBadge();

  return (
    <div className="min-h-screen bg-heritage-ivory text-heritage-dark font-sans flex flex-col selection:bg-heritage-red selection:text-white">
      {/* Top Game Navigation Header */}
      <header className="sticky top-0 z-40 bg-heritage-navy/95 backdrop-blur-md text-white border-b-2 border-heritage-gold shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Back to Lesson Button */}
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-heritage-goldLight hover:text-white text-xs sm:text-sm font-semibold transition-all border border-white/10"
            title="Quay lại trang học tập"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Quay về trang học tập</span>
            <span className="sm:hidden">Bài học</span>
          </button>

          {/* Central Logo & Game Title */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-heritage-red flex items-center justify-center font-heading font-black text-xs border border-heritage-gold/50 shadow">
              CPV
            </div>
            <div className="text-center sm:text-left">
              <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-heritage-gold">
                Trò chơi trắc nghiệm tương tác
              </span>
              <h1 className="text-sm sm:text-base font-heading font-bold text-white flex items-center gap-1.5">
                <Gamepad2 className="w-4 h-4 text-heritage-gold inline" />
                Đấu Trường Lịch Sử VNR202
              </h1>
            </div>
          </div>

          {/* Controls: Audio Mute & Share */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
              aria-label="Sound toggle"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-heritage-gold" />
              ) : (
                <VolumeX className="w-4 h-4 text-white/50" />
              )}
            </button>

            {gameStage === 'playing' && (
              <button
                onClick={() => setGameStage('intro')}
                className="px-3 py-1.5 rounded-xl bg-red-950/60 hover:bg-red-900 border border-red-500/30 text-red-200 text-xs font-semibold transition-colors"
              >
                Dừng chơi
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        
        {/* ======================================================== */}
        {/* SCREEN 1: INTRO / LOBBY */}
        {/* ======================================================== */}
        {gameStage === 'intro' && (
          <div className="bg-white rounded-3xl shadow-heritage border border-heritage-gold/40 p-6 sm:p-10 relative overflow-hidden text-center space-y-8 animate-fade-in">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-heritage-red via-heritage-gold to-heritage-ocean" />
            <div className="w-24 h-24 mx-auto rounded-3xl bg-heritage-red/10 border-2 border-heritage-gold flex items-center justify-center text-4xl shadow-inner mt-2">
              <Trophy className="w-12 h-12 text-heritage-goldDark animate-bounce" />
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-heritage-red/10 border border-heritage-red/20 text-heritage-red text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Thử Thách Trọng Tâm
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-heritage-navy">
                ĐẤU TRƯỜNG TRI THỨC VNR202
              </h2>
              <p className="text-heritage-muted text-sm sm:text-base leading-relaxed">
                Hệ thống câu hỏi bao quát toàn diện: <b>Đại hội IX (2001)</b>, <b>Đại hội X (2006)</b> và <b>Chiến lược phát triển kinh tế biển Việt Nam</b> (Nghị quyết số 09-NQ/TW).
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-heritage-ivory border border-heritage-gold/30">
                <div className="w-8 h-8 rounded-lg bg-heritage-red/10 text-heritage-red flex items-center justify-center mb-2">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-heritage-navy">Combo Chuỗi Điểm</h3>
                <p className="text-xs text-heritage-muted mt-1">Trả lời đúng liên tiếp để nhân hệ số điểm thưởng cao kỷ lục.</p>
              </div>

              <div className="p-4 rounded-2xl bg-heritage-ivory border border-heritage-gold/30">
                <div className="w-8 h-8 rounded-lg bg-heritage-ocean/10 text-heritage-ocean flex items-center justify-center mb-2">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-heritage-navy">Giải Thích Chi Tiết</h3>
                <p className="text-xs text-heritage-muted mt-1">Mỗi đáp án đi kèm dẫn chứng văn kiện và giáo trình môn học.</p>
              </div>

              <div className="p-4 rounded-2xl bg-heritage-ivory border border-heritage-gold/30">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-heritage-navy">Xếp Hạng Danh Hiệu</h3>
                <p className="text-xs text-heritage-muted mt-1">Vinh danh thứ hạng từ Nhà Nghiên Cứu đến Kiện Tướng Lịch Sử.</p>
              </div>
            </div>

            {/* Single Challenge Mode Start Button */}
            <div className="pt-4 max-w-sm mx-auto">
              <button
                onClick={handleStartGame}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-heritage-red hover:bg-heritage-deepRed text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-heritage hover:shadow-heritage-hover hover:-translate-y-0.5 group"
              >
                <Zap className="w-5 h-5 text-heritage-goldLight group-hover:scale-110 transition-transform" />
                <span>Chế độ Thử Thách</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SCREEN 2: PLAYING QUESTION */}
        {/* ======================================================== */}
        {gameStage === 'playing' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Status Bar: Question Progress, Score, Streak, Timer */}
            <div className="bg-white rounded-2xl shadow-sm border border-heritage-gold/40 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              
              {/* Question Index */}
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-heritage-red text-white text-sm font-bold flex items-center justify-center shadow">
                  {currentIdx + 1}
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-muted block">
                    Tiến độ câu hỏi
                  </span>
                  <span className="text-sm sm:text-base font-bold text-heritage-navy">
                    {currentIdx + 1} / {quizQuestions.length}
                  </span>
                </div>
              </div>

              {/* Combo Streak */}
              {streak > 1 && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 animate-pulse">
                  <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    Combo x{streak}!
                  </span>
                </div>
              )}

              {/* Live Score */}
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-muted block">
                    Điểm số
                  </span>
                  <span className="text-base sm:text-lg font-black text-heritage-red font-heading">
                    {score.toLocaleString()} <span className="text-xs font-bold text-heritage-goldDark">PTS</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Progress line */}
            <div className="w-full bg-heritage-gold/20 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-heritage-red to-heritage-gold transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            {/* Main Question Card */}
            <div className="bg-white rounded-3xl shadow-heritage border border-heritage-gold/40 p-6 sm:p-9 space-y-6 relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-heritage-red">
                  Chủ đề: {currentQuestion.source.split(':')[0]}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-heritage-navy leading-snug">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 gap-3.5">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;
                  const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D

                  let buttonStyle = 'bg-white hover:bg-heritage-ivory border-heritage-gold/40 text-heritage-dark hover:border-heritage-red';

                  if (isAnswered) {
                    if (isCorrect) {
                      buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-md ring-2 ring-emerald-500/30';
                    } else if (isSelected) {
                      buttonStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-medium shadow-md';
                    } else {
                      buttonStyle = 'bg-stone-50/50 border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-4 group ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                        <span
                          className={`w-8 h-8 rounded-xl font-heading font-black text-xs flex items-center justify-center shrink-0 transition-colors ${
                            isAnswered && isCorrect
                              ? 'bg-emerald-600 text-white'
                              : isAnswered && isSelected
                              ? 'bg-rose-600 text-white'
                              : 'bg-heritage-ivory border border-heritage-gold/40 text-heritage-navy group-hover:bg-heritage-red group-hover:text-white'
                          }`}
                        >
                          {optionLabel}
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed">
                          {option}
                        </span>
                      </div>

                      {/* Status Icon */}
                      {isAnswered && (
                        <div className="shrink-0">
                          {isCorrect && (
                            <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 animate-bounce" />
                          )}
                          {!isCorrect && isSelected && (
                            <XCircle className="w-6 h-6 text-rose-600 fill-rose-100" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback & Historical Explanation */}
              {isAnswered && (
                <div className="pt-4 border-t border-heritage-gold/20 space-y-4 animate-fade-in">
                  <div className={`p-4 sm:p-5 rounded-2xl border ${
                    selectedOption === currentQuestion.correctIndex
                      ? 'bg-emerald-50/80 border-emerald-300'
                      : 'bg-amber-50/80 border-amber-300'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {selectedOption === currentQuestion.correctIndex ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span className="font-heading font-bold text-emerald-800 text-sm sm:text-base">
                            Chính xác! (+100 điểm)
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-rose-600" />
                          <span className="font-heading font-bold text-rose-800 text-sm sm:text-base">
                            Chưa chính xác!
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-heritage-dark leading-relaxed">
                      <b>Giải thích lịch sử:</b> {currentQuestion.explanation}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-black/5 flex items-center gap-1.5 text-[11px] font-semibold text-heritage-muted">
                      <BookOpen className="w-3.5 h-3.5 text-heritage-goldDark" />
                      <span>{currentQuestion.source}</span>
                    </div>
                  </div>

                  {/* Next Question / Finish Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleNextQuestion}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-heritage-red hover:bg-heritage-deepRed text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>
                        {currentIdx < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả chung cuộc'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SCREEN 3: RESULT & TROPHY CEREMONY */}
        {/* ======================================================== */}
        {gameStage === 'result' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Victory Badge Card */}
            <div className="bg-white rounded-3xl shadow-heritage border border-heritage-gold/40 p-6 sm:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-heritage-red via-heritage-gold to-heritage-ocean" />

              {/* Big Animated Trophy */}
              <div className="text-6xl sm:text-7xl mb-3 animate-bounce">
                {rankInfo.icon}
              </div>

              {/* Rank Tag */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-heritage-red/10 border border-heritage-red/30 text-heritage-red text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
                {rankInfo.rank}
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-black text-heritage-navy mb-2">
                {rankInfo.title}
              </h2>

              <p className="text-heritage-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6">
                {rankInfo.desc}
              </p>

              {/* Key Performance Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-heritage-ivory border border-heritage-gold/30">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-muted block">
                    Tổng điểm
                  </span>
                  <span className="text-xl sm:text-2xl font-heading font-black text-heritage-red">
                    {score.toLocaleString()}
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-heritage-ivory border border-heritage-gold/30">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-muted block">
                    Số câu đúng
                  </span>
                  <span className="text-xl sm:text-2xl font-heading font-black text-emerald-600">
                    {correctCount} / {quizQuestions.length}
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-heritage-ivory border border-heritage-gold/30">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-muted block">
                    Độ chính xác
                  </span>
                  <span className="text-xl sm:text-2xl font-heading font-black text-heritage-ocean">
                    {accuracy}%
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-heritage-ivory border border-heritage-gold/30">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-muted block">
                    Combo dài nhất
                  </span>
                  <span className="text-xl sm:text-2xl font-heading font-black text-amber-600">
                    🔥 x{maxStreak}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8">
                <button
                  onClick={handleStartGame}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-heritage-red hover:bg-heritage-deepRed text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Chơi lại vòng mới</span>
                </button>

                <button
                  onClick={onBackToHome}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-heritage-ivory text-heritage-navy font-bold text-sm sm:text-base transition-all duration-300 border-2 border-heritage-gold/50 shadow-sm hover:border-heritage-red hover:text-heritage-red"
                >
                  <BookOpen className="w-4 h-4 text-heritage-ocean" />
                  <span>Quay về trang học tập</span>
                </button>
              </div>
            </div>

            {/* Comprehensive Review of all 10 Questions */}
            <div className="bg-white rounded-3xl shadow-heritage border border-heritage-gold/40 p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-heritage-gold/30 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-heritage-navy flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-heritage-red" />
                    Bảng xem lại & Đối chiếu 10 câu hỏi
                  </h3>
                  <p className="text-xs text-heritage-muted mt-0.5">
                    Nhấp vào từng câu để xem giải thích chi tiết và trích dẫn tài liệu.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {answersHistory.map((item, index) => {
                  const isExpanded = expandedReviewId === item.questionId;
                  const optionLabel = String.fromCharCode(65 + item.selectedIndex);
                  const correctLabel = String.fromCharCode(65 + item.correctIndex);

                  return (
                    <div
                      key={item.questionId}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        item.isCorrect
                          ? 'bg-emerald-50/40 border-emerald-200'
                          : 'bg-rose-50/40 border-rose-200'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedReviewId(isExpanded ? null : item.questionId)}
                        className="w-full text-left p-4 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                              item.isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-rose-600 text-white'
                            }`}
                          >
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-heritage-navy line-clamp-1">
                              {item.questionText}
                            </h4>
                            <p className="text-[11px] text-heritage-muted mt-0.5">
                              Lựa chọn: <span className="font-bold">{optionLabel}</span> • Đáp án đúng: <span className="font-bold text-emerald-700">{correctLabel}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {item.isCorrect ? (
                            <span className="text-xs font-bold text-emerald-700 hidden sm:inline">Chính xác</span>
                          ) : (
                            <span className="text-xs font-bold text-rose-700 hidden sm:inline">Chưa đúng</span>
                          )}
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-heritage-muted" /> : <ChevronDown className="w-4 h-4 text-heritage-muted" />}
                        </div>
                      </button>

                      {/* Expanded Explanation */}
                      {isExpanded && (
                        <div className="px-4 pb-4 pt-1 text-xs border-t border-black/5 space-y-2 bg-white/70">
                          <p className="text-heritage-dark leading-relaxed">
                            <b>Giải thích:</b> {item.explanation}
                          </p>
                          <p className="text-heritage-muted font-medium">
                            <b>Nguồn:</b> {item.source}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Mini Academic Footer for Game Page */}
      <footer className="bg-heritage-navy text-white/70 text-xs py-6 text-center border-t border-heritage-gold/30">
        <p>Học phần Lịch Sử Đảng Cộng Sản Việt Nam (VNR202) • Chuyên đề Đại hội IX, Đại hội X & Kinh tế biển</p>
      </footer>
    </div>
  );
};
