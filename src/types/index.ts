export interface TimelineItem {
  id: string;
  date: string;
  year?: string;
  title: string;
  resolutionCode?: string;
  summary: string;
  analysis: string;
  highlights?: string[];
  category?: 'political' | 'economic' | 'social' | 'foreign' | 'maritime';
}

export interface PillarContent {
  id: string;
  index: number;
  title: string;
  summary: string;
  details: string[];
  analysis: string;
  quote?: string;
  tag?: string;
}

export interface EvaluationItem {
  title: string;
  points: string[];
  analysis?: string;
}

export interface LessonItem {
  number: number;
  title: string;
  content: string;
  analysis: string;
  principle: string;
}

export interface MaritimeSector {
  id: string;
  title: string;
  iconName: string;
  description: string;
  measures: string[];
  realWorldExample?: string;
  significance: string;
}

export interface CoastalLocation {
  id: string;
  name: string;
  region: 'Miền Bắc' | 'Miền Trung' | 'Miền Nam' | 'Hải đảo';
  type: 'Cụm Cảng biển' | 'Du lịch biển' | 'Năng lượng & Thủy sản' | 'Quần đảo chủ quyền';
  description: string;
  strategicImportance: string;
  coordinates: { x: number; y: number }; // Percentage for interactive SVG map
}

export interface SearchResultItem {
  id: string;
  sectionId: string;
  topic: string;
  title: string;
  snippet: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  source: string;
}

