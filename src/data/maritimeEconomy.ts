import { MaritimeSector, CoastalLocation } from '../types';

export const maritimePotentials = [
  {
    id: "coastline",
    title: "Đường bờ biển dài hơn 3.260 km",
    value: "> 3.260 km",
    description: "Trải dài từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang), mở ra vùng đặc quyền kinh tế rộng hơn 1 triệu km² và hàng ngàn hòn đảo lớn nhỏ.",
    icon: "Compass"
  },
  {
    id: "maritime-shipping",
    title: "Hàng hải & Vận tải biển quốc tế",
    value: "Tuyến hàng hải huyết mạch",
    description: "Nằm án ngữ trên tuyến hàng hải nhộn nhịp bậc nhất thế giới nối Ấn Độ Dương và Thái Bình Dương, kết nối trực tiếp các trung tâm kinh tế toàn cầu.",
    icon: "Ship"
  },
  {
    id: "marine-resources",
    title: "Tài nguyên sinh vật & Thủy hải sản",
    value: "Hàng ngàn loài sinh vật",
    description: "Trữ lượng hải sản dồi dào, phong phú về chủng loại; điều kiện tự nhiên lý tưởng cho nuôi trồng thủy sản nước lợ và nuôi biển công nghệ cao.",
    icon: "Fish"
  },
  {
    id: "coastal-tourism",
    title: "Du lịch biển, đảo nhiệt đới",
    value: "Hàng trăm bãi biển đẹp",
    description: "Nhiều vịnh biển đẹp hàng đầu thế giới (Hạ Long, Nha Trang, Lăng Cô) cùng chuỗi đảo ngọc thu hút hàng chục triệu lượt du khách quốc tế và nội địa.",
    icon: "Palmtree"
  },
  {
    id: "energy-resources",
    title: "Dầu khí & Điện gió ngoài khơi",
    value: "Trữ lượng năng lượng lớn",
    description: "Bể trầm tích thềm lục địa giàu tài nguyên dầu mỏ, khí đốt; cùng tiềm năng điện gió ngoài khơi thuộc nhóm cao nhất Đông Nam Á.",
    icon: "Zap"
  },
  {
    id: "coastal-industry",
    title: "Khu kinh tế ven biển & Logistics",
    value: "Hệ thống KKT trọng điểm",
    description: "Hình thành chuỗi đô thị ven biển, khu công nghiệp cảng biển và trung tâm logistics hiện đại kết nối sâu vào mạng lưới sản xuất toàn cầu.",
    icon: "Anchor"
  }
];

export const maritimeResolutions = [
  {
    period: "Đại hội X (2006)",
    title: "Định hướng phát triển kinh tế biển toàn diện",
    content: "Đại hội X lần đầu tiên xác định chủ trương xây dựng chiến lược phát triển kinh tế biển toàn diện, có trọng tâm trọng điểm, gắn kết mật thiết phát triển kinh tế với bảo vệ chủ quyền biển đảo Tổ quốc."
  },
  {
    period: "09/02/2007 (Nghị quyết 09-NQ/TW)",
    title: "Chiến lược biển Việt Nam đến năm 2020",
    content: "Mục tiêu lịch sử: Đưa nước ta trở thành quốc gia mạnh về biển, làm giàu từ biển. Phấn đấu đến năm 2020, kinh tế biển đóng góp khoảng 53–55% GDP và 55–60% tổng kim ngạch xuất khẩu cả nước."
  },
  {
    period: "22/10/2018 (Nghị quyết 36-NQ/TW)",
    title: "Chiến lược phát triển bền vững kinh tế biển đến năm 2030, tầm nhìn 2045",
    content: "Nâng tầm tư duy: Chuyển mạnh sang phát triển bền vững, kinh tế biển xanh; kiên quyết bảo vệ hệ sinh thái, ứng phó biến đổi khí hậu; đưa Việt Nam trở thành quốc gia biển mạnh, an toàn và thịnh vượng."
  }
];

export const maritimeReality = {
  achievements: [
    {
      sector: "Hệ thống cảng biển & Vận tải biển",
      detail: "Hình thành các cụm cảng nước sâu hiện đại mang tầm vóc quốc tế như Cụm cảng Cái Mép – Thị Vải và Cảng Lạch Huyện (Hải Phòng), có khả năng tiếp nhận những tàu container siêu trọng lớn nhất thế giới đi thẳng sang bờ Tây nước Mỹ và châu Âu mà không cần trung chuyển."
    },
    {
      sector: "Du lịch và Dịch vụ biển",
      detail: "Nhiều trung tâm du lịch biển đẳng cấp quốc tế bứt phá mạnh mẽ như Phú Quốc, Đà Nẵng, Nha Trang, Hạ Long; phát triển đa dạng các sản phẩm du lịch sinh thái, nghỉ dưỡng biển, tạo công ăn việc làm và nguồn thu ngoại tệ to lớn cho đất nước."
    },
    {
      sector: "Khai thác và Nuôi trồng thủy sản",
      detail: "Ngành thủy sản duy trì vị thế trụ cột xuất khẩu nông nghiệp của Việt Nam, bước đầu áp dụng công nghệ nuôi biển lồng bè hiện đại, giảm dần áp lực đánh bắt ven bờ và mở rộng chế biến sâu xuất khẩu đến hơn 160 quốc gia."
    },
    {
      sector: "Khai thác dầu khí & Năng lượng mới",
      detail: "Ngành dầu khí tiếp tục đóng góp nguồn thu ngân sách quan trọng và đảm bảo an ninh năng lượng quốc gia; đồng thời mở ra triển vọng to lớn về phát triển năng lượng tái tạo sạch với các dự án điện gió ngoài khơi tiềm năng."
    }
  ],
  challenges: [
    {
      sector: "Hạ tầng kỹ thuật chưa đồng bộ",
      detail: "Hệ thống giao thông kết nối sau cảng (đường cao tốc, đường sắt chuyên dụng kết nối cảng nước sâu) còn thiếu và yếu; các trung tâm logistics ven biển còn manh mún, chi phí logistics tại Việt Nam vẫn ở mức cao so với khu vực."
    },
    {
      sector: "Giá trị gia tăng còn thấp",
      detail: "Nhiều lĩnh vực kinh tế biển vẫn mang nặng tính chất khai thác tài nguyên thô, xuất khẩu sơ chế; chưa tận dụng hết tiềm năng của chuỗi giá trị chế biến sâu, dịch vụ hàng hải giá trị cao và công nghiệp đóng tàu hỗ trợ."
    },
    {
      sector: "Ô nhiễm môi trường & Suy giảm hệ sinh thái",
      detail: "Áp lực rác thải nhựa đại dương, nước thải từ đô thị ven biển, sự cố tràn dầu cục bộ và hoạt động đánh bắt tận diệt đe dọa trực tiếp các rạn san hô, thảm cỏ biển và tính đa dạng sinh học của biển Đông."
    },
    {
      sector: "Tác động gay gắt của Biến đổi khí hậu",
      detail: "Nước biển dâng, sạt lở bờ biển nghiêm trọng tại Đồng bằng sông Cửu Long và Duyên hải miền Trung, cùng tần suất bão nhiệt đới cực đoan đe dọa sinh kế dân cư và độ an toàn của hệ thống hạ tầng ven biển."
    },
    {
      sector: "Nguồn nhân lực biển & Công nghệ chưa tương xứng",
      detail: "Thiếu hụt đội ngũ chuyên gia, thuyền viên trình độ cao, kỹ sư quản lý cảng biển, chuyên viên logistics quốc tế và công nghệ sinh học biển hiện đại để làm chủ các ngành kinh tế biển công nghệ cao."
    },
    {
      sector: "Thách thức bảo vệ chủ quyền & An ninh biển",
      detail: "Tình hình Biển Đông luôn tiềm ẩn những diễn biến phức tạp, khó lường; nhiệm vụ phát triển kinh tế biển phải gắn liền 24/7 với việc bảo vệ vững chắc chủ quyền, quyền chủ quyền và quyền tài phán quốc gia trên biển."
    }
  ]
};

export const strategicSolutions: MaritimeSector[] = [
  {
    id: "solution-1",
    title: "Phát triển các ngành kinh tế biển có lợi thế cạnh tranh",
    iconName: "TrendingUp",
    description: "Tập trung mọi nguồn lực ưu tiên phát triển đồng bộ 4 mũi nhọn kinh tế biển: Cảng biển - Vận tải; Du lịch biển; Thủy sản công nghệ cao; Năng lượng biển.",
    measures: [
      "Đầu tư chiều sâu, hiện đại hóa cụm cảng nước sâu Cái Mép - Thị Vải và Lạch Huyện thành các thương cảng trung chuyển quốc tế tầm cỡ.",
      "Phát triển các tổ hợp du lịch biển sinh thái, nghỉ dưỡng cao cấp gắn với bảo tồn di sản tại Hạ Long, Phú Quốc, Nha Trang, Côn Đảo.",
      "Hiện đại hóa nghề cá, chuyển mạnh từ đánh bắt truyền thống sang nuôi biển công nghệ cao ngoài khơi, tuân thủ nghiêm ngặt các quy định chống khai thác bất hợp pháp (IUU).",
      "Khai thác hiệu quả, bền vững mỏ dầu khí hiện hữu song song với việc quy hoạch phát triển các trang trại điện gió ngoài khơi quy mô lớn."
    ],
    realWorldExample: "Cụm cảng Cái Mép – Thị Vải (Bà Rịa – Vũng Tàu) là minh chứng tiêu biểu: đóng vai trò 'siêu cảng' cửa ngõ quốc tế, kết nối trực tiếp hàng hóa Việt Nam sang Mỹ và châu Âu mà không qua nước thứ ba, giúp tiết kiệm hàng tỷ USD chi phí vận chuyển.",
    significance: "Tạo động lực tăng trưởng đột phá, mở rộng không gian kinh tế đối ngoại và định hình thương hiệu biển quốc gia trên bản đồ hàng hải quốc tế."
  },
  {
    id: "solution-2",
    title: "Đẩy mạnh ứng dụng khoa học – công nghệ và chuyển đổi số",
    iconName: "Cpu",
    description: "Coi khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số là động lực chính nâng cao năng suất và chất lượng các ngành kinh tế biển.",
    measures: [
      "Ứng dụng Trí tuệ nhân tạo (AI), viễn thám và dữ liệu lớn (Big Data) trong khảo sát đáy biển, dự báo ngư trường và quản lý tài nguyên biển.",
      "Trang bị 100% thiết bị giám sát hành trình vệ tinh (VMS) cho đội tàu đánh bắt xa bờ nhằm minh bạch hóa nguồn gốc hải sản khai thác.",
      "Áp dụng công nghệ lồng nuôi HDPE chống chịu sóng bão và công nghệ nano, tế bào gốc trong chế biến sâu dược liệu, thực phẩm từ biển.",
      "Chuyển đổi số toàn diện hoạt động điều hành cảng biển (Smart Port) và dịch vụ logistics cảng để tối ưu thời gian thông quan hàng hóa."
    ],
    realWorldExample: "Mô hình cảng thông minh tại Gemalink (Cái Mép) áp dụng hệ thống cẩu bờ tự động và phần mềm quản lý container thời gian thực đã giảm 35% thời gian neo đậu tàu, nâng cao công suất bốc dỡ tương đương các cảng hàng đầu tại Singapore hay Rotterdam.",
    significance: "Giảm phụ thuộc vào lao động thủ công và tài nguyên thô, gia tăng giá trị chuỗi sản xuất và bảo đảm tính bền vững sinh thái."
  },
  {
    id: "solution-3",
    title: "Bảo vệ môi trường biển và phát triển kinh tế xanh",
    iconName: "ShieldAlert",
    description: "Kiên quyết không đánh đổi môi trường lấy tăng trưởng kinh tế thuần túy; phục hồi các hệ sinh thái và chủ động thích ứng biến đổi khí hậu.",
    measures: [
      "Kiểm soát nghiêm ngặt các nguồn thải từ đất liền đổ ra biển; xây dựng hệ thống xử lý nước thải tập trung tại tất cả các khu kinh tế, đô thị ven biển.",
      "Thực hiện quyết liệt kế hoạch hành động quốc gia về quản lý rác thải nhựa đại dương, hướng tới cấm hoàn toàn đồ nhựa dùng một lần tại các đảo du lịch.",
      "Bảo vệ và mở rộng diện tích rừng ngập mặn phòng hộ ven biển; phục hồi nghiêm ngặt các rạn san hô, thảm cỏ biển tại các khu bảo tồn biển.",
      "Quy hoạch không gian biển bền vững, khoanh vùng nghiêm ngặt các vùng biển cấm hoặc hạn chế đánh bắt vào mùa sinh sản của hải sản."
    ],
    realWorldExample: "Chương trình khôi phục rừng ngập mặn Cà Mau và Cần Giờ đóng vai trò 'lá chắn xanh' vĩ đại ngăn chặn xói lở bờ biển do nước biển dâng, lưu trữ carbon và bảo vệ sinh kế cho hàng vạn hộ nuôi tôm sinh thái bền vững.",
    significance: "Bảo đảm sinh kế lâu dài cho các thế hệ mai sau, gìn giữ nguồn sống xanh và thực hiện cam kết quốc tế đạt phát thải ròng bằng '0' (Net Zero) vào năm 2050."
  },
  {
    id: "solution-4",
    title: "Phát triển nguồn nhân lực biển chất lượng cao",
    iconName: "GraduationCap",
    description: "Đầu tư bài bản cho giáo dục, đào tạo và nghiên cứu chuyên sâu về kinh tế biển, quản lý đại dương và khoa học công nghệ hàng hải.",
    measures: [
      "Nâng cấp các trường đại học chuyên ngành (Đại học Hàng hải Việt Nam, Đại học Nha Trang, Đại học Tài nguyên và Môi trường) đạt chuẩn kiểm định quốc tế.",
      "Đào tạo đội ngũ thuyền viên, kỹ sư quản lý cảng biển, chuyên gia logistics đa phương thức thành thạo ngoại ngữ và công nghệ số.",
      "Mở rộng hợp tác đào tạo và trao đổi nghiên cứu sinh với các quốc gia có thế mạnh về kinh tế biển như Hà Lan, Na Uy, Nhật Bản.",
      "Xây dựng chính sách ưu đãi, hỗ trợ đào tạo nghề và chuyển đổi sinh kế cho ngư dân ven biển từ khai thác kiệt quệ sang làm dịch vụ du lịch và nuôi biển bền vững."
    ],
    realWorldExample: "Các chương trình hợp tác giữa Đại học Hàng hải Việt Nam với các tập đoàn vận tải biển hàng đầu thế giới (như Stolt-Nielsen, NYK Line) đã cung cấp hàng ngàn thuyền viên và sĩ quan hàng hải đạt chuẩn STCW làm việc trên các đội tàu viễn dương toàn cầu.",
    significance: "Con người là nhân tố quyết định: nguồn nhân lực chất lượng cao giúp đất nước làm chủ công nghệ biển tiên tiến và tự tin vươn ra đại dương."
  },
  {
    id: "solution-5",
    title: "Hoàn thiện thể chế, quy hoạch và tăng cường liên kết vùng",
    iconName: "Network",
    description: "Tháo gỡ điểm nghẽn về thể chế quản lý biển; thực hiện quy hoạch không gian biển quốc gia đồng bộ và kết nối sâu các hành lang kinh tế ven biển.",
    measures: [
      "Hoàn thiện hệ thống pháp luật về biển đồng bộ với Luật Biển Việt Nam 2012 và Công ước Liên Hợp Quốc về Luật Biển 1982 (UNCLOS 1982).",
      "Triển khai Quy hoạch không gian biển quốc gia để phân bổ hợp lý các vùng chức năng, tránh xung đột lợi ích giữa du lịch, khai thác cảng và thủy sản.",
      "Đẩy nhanh tiến độ xây dựng tuyến đường bộ cao tốc Bắc - Nam và tuyến đường bộ ven biển kết nối thông suốt các trung tâm kinh tế ven biển.",
      "Xây dựng cơ chế liên kết vùng thực chất giữa các tỉnh duyên hải với các tỉnh nội địa và Tây Nguyên để hình thành chuỗi cung ứng logistics hoàn chỉnh."
    ],
    realWorldExample: "Quy hoạch hành lang kinh tế ven biển vùng Đông Nam Bộ kết nối các khu công nghiệp Bình Dương, Đồng Nai với cụm cảng nước sâu Cái Mép giúp rút ngắn thời gian vận chuyển hàng hóa xuất nhập khẩu tới 50% so với trước đây.",
    significance: "Xóa bỏ tư duy cục bộ địa phương, khai phóng sức mạnh tổng hợp của toàn dải bờ biển và tối ưu hóa nguồn lực đầu tư quốc gia."
  },
  {
    id: "solution-6",
    title: "Kết hợp phát triển kinh tế biển với củng cố quốc phòng, an ninh và bảo vệ chủ quyền",
    iconName: "Anchor",
    description: "Kinh tế biển và quốc phòng, an ninh là hai mặt không thể tách rời: 'Mỗi con tàu ra khơi là một cột mốc chủ quyền sống'.",
    measures: [
      "Hiện đại hóa lực lượng Cảnh sát biển, Kiểm ngư, Bộ đội Biên phòng và Hải quân nhân dân Việt Nam đủ sức bảo vệ vững chắc chủ quyền và lợi ích hợp pháp trên biển.",
      "Xây dựng các công trình hạ tầng lưỡng dụng (vừa phục vụ dân sinh kinh tế, vừa sẵn sàng chuyển đổi phục vụ nhiệm vụ quốc phòng khi có tình huống).",
      "Hỗ trợ ngư dân thành lập các tổ đội đoàn kết đánh bắt xa bờ, đóng tàu vỏ thép hiện đại, cung cấp dịch vụ hậu cần và thông tin liên lạc 24/7 trên biển.",
      "Kiên trì, kiên quyết đấu tranh bảo vệ chủ quyền, quyền chủ quyền và quyền tài phán quốc gia bằng các biện pháp hòa bình trên cơ sở luật pháp quốc tế và UNCLOS 1982."
    ],
    realWorldExample: "Hệ thống các âu tàu, làng chài tại quần đảo Trường Sa và đảo Bạch Long Vĩ cung cấp nước ngọt, dầu, sửa chữa tàu miễn phí và cứu nạn kịp thời cho bà con ngư dân, biến các hòn đảo tiền tiêu thành điểm tựa vững chắc giữa trùng khơi Tổ quốc.",
    significance: "Bảo đảm môi trường hòa bình, ổn định lâu dài trên biển – điều kiện tiên quyết sống còn để kinh tế biển đất nước cất cánh."
  }
];

export const studentResponsibilities = [
  {
    id: "student-1",
    title: "Nâng cao nhận thức & Tìm hiểu pháp luật về biển đảo",
    content: "Chủ động học tập, tìm hiểu sâu sắc về lịch sử, địa lý biển đảo Việt Nam; nắm vững các chủ trương, đường lối của Đảng, chính sách và pháp luật của Nhà nước (Luật Biển Việt Nam 2012, UNCLOS 1982)."
  },
  {
    id: "student-2",
    title: "Ý thức sâu sắc về vai trò chiến lược của biển",
    content: "Thấu hiểu giá trị kinh tế, chính trị, quốc phòng - an ninh của biển đảo Tổ quốc; hun đúc tinh thần tự hào dân tộc và tình yêu sâu nặng với từng tấc đất, sải biển thiêng liêng của cha ông."
  },
  {
    id: "student-3",
    title: "Tích cực học tập, nghiên cứu khoa học & làm chủ công nghệ",
    content: "Nỗ lực trau dồi tri thức chuyên môn, tích cực tham gia nghiên cứu khoa học, khởi nghiệp sáng tạo trong các lĩnh vực kinh tế biển, trí tuệ nhân tạo, công nghệ sinh học và kinh tế xanh."
  },
  {
    id: "student-4",
    title: "Tiên phong bảo vệ môi trường biển & chống rác thải nhựa",
    content: "Tích cực tham gia các phong trào tình nguyện như 'Hãy làm sạch biển', chiến dịch Mùa hè xanh, nhặt rác bờ biển; kiên quyết nói không với đồ nhựa dùng một lần và tuyên truyền lối sống xanh."
  },
  {
    id: "student-5",
    title: "Đấu tranh phản bác thông tin sai lệch & Tuyên truyền chủ quyền",
    content: "Chủ động lan tỏa những hình ảnh, thông điệp tích cực và chính xác về biển đảo Việt Nam trên mạng xã hội; kiên quyết đấu tranh phản bác các luận điệu xuyên tạc, sai sự thật xâm phạm chủ quyền quốc gia."
  },
  {
    id: "student-6",
    title: "Thực hiện nếp sống văn minh khi tham gia du lịch biển",
    content: "Mỗi sinh viên là một đại sứ du lịch văn minh: tôn trọng văn hóa bản địa của cư dân miền biển, không xâm hại rạn san hô, không xả rác bừa bãi và đồng hành cùng người dân ven biển phát triển bền vững."
  }
];

export const coastalLocations: CoastalLocation[] = [
  {
    id: "haiphong",
    name: "Cảng Hải Phòng & Lạch Huyện",
    region: "Miền Bắc",
    type: "Cụm Cảng biển",
    description: "Cửa ngõ xuất nhập khẩu hàng hải trọng yếu của toàn bộ khu vực phía Bắc, sở hữu cảng nước sâu đón tàu container tải trọng lớn.",
    strategicImportance: "Đầu mối giao thương hàng hải quốc tế kết nối hành lang kinh tế Côn Minh - Lào Cai - Hà Nội - Hải Phòng.",
    coordinates: { x: 62, y: 19 }
  },
  {
    id: "halong",
    name: "Vịnh Hạ Long – Cát Bà",
    region: "Miền Bắc",
    type: "Du lịch biển",
    description: "Di sản thiên nhiên thế giới với hàng ngàn đảo đá vôi kỳ vĩ, trung tâm du lịch sinh thái và nghỉ dưỡng quốc tế hàng đầu.",
    strategicImportance: "Biểu tượng du lịch quốc tế, phát triển mô hình du lịch xanh không rác thải nhựa đại dương.",
    coordinates: { x: 68, y: 21 }
  },
  {
    id: "danang",
    name: "Thành phố Cảng & Biển Đà Nẵng",
    region: "Miền Trung",
    type: "Cụm Cảng biển",
    description: "Trung tâm kinh tế biển năng động nhất miền Trung, cửa ngõ ra biển của Hành lang kinh tế Đông - Tây (EWEC).",
    strategicImportance: "Đầu mối logistics liên quốc gia nối liền Myanmar, Thái Lan, Lào ra cảng Tiên Sa và biển Đông.",
    coordinates: { x: 66, y: 44 }
  },
  {
    id: "hoangsa",
    name: "Quần đảo Hoàng Sa (Đà Nẵng)",
    region: "Hải đảo",
    type: "Quần đảo chủ quyền",
    description: "Vùng lãnh thổ thiêng liêng không thể tách rời của Tổ quốc Việt Nam, có vị trí địa chiến lược và tiềm năng ngư trường lớn.",
    strategicImportance: "Vị trí địa chính trị kiểm soát các tuyến hàng hải quốc tế trên Biển Đông và khẳng định chủ quyền bất khả xâm phạm.",
    coordinates: { x: 80, y: 42 }
  },
  {
    id: "nhatrang",
    name: "Vịnh Nha Trang & Vân Phong",
    region: "Miền Trung",
    type: "Du lịch biển",
    description: "Vịnh biển đẹp thế giới kết hợp với vịnh nước sâu Vân Phong có tiềm năng xây dựng cảng trung chuyển container quốc tế.",
    strategicImportance: "Trung tâm nghiên cứu đại dương học, du lịch biển cao cấp và cụm công nghiệp hàng hải miền Trung.",
    coordinates: { x: 73, y: 64 }
  },
  {
    id: "truongsa",
    name: "Quần đảo Trường Sa (Khánh Hòa)",
    region: "Hải đảo",
    type: "Quần đảo chủ quyền",
    description: "Quần đảo tiền tiêu phía Đông Nam của Tổ quốc với hệ thống đảo chìm, đảo nổi và ngư trường khai thác hải sản xa bờ dồi dào.",
    strategicImportance: "Lá chắn bảo vệ sườn phía Đông của đất nước; trung tâm hậu cần nghề cá và cứu hộ cứu nạn trên biển.",
    coordinates: { x: 84, y: 76 }
  },
  {
    id: "caimep",
    name: "Cụm cảng Cái Mép – Thị Vải (Bà Rịa – Vũng Tàu)",
    region: "Miền Nam",
    type: "Cụm Cảng biển",
    description: "Cảng nước sâu hiện đại nhất Việt Nam, tiếp nhận tàu mẹ sức chở lên đến 214.000 DWT đi thẳng sang Bắc Mỹ và châu Âu.",
    strategicImportance: "Trọng điểm logistics quốc tế của Vùng kinh tế trọng điểm phía Nam, giảm thiểu chi phí trung chuyển cho hàng xuất khẩu.",
    coordinates: { x: 60, y: 78 }
  },
  {
    id: "camau",
    name: "Mũi Cà Mau & Rừng ngập mặn",
    region: "Miền Nam",
    type: "Năng lượng & Thủy sản",
    description: "Điểm cực Nam của Tổ quốc, có dải rừng ngập mặn lớn thứ 2 thế giới, thủ phủ nuôi tôm sinh thái và tiềm năng điện gió ven biển khổng lồ.",
    strategicImportance: "Vành đai sinh thái ngăn nước biển dâng, bảo vệ đa dạng sinh học và phát triển năng lượng tái tạo.",
    coordinates: { x: 44, y: 88 }
  },
  {
    id: "phuquoc",
    name: "Thành phố Đảo Phú Quốc (Kiên Giang)",
    region: "Miền Nam",
    type: "Du lịch biển",
    description: "Đảo Ngọc lớn nhất Việt Nam, thành phố đảo đầu tiên với hệ sinh thái du lịch, vui chơi giải trí và nghỉ dưỡng đẳng cấp toàn cầu.",
    strategicImportance: "Cực tăng trưởng kinh tế du lịch dịch vụ Tây Nam, giao lưu kinh tế với các nước trong vịnh Thái Lan.",
    coordinates: { x: 38, y: 82 }
  }
];

