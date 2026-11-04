import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Đại hội đại biểu toàn quốc lần thứ IX của Đảng Cộng sản Việt Nam diễn ra vào thời gian nào?",
    options: [
      "Từ ngày 15 đến 20/12/1986",
      "Từ ngày 19 đến 22/4/2001",
      "Từ ngày 18 đến 25/4/2006",
      "Từ ngày 12 đến 19/1/2011"
    ],
    correctIndex: 1,
    explanation: "Đại hội IX của Đảng diễn ra từ ngày 19 đến ngày 22/4/2001 tại Thủ đô Hà Nội, khi đất nước bước vào thế kỷ XXI sau 15 năm thực hiện đường lối đổi mới.",
    source: "Mục I.1: Bối cảnh lịch sử Đại hội IX"
  },
  {
    id: 2,
    question: "Đại hội IX lần đầu tiên xác định mô hình kinh tế tổng quát của Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
    options: [
      "Nền kinh tế kế hoạch hóa tập trung quan liêu bao cấp",
      "Nền kinh tế thị trường tự do tư bản chủ nghĩa",
      "Nền kinh tế thị trường định hướng xã hội chủ nghĩa",
      "Nền kinh tế nhiều thành phần dựa trên sở hữu tư nhân"
    ],
    correctIndex: 2,
    explanation: "Đại hội IX xác định thực hiện nhất quán và lâu dài nền kinh tế thị trường định hướng xã hội chủ nghĩa, coi đây là mô hình kinh tế tổng quát của Việt Nam trong thời kỳ quá độ lên CNXH.",
    source: "Mục I.2.4: Xác định nền kinh tế thị trường định hướng XHCN"
  },
  {
    id: 3,
    question: "Nghị quyết số 05-NQ/TW ngày 24/9/2001 của Hội nghị Trung ương 3 khóa IX tập trung vào vấn đề trọng tâm nào?",
    options: [
      "Sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước",
      "Khuyến khích và bảo hộ kinh tế tư nhân phát triển",
      "Đổi mới chính sách pháp luật về quản lý đất đai",
      "Chiến lược công tác đối với người Việt Nam ở nước ngoài"
    ],
    correctIndex: 0,
    explanation: "Ngày 24/9/2001, Hội nghị TW 3 khóa IX ban hành Nghị quyết số 05-NQ/TW về tiếp tục sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước.",
    source: "Mục I.3.1: Đổi mới, phát triển và nâng cao hiệu quả DNNN"
  },
  {
    id: 4,
    question: "Chùm 3 Nghị quyết về Đại đoàn kết toàn dân tộc (NQ 23), Công tác dân tộc (NQ 24) và Công tác tôn giáo (NQ 25) được ban hành vào ngày tháng năm nào?",
    options: [
      "Ngày 24/9/2001",
      "Ngày 12/3/2003",
      "Ngày 26/3/2004",
      "Ngày 18/4/2006"
    ],
    correctIndex: 1,
    explanation: "Ngày 12/3/2003, Hội nghị Trung ương 7 khóa IX đã ban hành 3 nghị quyết chuyên đề lịch sử: NQ 23 về đại đoàn kết, NQ 24 về công tác dân tộc và NQ 25 về công tác tôn giáo.",
    source: "Mục I.3.5: Phát huy sức mạnh đại đoàn kết toàn dân tộc"
  },
  {
    id: 5,
    question: "Đại hội X (2006) đã tổng kết 20 năm đổi mới đất nước (1986–2006) và rút ra bao nhiêu bài học lớn?",
    options: [
      "3 bài học lớn",
      "4 bài học lớn",
      "5 bài học lớn",
      "6 bài học lớn"
    ],
    correctIndex: 2,
    explanation: "Đại hội X đã đúc kết 5 bài học lớn sau 20 năm đổi mới: (1) Kiên định mục tiêu độc lập dân tộc và CNXH; (2) Đổi mới toàn diện, đồng bộ, có kế thừa; (3) Đổi mới vì lợi ích của nhân dân; (4) Phát huy nội lực kết hợp ngoại lực; (5) Nâng cao năng lực lãnh đạo của Đảng.",
    source: "Mục II.2.2: Tổng kết 20 năm đổi mới và rút ra năm bài học lớn"
  },
  {
    id: 6,
    question: "Một trong những nội dung đổi mới tư duy có tính đột phá lớn tại Đại hội X về xây dựng Đảng là gì?",
    options: [
      "Bắt buộc toàn bộ cán bộ phải là chuyên gia kinh tế",
      "Cho phép đảng viên làm kinh tế tư nhân, kể cả kinh tế tư bản tư nhân",
      "Xóa bỏ hoàn toàn hình thức kinh tế tập thể",
      "Tách rời công tác tư tưởng khỏi sự lãnh đạo của Đảng"
    ],
    correctIndex: 1,
    explanation: "Đại hội X quyết định: Cho phép đảng viên làm kinh tế tư nhân, kể cả kinh tế tư bản tư nhân, trên cơ sở tuân thủ Điều lệ Đảng và pháp luật của Nhà nước.",
    source: "Mục II.2.4: Xây dựng, chỉnh đốn Đảng – nhiệm vụ then chốt thứ nhất"
  },
  {
    id: 7,
    question: "Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO) vào ngày tháng năm nào?",
    options: [
      "Ngày 19/4/2001",
      "Ngày 25/4/2006",
      "Ngày 11/01/2007",
      "Ngày 09/02/2007"
    ],
    correctIndex: 2,
    explanation: "Ngày 11/1/2007, Việt Nam chính thức trở thành thành viên thứ 150 của WTO, đánh dấu bước hội nhập sâu rộng toàn diện vào nền kinh tế thế giới.",
    source: "Mục II.3.3.c: Đẩy mạnh hội nhập kinh tế quốc tế"
  },
  {
    id: 8,
    question: "Nghị quyết số 09-NQ/TW ngày 09/02/2007 về Chiến lược biển Việt Nam đến năm 2020 đề ra mục tiêu kinh tế biển đóng góp bao nhiêu % GDP cả nước?",
    options: [
      "Khoảng 30–35% GDP",
      "Khoảng 40–45% GDP",
      "Khoảng 53–55% GDP",
      "Khoảng 70–75% GDP"
    ],
    correctIndex: 2,
    explanation: "Nghị quyết số 09-NQ/TW xác định phấn đấu đến năm 2020, kinh tế biển đóng góp khoảng 53–55% GDP và 55–60% tổng kim ngạch xuất khẩu cả nước.",
    source: "Mục II.3.3.d & III.1.2: Chiến lược biển Việt Nam đến năm 2020"
  },
  {
    id: 9,
    question: "Theo số liệu tài liệu môn học, Việt Nam chính thức ra khỏi nhóm nước nghèo từ năm nào?",
    options: [
      "Năm 2001",
      "Năm 2006",
      "Năm 2008",
      "Năm 2010"
    ],
    correctIndex: 2,
    explanation: "Theo số liệu trong tài liệu (Session 25), Việt Nam đã chính thức ra khỏi nhóm nước nghèo từ năm 2008, với GDP bình quân đầu người năm 2010 đạt khoảng 1.168 USD.",
    source: "Mục II.4.1: Thành tựu kinh tế Đại hội X"
  },
  {
    id: 10,
    question: "Theo tài liệu, cụm cảng nước sâu nào ở miền Nam đóng vai trò 'siêu cảng' kết nối hàng hóa trực tiếp đi Bắc Mỹ và châu Âu mà không qua trung chuyển?",
    options: [
      "Cảng Tiên Sa (Đà Nẵng)",
      "Cảng Quy Nhơn (Bình Định)",
      "Cụm cảng Cái Mép – Thị Vải (Bà Rịa – Vũng Tàu)",
      "Cảng Bến Thủy (Nghệ An)"
    ],
    correctIndex: 2,
    explanation: "Cụm cảng Cái Mép – Thị Vải (Bà Rịa – Vũng Tàu) được nêu rõ là ví dụ thực tiễn tiêu biểu: cụm cảng nước sâu có vai trò trong vận chuyển hàng hóa xuất nhập khẩu trực tiếp và kết nối thương mại quốc tế.",
    source: "Mục III.2.1 & III.3.1: Hệ thống cảng biển và vận tải biển"
  }
];

