import { PillarContent, TimelineItem, EvaluationItem } from '../types';

export const congressIXContext = {
  timeAndPlace: "Từ ngày 19 đến ngày 22/4/2001 tại Thủ đô Hà Nội",
  historicalSignificance: "Đại hội diễn ra vào thời điểm đất nước bước vào thế kỷ XXI, sau 15 năm thực hiện đường lối đổi mới (1986–2001), mở ra thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước.",
  internationalContext: {
    title: "Bối cảnh quốc tế",
    points: [
      "Cuộc cách mạng khoa học – công nghệ phát triển bùng nổ, thúc đẩy mạnh mẽ sự hình thành và phát triển của nền kinh tế tri thức.",
      "Quá trình toàn cầu hóa diễn ra sâu rộng, làm biến đổi căn bản quan hệ kinh tế quốc tế và gia tăng tính phụ thuộc lẫn nhau giữa các quốc gia.",
      "Khu vực châu Á – Thái Bình Dương trở thành trung tâm phát triển kinh tế năng động nhưng vẫn tiềm ẩn nhiều nhân tố phức tạp, khó lường.",
      "Mở ra cơ hội lớn để Việt Nam thu hút nguồn vốn đầu tư, tiếp cận công nghệ cao và hội nhập sâu hơn vào thị trường toàn cầu.",
      "Đồng thời tạo ra sức ép cạnh tranh khốc liệt đối với các nước đang phát triển có xuất phát điểm thấp như Việt Nam."
    ],
    analysis: "Bối cảnh quốc tế đặt ra yêu cầu sống còn: Việt Nam phải chủ động thích ứng với xu thế toàn cầu hóa, đổi mới tư duy kinh tế, nâng cao năng lực cạnh tranh và đẩy mạnh CNH - HĐH nhằm hạn chế nguy cơ tụt hậu xa hơn về kinh tế."
  },
  domesticContext: {
    title: "Bối cảnh trong nước",
    points: [
      "Sau 15 năm đổi mới (1986–2001), Việt Nam đạt được nhiều thành tựu to lớn: thoát khỏi khủng hoảng kinh tế - xã hội trầm trọng, chính trị ổn định.",
      "Nền kinh tế từng bước chuyển sang vận hành theo cơ chế thị trường định hướng XHCN có sự quản lý của Nhà nước.",
      "Đời sống vật chất, văn hóa và tinh thần của các tầng lớp nhân dân được cải thiện rõ rệt; vị thế đối ngoại được nâng cao.",
      "Tuy nhiên, một số chỉ tiêu quan trọng của Đại hội VIII (1996) chưa đạt được theo kỳ vọng ban đầu.",
      "Bốn nguy cơ lớn (tụt hậu xa hơn về kinh tế, chệch hướng XHCN, tham nhũng lãng phí, 'diễn biến hòa bình') được Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII (1994) chỉ ra vẫn là thách thức gay gắt."
    ],
    analysis: "Thành tựu 15 năm đổi mới là nền tảng vững chắc, song các tồn tại về chất lượng tăng trưởng, hiệu quả sử dụng nguồn lực và rào cản thể chế đòi hỏi Đảng phải bổ sung, hoàn thiện đường lối lý luận và xác lập chiến lược phát triển dài hạn cho thập niên đầu thế kỷ XXI."
  }
};

export const congressIXPillars: PillarContent[] = [
  {
    id: "tong-ket-the-ky-20",
    index: 1,
    title: "Tổng kết thế kỷ XX và xác định phương hướng phát triển đất nước",
    summary: "Nhìn lại chặng đường cách mạng vẻ vang của dân tộc trong thế kỷ XX, đúc kết bài học lịch sử và khẳng định vững chắc con đường XHCN.",
    details: [
      "Đánh giá sâu sắc những biến đổi lớn lao của thời đại và chặng đường đấu tranh cách mạng oanh liệt của nhân dân ta dưới sự lãnh đạo của Đảng trong thế kỷ XX.",
      "Tiếp tục khẳng định vững chắc con đường phát triển tất yếu của cách mạng Việt Nam: độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
      "Xác định rõ hơn nội dung cốt lõi của tư tưởng Hồ Chí Minh: làm sáng tỏ nền tảng tư tưởng và kim chỉ nam cho mọi hành động của toàn Đảng, toàn quân, toàn dân trong kỷ nguyên mới."
    ],
    analysis: "Việc tổng kết lịch sử giúp kế thừa trọn vẹn những giá trị và thành tựu cách mạng, rút ra quy luật phát triển phù hợp với thực tiễn Việt Nam, khẳng định sự kiên định lý tưởng cách mạng trước những biến động địa chính trị toàn cầu.",
    tag: "Tư tưởng & Định hướng"
  },
  {
    id: "chien-luoc-ktxh-2001-2010",
    index: 2,
    title: "Thông qua Chiến lược phát triển kinh tế – xã hội 2001–2010",
    summary: "Xác định mục tiêu đưa đất nước ra khỏi tình trạng kém phát triển, tăng gấp đôi GDP vào năm 2010 và tạo nền tảng hiện đại hóa đến năm 2020.",
    details: [
      "Mục tiêu trung tâm: Đưa Việt Nam ra khỏi tình trạng kém phát triển; nâng cao rõ rệt đời sống vật chất, văn hóa, tinh thần của nhân dân.",
      "Chỉ tiêu kinh tế: Phấn đấu tổng sản phẩm trong nước (GDP) năm 2010 tăng gấp đôi so với năm 2000.",
      "Tầm nhìn dài hạn: Tạo nền tảng vững chắc để đến năm 2020 Việt Nam cơ bản trở thành một nước công nghiệp theo hướng hiện đại.",
      "Kế thừa thành tựu Chiến lược 1991–2000 (Đại hội VII): GDP năm 2000 đã tăng gấp đôi so với năm 1990, tạo thế đà bứt phá cho thập niên mới."
    ],
    analysis: "Chiến lược 2001–2010 đánh dấu bước ngoặt tư duy: chuyển mạnh từ giai đoạn giữ vững ổn định kinh tế vượt qua khủng hoảng sang giai đoạn tăng tốc công nghiệp hóa, hiện đại hóa, thu hẹp khoảng cách phát triển với khu vực.",
    tag: "Chiến lược 10 năm"
  },
  {
    id: "con-duong-qua-do-cnxh",
    index: 3,
    title: "Xác định con đường quá độ lên chủ nghĩa xã hội",
    summary: "Khẳng định con đường quá độ bỏ qua chế độ tư bản chủ nghĩa nhưng kế thừa tinh hoa thành tựu văn minh nhân loại.",
    details: [
      "Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội, khẳng định đây là sự lựa chọn duy nhất đúng đắn phù hợp với quy luật lịch sử và ý nguyện nhân dân.",
      "Bỏ qua chế độ tư bản chủ nghĩa: tức là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
      "Tiếp thu, kế thừa có chọn lọc những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản: đặc biệt là thành tựu khoa học – công nghệ, kinh nghiệm tổ chức quản lý sản xuất hiện đại và phát triển kinh tế thị trường."
    ],
    analysis: "Đây là bước đột phá lý luận của Đảng: khắc phục tư duy giáo điều, cực đoan phủ định sạch trơn; mở đường cho việc ứng dụng khoa học công nghệ, thị trường và quản trị tiên tiến vào công cuộc kiến thiết đất nước.",
    tag: "Đột phá lý luận"
  },
  {
    id: "kinh-te-thi-truong-xhcn",
    index: 4,
    title: "Kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát",
    summary: "Bước ngoặt lịch sử khi Đảng lần đầu tiên khẳng định kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát trong thời kỳ quá độ.",
    details: [
      "Khẳng định thực hiện nhất quán, lâu dài chính sách phát triển nền kinh tế nhiều thành phần, nhiều hình thức sở hữu, nhiều hình thức phân phối.",
      "Nền kinh tế vận hành theo quy luật thị trường, có sự quản lý chặt chẽ của Nhà nước pháp quyền xã hội chủ nghĩa dưới sự lãnh đạo của Đảng.",
      "Mục tiêu tối thượng: Dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh; giải phóng tối đa sức sản xuất, gắn kết tăng trưởng kinh tế với tiến bộ và công bằng xã hội ngay trong từng bước đi."
    ],
    analysis: "Đây là cống hiến lý luận quan trọng bậc nhất của Đại hội IX: bác bỏ quan niệm coi kinh tế thị trường đồng nhất với chủ nghĩa tư bản; coi thị trường là công cụ hữu hiệu để giải phóng lực lượng sản xuất phụng sự nhân dân.",
    tag: "Mô hình tổng quát"
  },
  {
    id: "van-hoa-dai-doan-ket",
    index: 5,
    title: "Phát triển văn hóa và phát huy sức mạnh đại đoàn kết toàn dân tộc",
    summary: "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu vừa là động lực; phát huy khối đại đoàn kết các giai cấp, tầng lớp nhân dân.",
    details: [
      "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; xem văn hóa là nền tảng tinh thần của xã hội, mục tiêu và động lực thúc đẩy phát triển.",
      "Nhận thức mới về cơ cấu xã hội: Quan hệ giữa các giai cấp, tầng lớp xã hội là quan hệ hợp tác và đấu tranh trong nội bộ nhân dân, cùng chung lợi ích xây dựng và bảo vệ Tổ quốc.",
      "Phát huy dân chủ xã hội chủ nghĩa, củng cố Mặt trận Tổ quốc và các đoàn thể nhân dân, lấy mục tiêu dân giàu nước mạnh làm điểm tương đồng gắn kết."
    ],
    analysis: "Quan điểm này khẳng định phát triển kinh tế không tách rời tiến bộ văn hóa và con người; đại đoàn kết toàn dân tộc là sức mạnh nội sinh vô địch đảm bảo mọi thắng lợi của sự nghiệp đổi mới.",
    tag: "Văn hóa & Xã hội"
  },
  {
    id: "doi-ngoai-va-hoi-nhap",
    index: 6,
    title: "Mở rộng quan hệ đối ngoại và chủ động hội nhập quốc tế",
    summary: "Khẳng định đường lối đối ngoại độc lập, tự chủ, đa phương hóa, đa dạng hóa; Việt Nam sẵn sàng là bạn, là đối tác tin cậy của cộng đồng quốc tế.",
    details: [
      "Tuyên ngôn đối ngoại mới: 'Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế, phấn đấu vì hòa bình, độc lập và phát triển'.",
      "Thực hiện nhất quán đường lối đối ngoại độc lập, tự chủ, hòa bình, hợp tác và phát triển; đa phương hóa, đa dạng hóa các quan hệ quốc tế.",
      "Tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ, không can thiệp vào công việc nội bộ của nhau; bình đẳng và cùng có lợi."
    ],
    analysis: "Nâng tầm đối ngoại từ 'muốn là bạn' (Đại hội VII, VIII) lên 'sẵn sàng là bạn, là đối tác tin cậy' (Đại hội IX) tạo xung lực đột phá mở rộng thị trường, thu hút đầu tư, tranh thủ công nghệ và nâng tầm vị thế quốc tế của đất nước.",
    tag: "Hội nhập quốc tế"
  }
];

export const congressIXTimeline: TimelineItem[] = [
  {
    id: "ix-timeline-1",
    date: "24/09/2001",
    year: "2001",
    title: "Đổi mới, phát triển và nâng cao hiệu quả Doanh nghiệp Nhà nước (DNNN)",
    resolutionCode: "Nghị quyết số 05-NQ/TW (Hội nghị TW 3 khóa IX)",
    summary: "Tiếp tục sắp xếp, đổi mới, phát triển và nâng cao hiệu quả doanh nghiệp nhà nước nhằm khẳng định vai trò chủ đạo của kinh tế nhà nước.",
    analysis: "Cụ thể hóa đường lối kinh tế thị trường định hướng XHCN, cơ cấu lại DNNN theo hướng tập trung vào các ngành then chốt, đổi mới mô hình quản trị doanh nghiệp, xóa bỏ bao cấp và nâng cao sức cạnh tranh lành mạnh trên thị trường.",
    highlights: [
      "Sắp xếp, cơ cấu lại danh mục doanh nghiệp nhà nước nắm giữ 100% vốn",
      "Đẩy mạnh cổ phần hóa các doanh nghiệp không cần nắm giữ cổ phần chi phối",
      "Tách bạch chức năng quản lý nhà nước và chức năng đại diện chủ sở hữu vốn tại doanh nghiệp"
    ],
    category: "economic"
  },
  {
    id: "ix-timeline-2",
    date: "Tháng 03/2002",
    year: "2002",
    title: "Đổi mới và nâng cao hiệu quả kinh tế tập thể",
    resolutionCode: "Hội nghị Trung ương 5 khóa IX",
    summary: "Thống nhất nhận thức về bản chất kinh tế tập thể, đổi mới mô hình hợp tác xã kiểu mới phù hợp cơ chế thị trường.",
    analysis: "Khắc phục triệt để mô hình HTX kiểu cũ bao cấp, kém hiệu quả; xây dựng môi trường thể chế và tâm lý xã hội cởi mở, tạo điều kiện thuận lợi cho kinh tế tập thể phát triển đa dạng trong nông nghiệp, thủ công nghiệp và dịch vụ.",
    highlights: [
      "Tôn trọng nguyên tắc tự nguyện, dân chủ, bình đẳng và cùng có lợi",
      "Khuyến khích liên kết kinh tế giữa hộ nông dân, HTX và doanh nghiệp",
      "Hỗ trợ chính sách về tín dụng, khoa học công nghệ và đào tạo cán bộ HTX"
    ],
    category: "economic"
  },
  {
    id: "ix-timeline-3",
    date: "Tháng 03/2002",
    year: "2002",
    title: "Đổi mới cơ chế, chính sách khuyến khích phát triển kinh tế tư nhân",
    resolutionCode: "Hội nghị Trung ương 5 khóa IX",
    summary: "Xác lập nhận thức mang tính bước ngoặt: Kinh tế tư nhân là bộ phận cấu thành quan trọng và là vấn đề chiến lược lâu dài.",
    analysis: "Xóa bỏ mọi định kiến và rào cản xã hội đối với khu vực tư nhân; tạo lập hành lang pháp lý bình đẳng để kinh tế tư nhân huy động vốn, kinh doanh, giải quyết công ăn việc làm và trở thành động lực tăng trưởng năng động của nền kinh tế.",
    highlights: [
      "Khẳng định kinh tế tư nhân là bộ phận cấu thành quan trọng của nền kinh tế quốc dân",
      "Phát triển kinh tế tư nhân là vấn đề mang tính chiến lược lâu dài",
      "Bảo đảm quyền tự do kinh doanh và quyền sở hữu tài sản hợp pháp của công dân"
    ],
    category: "economic"
  },
  {
    id: "ix-timeline-4",
    date: "Tháng 03/2003",
    year: "2003",
    title: "Đổi mới chính sách, pháp luật về đất đai trong thời kỳ đẩy mạnh CNH, HĐH",
    resolutionCode: "Hội nghị Trung ương 7 khóa IX",
    summary: "Hoàn thiện nhận thức về đất đai: Tài nguyên quý giá, TLSX đặc biệt, thuộc sở hữu toàn dân do Nhà nước đại diện quản lý.",
    analysis: "Khẳng định quyền sử dụng đất là hàng hóa đặc biệt; kiên quyết không thừa nhận việc đòi lại đất đã giao; thiết lập khung khổ pháp lý cho việc ban hành Luật Đất đai năm 2003, tạo nguồn lực tài chính lớn từ đất đai phục vụ phát triển hạ tầng và công nghiệp hóa.",
    highlights: [
      "Đất đai là tài nguyên quốc gia vô cùng quý giá, thuộc sở hữu toàn dân",
      "Quyền sử dụng đất là hàng hóa đặc biệt được tham gia thị trường",
      "Nhà nước thực hiện giao đất, cho thuê đất và điều tiết địa tô chênh lệch hợp lý"
    ],
    category: "economic"
  },
  {
    id: "ix-timeline-5",
    date: "12/03/2003",
    year: "2003",
    title: "Ban hành chùm 3 Nghị quyết về Đại đoàn kết, Dân tộc và Tôn giáo",
    resolutionCode: "Nghị quyết 23, 24, 25-NQ/TW (Hội nghị TW 7 khóa IX)",
    summary: "Khẳng định khối đại đoàn kết toàn dân tộc là động lực chủ yếu và nhân tố có ý nghĩa quyết định thắng lợi của công cuộc đổi mới.",
    analysis: "NQ 23 xác định mục tiêu 'Dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh' làm điểm hội tụ đại đoàn kết; NQ 24 khẳng định công tác dân tộc là vấn đề chiến lược; NQ 25 ghi nhận tín ngưỡng, tôn giáo là nhu cầu tinh thần chính đáng của nhân dân.",
    highlights: [
      "NQ 23-NQ/TW: Phát huy sức mạnh đại đoàn kết toàn dân tộc vì mục tiêu dân tộc",
      "NQ 24-NQ/TW: Chiến lược công tác dân tộc, phát triển miền núi toàn diện",
      "NQ 25-NQ/TW: Tôn trọng tự do tín ngưỡng, đoàn kết các tôn giáo yêu nước"
    ],
    category: "social"
  },
  {
    id: "ix-timeline-6",
    date: "26/03/2004",
    year: "2004",
    title: "Nghị quyết về công tác đối với người Việt Nam ở nước ngoài",
    resolutionCode: "Nghị quyết số 36-NQ/TW của Bộ Chính trị khóa IX",
    summary: "Cộng đồng người Việt Nam ở nước ngoài là bộ phận không tách rời và là một nguồn lực của cộng đồng dân tộc Việt Nam.",
    analysis: "Xóa bỏ mặc cảm, định kiến hẹp hòi; khẳng định Đảng và Nhà nước luôn mở rộng vòng tay, bảo vệ quyền lợi hợp pháp, tạo cơ chế thông thoáng khuyến khích kiều bào đóng góp tri thức, khoa học kỹ thuật và vốn đầu tư về xây dựng quê hương.",
    highlights: [
      "Khẳng định kiều bào là bộ phận không thể tách rời của dân tộc Việt Nam",
      "Tạo điều kiện thuận lợi về xuất nhập cảnh, cư trú, quyền mua nhà và đầu tư",
      "Phát huy vai trò cầu nối văn hóa và thương mại quốc tế của cộng đồng kiều bào"
    ],
    category: "foreign"
  }
];

export const congressIXEvaluation: {
  results: EvaluationItem;
  limitations: EvaluationItem;
  significance: EvaluationItem;
} = {
  results: {
    title: "Kết quả đạt được (2001–2005)",
    points: [
      "Tư duy lý luận về kinh tế thị trường định hướng XHCN được xác lập nhất quán, giải phóng mạnh mẽ sức sản xuất xã hội.",
      "Khu vực kinh tế nhà nước được sắp xếp tinh gọn hơn; kinh tế tập thể và đặc biệt là kinh tế tư nhân có bước phát triển bứt phá ngoạn mục.",
      "Chính sách đất đai được đổi mới căn bản (Luật Đất đai 2003), tạo cơ sở pháp lý huy động nguồn lực to lớn cho phát triển kinh tế.",
      "Khối đại đoàn kết toàn dân tộc được củng cố vững chắc thông qua chùm nghị quyết về đoàn kết, công tác dân tộc, tôn giáo và kiều bào.",
      "Quan hệ đối ngoại được mở rộng mạnh mẽ, đẩy nhanh tiến trình đàm phán gia nhập WTO và các định chế kinh tế toàn cầu."
    ],
    analysis: "Giai đoạn 2001–2005 đã chuyển hóa hiệu quả các định hướng của Đại hội IX thành hệ thống nghị quyết chuyên đề đồng bộ, tạo xung lực to lớn đưa đất nước vươn mình sau khủng hoảng tài chính châu Á 1997."
  },
  limitations: {
    title: "Hạn chế còn tồn tại",
    points: [
      "Chất lượng tăng trưởng kinh tế, năng suất lao động và sức cạnh tranh quốc tế của nền kinh tế vẫn còn ở mức thấp.",
      "Hiệu quả sử dụng các nguồn lực xã hội, vốn đầu tư công và tài nguyên đất đai chưa đạt hiệu quả cao, còn xảy ra lãng phí.",
      "Hệ thống thể chế kinh tế thị trường định hướng XHCN chưa thực sự đồng bộ; hệ thống pháp luật còn chồng chéo, chậm đi vào đời sống.",
      "Công tác tổ chức cán bộ, cải cách hành chính và đấu tranh phòng chống quan liêu, tham nhũng chưa đạt kết quả như mong đợi."
    ],
    analysis: "Những yếu kém về thể chế và chất lượng tăng trưởng bộc lộ rõ khi nền kinh tế bước vào giai đoạn mở cửa sâu rộng hơn, đòi hỏi Đại hội X phải đẩy mạnh toàn diện công cuộc đổi mới."
  },
  significance: {
    title: "Ý nghĩa lịch sử Đại hội IX",
    points: [
      "Là Đại hội mở đầu thế kỷ XXI, định hình tầm nhìn chiến lược 10 năm đầu thiên niên kỷ mới cho toàn dân tộc.",
      "Cung cấp bước đột phá lý luận căn bản: kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát trong thời kỳ quá độ.",
      "Định rõ con đường quá độ bỏ qua chế độ tư bản nhưng tiếp thu có chọn lọc mọi thành tựu văn minh nhân loại.",
      "Tạo tiền đề vững chắc về lý luận, thực tiễn và thể chế để Đại hội X (2006) tiếp tục đẩy mạnh công cuộc đổi mới và đưa Việt Nam hội nhập toàn cầu."
    ],
    analysis: "Đại hội IX là mốc son khẳng định sự trưởng thành về bản lĩnh chính trị và năng lực tư duy lý luận độc lập, sáng tạo của Đảng Cộng sản Việt Nam trong thời kỳ đẩy mạnh CNH - HĐH."
  }
};

