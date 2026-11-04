import { LessonItem, TimelineItem, EvaluationItem } from '../types';

export const congressXContext = {
  timeAndPlace: "Từ ngày 18 đến ngày 25/4/2006 tại Thủ đô Hà Nội",
  theme: "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển.",
  generalSecretary: "Đồng chí Nông Đức Mạnh được bầu lại làm Tổng Bí thư",
  historicalSignificance: "Đại hội diễn ra vào thời điểm đất nước đã trải qua 20 năm thực hiện đường lối đổi mới (1986–2006), đạt được những thành tựu to lớn, có ý nghĩa lịch sử, làm thay đổi toàn diện diện mạo đất nước.",
  internationalContext: {
    title: "Bối cảnh quốc tế",
    points: [
      "Tình hình thế giới và khu vực diễn biến nhanh chóng, đan xen phức tạp và khó lường hơn so với đầu thế kỷ.",
      "Toàn cầu hóa và hội nhập kinh tế quốc tế phát triển với cấp độ sâu rộng hơn, vừa mở rộng thị trường vừa làm gia tăng áp lực cạnh tranh kinh tế.",
      "Cuộc cách mạng khoa học và công nghệ hiện đại tiếp tục tạo nên những bước nhảy vọt trong năng suất và phương thức sản xuất.",
      "Đặt ra yêu cầu cấp bách cho các nước đang phát triển phải nâng cao năng lực cạnh tranh quốc gia và chủ động thích ứng với biến động toàn cầu."
    ],
    analysis: "Bối cảnh quốc tế đòi hỏi Việt Nam không thể dừng lại ở việc mở cửa dè dặt mà phải chủ động và tích cực hội nhập kinh tế quốc tế sâu rộng, hoàn thiện thể chế phù hợp với chuẩn mực và thông lệ quốc tế."
  },
  domesticContext: {
    title: "Bối cảnh trong nước",
    points: [
      "Sau 20 năm đổi mới (1986–2006), đất nước đạt những thành tựu to lớn có ý nghĩa lịch sử: nền kinh tế tăng trưởng liên tục, chính trị - xã hội ổn định vững chắc.",
      "Đời sống nhân dân cải thiện vượt bậc, tỉ lệ hộ nghèo giảm mạnh; vị thế và uy tín của Việt Nam trên trường quốc tế được nâng cao chưa từng có.",
      "Thế và lực của đất nước tăng lên rõ rệt, tích lũy được nhiều kinh nghiệm quý báu về quản lý kinh tế thị trường.",
      "Tuy vậy, tăng trưởng kinh tế còn phụ thuộc nhiều vào thâm dụng vốn và tài nguyên; năng lực cạnh tranh chưa cao; công tác xây dựng Đảng và cải cách hành chính còn nhiều bất cập."
    ],
    analysis: "Thành tựu 20 năm đổi mới chứng minh đường lối đổi mới của Đảng là hoàn toàn đúng đắn. Nhiệm vụ trọng tâm của Đại hội X là đẩy mạnh toàn diện công cuộc đổi mới để sớm đưa đất nước thoát khỏi ngưỡng nghèo kém phát triển."
  }
};

export const congressXLessons: LessonItem[] = [
  {
    number: 1,
    title: "Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội",
    principle: "Giữ vững định hướng chính trị cốt lõi trên nền tảng chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh",
    content: "Trong bất kỳ hoàn cảnh nào, quá trình đổi mới phải luôn kiên định lý tưởng độc lập dân tộc gắn liền với CNXH; kiên định nền tảng tư tưởng Mác - Lênin và tư tưởng Hồ Chí Minh, không dao động, mơ hồ trước những biến động thời cuộc.",
    analysis: "Đây là nguyên tắc sống còn bảo đảm sự nhất quán về mục tiêu và bản chất của chế độ, định hướng cho mọi chính sách kinh tế - xã hội luôn phục vụ lợi ích tối cao của quốc gia, dân tộc."
  },
  {
    number: 2,
    title: "Đổi mới toàn diện, đồng bộ, có kế thừa, có bước đi phù hợp",
    principle: "Đổi mới có nguyên tắc, phương pháp luận khoa học và lộ trình thận trọng",
    content: "Đổi mới phải được tiến hành đồng bộ trên tất cả các lĩnh vực từ kinh tế, chính trị đến văn hóa, xã hội; kế thừa tinh hoa quá khứ đồng thời dũng cảm từ bỏ những gì lạc hậu, không nóng vội chủ quan cũng không bảo thủ trì trệ.",
    analysis: "Bài học bảo đảm công cuộc đổi mới diễn ra vững chắc, giữ vững ổn định chính trị - xã hội làm tiền đề phát triển kinh tế, tránh các cú sốc gây tổn hại tới đất nước."
  },
  {
    number: 3,
    title: "Đổi mới phải vì lợi ích của nhân dân, dựa vào nhân dân",
    principle: "Lấy dân làm gốc, xuất phát từ thực tiễn và nhạy bén với cái mới",
    content: "Nhân dân vừa là chủ thể sáng tạo vừa là người thụ hưởng thành quả đổi mới. Mọi chủ trương, chính sách của Đảng và pháp luật của Nhà nước phải thực sự xuất phát từ nguyện vọng chính đáng, quyền lợi thiết thực của nhân dân.",
    analysis: "Khẳng định chân lý 'Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong'; sức mạnh của Đảng bắt nguồn từ niềm tin và sự ủng hộ tuyệt đối của nhân dân."
  },
  {
    number: 4,
    title: "Phát huy nội lực, kết hợp với ngoại lực trong điều kiện mới",
    principle: "Sức mạnh dân tộc kết hợp với sức mạnh thời đại",
    content: "Nội lực giữ vai trò quyết định hàng đầu (con người, tài nguyên, truyền thống, nguồn vốn trong nước), đồng thời tranh thủ tối đa ngoại lực (FDI, công nghệ tiên tiến, kinh nghiệm quản lý, thị trường toàn cầu) để tạo nên sức mạnh tổng hợp.",
    analysis: "Giúp đất nước vừa giữ vững tính độc lập tự chủ kinh tế, vừa hội nhập thành công và tận dụng hiệu quả các nguồn lực quốc tế để tăng tốc phát triển."
  },
  {
    number: 5,
    title: "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng",
    principle: "Xây dựng Đảng trong sạch, vững mạnh, bảo đảm quyền lực thuộc về nhân dân",
    content: "Sự lãnh đạo đúng đắn của Đảng là nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam. Phải thường xuyên tự chỉnh đốn, nâng cao bản lĩnh trí tuệ, kiên quyết chống quan liêu, tham nhũng, lãng phí và suy thoái đạo đức lối sống.",
    analysis: "Đảm bảo Đảng ngang tầm nhiệm vụ lịch sử trong giai đoạn kinh tế thị trường và hội nhập sâu rộng, giữ vững bản chất cách mạng của Đảng cầm quyền."
  }
];

export const congressXPillars = [
  {
    id: "bo-sung-nhan-thuc-cnxh",
    title: "Bổ sung và phát triển nhận thức về Chủ nghĩa Xã hội",
    subtitle: "Xác định rõ hơn 8 đặc trưng của xã hội XHCN mà nhân dân ta xây dựng",
    points: [
      "Xã hội dân giàu, nước mạnh, công bằng, dân chủ, văn minh (đưa tiêu chí 'dân chủ' lên trước 'văn minh' thể hiện bước tiến lớn về phát huy quyền làm chủ của nhân dân).",
      "Do nhân dân làm chủ.",
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp.",
      "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
      "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện.",
      "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
      "Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo.",
      "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới."
    ],
    analysis: "Những bổ sung này phản ánh bước phát triển vượt bậc về tư duy lý luận của Đảng, làm rõ mô hình CNXH khoa học, nhân văn, gắn liền thực tiễn phát triển đất nước."
  },
  {
    id: "xay-dung-chinh-don-dang",
    title: "Xây dựng, chỉnh đốn Đảng – Nhiệm vụ then chốt thứ nhất",
    subtitle: "Đổi mới tổ chức, chống tiêu cực và quyết sách đột phá về đảng viên làm kinh tế tư nhân",
    points: [
      "Khẳng định rõ: Đảng là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của cả dân tộc Việt Nam.",
      "Gắn bó máu thịt giữa Đảng với nhân dân, thực hiện cơ chế dân biết, dân bàn, dân làm, dân kiểm tra.",
      "Quyết định lịch sử: Cho phép đảng viên làm kinh tế tư nhân, kể cả kinh tế tư bản tư nhân, trên cơ sở chấp hành nghiêm chỉnh Điều lệ Đảng và pháp luật của Nhà nước.",
      "Đẩy mạnh cuộc vận động xây dựng, chỉnh đốn Đảng, kiên quyết xử lý tham nhũng, suy thoái tư tưởng chính trị, đạo đức, lối sống."
    ],
    analysis: "Việc cho phép đảng viên làm kinh tế tư nhân là một bước giải phóng tư tưởng lớn, khuyến khích mọi nguồn lực xã hội và người đảng viên tiên phong làm giàu chính đáng cho đất nước."
  },
  {
    id: "phat-huy-suc-manh-dan-toc",
    title: "Phát huy sức mạnh toàn dân tộc – Nhiệm vụ then chốt thứ hai",
    subtitle: "Mở rộng tối đa khối đại đoàn kết, xóa bỏ mặc cảm và định kiến quá khứ",
    points: [
      "Đại đoàn kết toàn dân tộc trên nền tảng liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức dưới sự lãnh đạo của Đảng.",
      "Chủ trương mở rộng đoàn kết: Lấy mục tiêu giữ vững độc lập, thống nhất của Tổ quốc, vì dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh làm điểm tương đồng.",
      "Xóa bỏ mặc cảm, định kiến, phân biệt đối xử về quá khứ, thành phần giai cấp; trân trọng mọi ý kiến đóng góp xây dựng đất nước.",
      "Tôn trọng và bảo vệ lợi ích hợp pháp của các giai cấp, tầng lớp xã hội, đồng bào các tôn giáo, đồng bào các dân tộc thiểu số và kiều bào ở nước ngoài."
    ],
    analysis: "Tư tưởng đại đoàn kết của Đại hội X thể hiện tinh thần bao dung văn hóa, hòa hợp dân tộc sâu sắc của Đảng, huy động tối đa trí tuệ và tâm huyết của mọi người con đất Việt."
  },
  {
    id: "day-manh-toan-dien-doi-moi",
    title: "Đẩy mạnh toàn diện công cuộc đổi mới – Nhiệm vụ then chốt thứ ba",
    subtitle: "Hoàn thiện thể chế KTTT, gắn công nghiệp hóa với khoa học công nghệ và hội nhập",
    points: [
      "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, tôn trọng đầy đủ các quy luật khách quan của kinh tế thị trường kết hợp định hướng xã hội.",
      "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức và bảo vệ tài nguyên môi trường.",
      "Chủ động và tích cực hội nhập kinh tế quốc tế sâu rộng theo các cam kết song phương và đa phương.",
      "Xây dựng chiến lược phát triển kinh tế biển bền vững và nâng cao năng lực cạnh tranh quốc gia."
    ],
    analysis: "Nếu Đại hội IX xác định mô hình kinh tế thị trường định hướng XHCN thì Đại hội X đặt trọng tâm vào việc hoàn thiện thể chế vận hành đồng bộ, đưa nền kinh tế vươn ra biển lớn."
  }
];

export const congressXTimeline: TimelineItem[] = [
  {
    id: "x-timeline-1",
    date: "21/08/2006",
    year: "2006",
    title: "Tăng cường sự lãnh đạo của Đảng đối với công tác phòng, chống tham nhũng, lãng phí",
    resolutionCode: "Nghị quyết số 04-NQ/TW (Hội nghị TW 3 khóa X)",
    summary: "Xác định phòng chống tham nhũng, lãng phí là nhiệm vụ trọng yếu, cấp bách hàng đầu của công tác xây dựng Đảng và Nhà nước.",
    analysis: "Đề ra hệ thống giải pháp toàn diện: công khai minh bạch tài sản cán bộ, cải cách cơ chế xin - cho, hoàn thiện hệ thống thanh tra kiểm toán và xử lý nghiêm minh các vụ việc tiêu cực không có vùng cấm.",
    highlights: [
      "Thành lập Ban Chỉ đạo Trung ương về phòng, chống tham nhũng",
      "Kê khai tài sản cán bộ, đảng viên và công khai quy trình thủ tục hành chính",
      "Bảo vệ người tố cáo và xử lý nghiêm minh hành vi tham nhũng, bao che"
    ],
    category: "political"
  },
  {
    id: "x-timeline-2",
    date: "11/01/2007",
    year: "2007",
    title: "Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO)",
    resolutionCode: "Cột mốc Hội nhập Kinh tế Toàn cầu",
    summary: "Sau 11 năm đàm phán kiên trì, Việt Nam chính thức gia nhập WTO, mở toang cánh cửa hội nhập vào thị trường thương mại toàn cầu.",
    analysis: "Đánh dấu bước ngoặt lịch sử: nền kinh tế Việt Nam hoàn toàn tham gia vào sân chơi thương mại bình đẳng quốc tế, thu hút kỷ lục dòng vốn FDI, mở rộng thị trường xuất khẩu sang khắp các châu lục.",
    highlights: [
      "Trở thành thành viên chính thức thứ 150 của WTO từ ngày 11/01/2007",
      "Cam kết cắt giảm thuế quan, mở cửa dịch vụ và minh bạch hóa chính sách kinh tế",
      "Tạo vị thế bình đẳng trong giải quyết tranh chấp thương mại quốc tế"
    ],
    category: "foreign"
  },
  {
    id: "x-timeline-3",
    date: "05/02/2007",
    year: "2007",
    title: "Chủ trương, chính sách lớn phát triển kinh tế nhanh, bền vững khi là thành viên WTO",
    resolutionCode: "Nghị quyết số 08-NQ/TW (Hội nghị TW 4 khóa X)",
    summary: "Chiến lược hành động toàn diện của Đảng nhằm tận dụng tối đa cơ hội và vượt qua thách thức cạnh tranh khi gia nhập WTO.",
    analysis: "Xác định rõ phương châm: tự chủ đi liền với hội nhập; giữ vững ổn định kinh tế vĩ mô; chủ động ứng phó với các cú sốc tài chính toàn cầu và hỗ trợ doanh nghiệp trong nước nâng cao năng lực cạnh tranh.",
    highlights: [
      "Hoàn thiện hệ thống pháp luật kinh tế tương thích với các quy định WTO",
      "Nâng cao năng lực cạnh tranh của doanh nghiệp, sản phẩm và dịch vụ Việt Nam",
      "Chủ động phòng ngừa rủi ro tài chính, bảo đảm an ninh lương thực và an sinh xã hội"
    ],
    category: "economic"
  },
  {
    id: "x-timeline-4",
    date: "09/02/2007",
    year: "2007",
    title: "Ban hành Nghị quyết về Chiến lược biển Việt Nam đến năm 2020",
    resolutionCode: "Nghị quyết số 09-NQ/TW (Hội nghị TW 4 khóa X)",
    summary: "Quyết sách lịch sử xác định mục tiêu đưa Việt Nam trở thành quốc gia mạnh về biển, làm giàu từ biển, bảo vệ vững chắc chủ quyền biển đảo.",
    analysis: "Nghị quyết xác định vị trí địa chính trị và địa kinh tế sống còn của biển Đông; đề ra mục tiêu đến năm 2020 kinh tế biển đóng góp 53–55% GDP và 55–60% tổng kim ngạch xuất khẩu cả nước.",
    highlights: [
      "Mục tiêu: Đưa nước ta trở thành quốc gia mạnh về biển, làm giàu từ biển",
      "Chỉ tiêu: Kinh tế biển đóng góp 53–55% GDP, 55–60% kim ngạch xuất khẩu đến 2020",
      "Kết hợp chặt chẽ phát triển kinh tế với củng cố quốc phòng, an ninh trên biển"
    ],
    category: "maritime"
  },
  {
    id: "x-timeline-5",
    date: "30/07/2007",
    year: "2007",
    title: "Tăng cường công tác kiểm tra, giám sát và đổi mới phương thức lãnh đạo của Đảng",
    resolutionCode: "Nghị quyết 14-NQ/TW & 15-NQ/TW (Hội nghị TW 5 khóa X)",
    summary: "Đổi mới phương thức lãnh đạo, khắc phục tình trạng Đảng bao biện làm thay hoặc buông lỏng lãnh đạo.",
    analysis: "NQ 14 tăng cường tính kỷ luật kỷ cương trong Đảng; NQ 15 xác lập nguyên tắc lãnh đạo thông qua cương lĩnh, đường lối, công tác cán bộ và phát huy dân chủ cơ sở, đẩy mạnh phân cấp phân quyền gắn liền trách nhiệm người đứng đầu.",
    highlights: [
      "NQ 14-NQ/TW: Kiểm tra có trọng tâm, trọng điểm, ngăn chặn suy thoái từ sớm",
      "NQ 15-NQ/TW: Khắc phục tình trạng Đảng bao biện, làm thay cơ quan nhà nước",
      "Đề cao nguyên tắc tập trung dân chủ và mở rộng dân chủ trong sinh hoạt Đảng"
    ],
    category: "political"
  },
  {
    id: "x-timeline-6",
    date: "Tháng 01/2008",
    year: "2008",
    title: "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN & Xây dựng Giai cấp công nhân",
    resolutionCode: "Nghị quyết 20-NQ/TW & 21-NQ/TW (Hội nghị TW 6 khóa X)",
    summary: "NQ 20 chăm lo phát triển giai cấp công nhân hiện đại; NQ 21 hoàn thiện thể chế KTTT tôn trọng quy luật thị trường và thông lệ quốc tế.",
    analysis: "NQ 21 là bước tiến lớn: thừa nhận các quy luật kinh tế thị trường là khách quan; Nhà nước định hướng và kiến tạo phát triển thông qua pháp luật và công cụ vĩ mô chứ không can thiệp thô bạo bằng mệnh lệnh hành chính.",
    highlights: [
      "NQ 20-NQ/TW: Xây dựng giai cấp công nhân vững mạnh thời kỳ đẩy mạnh CNH, HĐH",
      "NQ 21-NQ/TW: Tôn trọng đầy đủ các quy luật thị trường và chuẩn mực quốc tế",
      "Cải cách chính sách tiền lương, bảo hiểm xã hội giai đoạn 2008–2012"
    ],
    category: "economic"
  },
  {
    id: "x-timeline-7",
    date: "25/07 - 06/08/2008",
    year: "2008",
    title: "Phát triển Nông nghiệp - Nông dân - Nông thôn, Công tác Thanh niên và Đội ngũ Trí thức",
    resolutionCode: "Chùm Nghị quyết Hội nghị TW 7 khóa X (NQ 25, 26, 27-NQ/TW)",
    summary: "Quyết sách mang tính toàn diện về ba trụ cột nguồn lực quốc gia: Nông thôn 'Tam nông', Thế hệ trẻ thanh niên và Đội ngũ trí thức.",
    analysis: "Nghị quyết 'Tam nông' mở đường cho chương trình mục tiêu quốc gia xây dựng nông thôn mới; NQ 25 coi thanh niên là rường cột nước nhà; NQ 27 khẳng định trí thức là lực lượng nòng cốt sáng tạo kinh tế tri thức.",
    highlights: [
      "Nghị quyết 'Tam nông': Phát triển toàn diện nông nghiệp sinh thái, nông thôn hiện đại",
      "NQ 25-NQ/TW (25/7/2008): Tăng cường sự lãnh đạo của Đảng đối với công tác thanh niên",
      "NQ 27-NQ/TW (06/8/2008): Xây dựng đội ngũ trí thức trong thời kỳ CNH, HĐH đất nước"
    ],
    category: "social"
  }
];

export const congressXStats = [
  {
    id: "gdp-growth",
    metric: "~7% / năm",
    label: "Tốc độ tăng trưởng GDP bình quân",
    description: "Kinh tế duy trì mức tăng trưởng ấn tượng trong giai đoạn 2006–2010 dù chịu ảnh hưởng nặng nề từ cuộc khủng hoảng tài chính toàn cầu 2008."
  },
  {
    id: "gdp-per-capita",
    metric: "1.168 USD",
    label: "GDP bình quân đầu người năm 2010",
    description: "Tăng trưởng nhảy vọt so với các năm trước, nâng cao rõ rệt mức sống thực tế của người dân trên cả nước."
  },
  {
    id: "poverty-exit",
    metric: "Năm 2008",
    label: "Chính thức ra khỏi nhóm nước nghèo",
    description: "Việt Nam vươn lên trở thành quốc gia đang phát triển có thu nhập trung bình thấp, được Liên Hợp Quốc đánh giá là điểm sáng xóa đói giảm nghèo."
  },
  {
    id: "trade-relations",
    metric: "230 quốc gia",
    label: "Quan hệ giao thương quốc tế (2010)",
    description: "Thương mại đối ngoại phủ rộng khắp các châu lục; trong đó Hoa Kỳ và Trung Quốc là hai đối tác thương mại đặc biệt quan trọng."
  },
  {
    id: "fdi-inflow",
    metric: "6,84 → 19,88 tỷ USD",
    label: "Dòng vốn FDI (2005 so với 2010)",
    description: "Dòng vốn đầu tư trực tiếp nước ngoài tăng gấp gần 3 lần sau khi Việt Nam gia nhập WTO, khẳng định sức hút đầu tư mạnh mẽ của đất nước."
  }
];

export const congressXEvaluation: {
  results: EvaluationItem;
  limitations: EvaluationItem;
  significance: EvaluationItem;
} = {
  results: {
    title: "Thành tựu nổi bật nhiệm kỳ Đại hội X (2006–2010)",
    points: [
      "Về kinh tế: Tăng trưởng GDP bình quân đạt ~7%/năm, GDP bình quân đầu người đạt 1.168 USD vào năm 2010; đất nước chính thức vượt qua ngưỡng nước nghèo kém phát triển từ năm 2008.",
      "Về hội nhập và đầu tư: Gia nhập WTO (11/01/2007); có quan hệ thương mại với 230 quốc gia và vùng lãnh thổ; dòng vốn FDI tăng vọt từ 6,84 tỷ USD (2005) lên 19,88 tỷ USD (2010).",
      "Về chiến lược biển: Ban hành Nghị quyết 09-NQ/TW (2007) mở ra kỷ nguyên mới trong khai thác tiềm năng biển gắn liền quốc phòng an ninh.",
      "Về hoàn thiện thể chế: Ban hành hệ thống nghị quyết đồng bộ về phòng chống tham nhũng, đổi mới phương thức lãnh đạo, cải cách tiền lương, công nhân, thanh niên, trí thức và 'Tam nông'."
    ],
    analysis: "Nhiệm kỳ Đại hội X ghi dấu ấn đậm nét về khả năng chèo lái nền kinh tế vượt qua tâm bão khủng hoảng tài chính toàn cầu 2008, mở rộng bang giao quốc tế và nâng cao tầm vóc của đất nước."
  },
  limitations: {
    title: "Hạn chế và thách thức",
    points: [
      "Chất lượng tăng trưởng, năng suất lao động và sức cạnh tranh của nền kinh tế vẫn chưa tương xứng với tiềm năng to lớn của đất nước.",
      "Hiệu quả sử dụng một số nguồn lực quốc gia (đất đai, vốn đầu tư công, khoáng sản) còn hạn chế; nguy cơ lãng phí chưa được đẩy lùi triệt để.",
      "Nền kinh tế chịu tác động tiêu cực, kéo dài từ cuộc khủng hoảng tài chính và suy thoái kinh tế toàn cầu 2008 (lạm phát từng thời điểm tăng cao).",
      "Áp lực bảo vệ môi trường, biến đổi khí hậu và yêu cầu phát triển bền vững ngày càng trở nên gay gắt và cấp thiết hơn bao giờ hết."
    ],
    analysis: "Mô hình tăng trưởng chủ yếu theo chiều rộng bộc lộ giới hạn rõ ràng, đặt ra yêu cầu tái cơ cấu nền kinh tế và chuyển đổi mô hình tăng trưởng cho giai đoạn tiếp theo."
  },
  significance: {
    title: "Ý nghĩa lịch sử Đại hội X",
    points: [
      "Khẳng định bản lĩnh và sự đúng đắn của 20 năm công cuộc đổi mới (1986–2006), đúc kết 5 bài học lớn có giá trị chỉ đạo lâu dài.",
      "Tạo bước ngoặt đưa Việt Nam chính thức hòa mạng kinh tế toàn cầu (WTO), xác lập vị thế quốc tế mới vững chắc và độc lập.",
      "Đặt nền móng chiến lược toàn diện cho thế kỷ biển thông qua Nghị quyết số 09-NQ/TW về Chiến lược biển Việt Nam đến năm 2020.",
      "Hoàn thiện nhận thức về chủ nghĩa xã hội và kiên định mục tiêu đưa đất nước phát triển nhanh, bền vững, lấy nhân dân làm trung tâm."
    ],
    analysis: "Đại hội X là dấu mốc đưa đất nước bước qua ngưỡng kém phát triển, mở ra thời kỳ mới - thời kỳ đẩy mạnh toàn diện công cuộc đổi mới và hội nhập quốc tế sâu sắc."
  }
};

