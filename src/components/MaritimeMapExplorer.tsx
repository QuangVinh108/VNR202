import React, { useState } from 'react';
import { coastalLocations } from '../data/maritimeEconomy';
import { CoastalLocation } from '../types';
import { MapPin, Navigation, Anchor, Compass, Info } from 'lucide-react';

export const MaritimeMapExplorer: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<CoastalLocation>(coastalLocations[6]); // Default to Cái Mép - Thị Vải
  const [filterType, setFilterType] = useState<string>('all');

  const filteredLocations = filterType === 'all'
    ? coastalLocations
    : coastalLocations.filter(loc => loc.type === filterType);

  const types = [
    { id: 'all', label: 'Tất cả các điểm' },
    { id: 'Cụm Cảng biển', label: 'Cảng nước sâu & Logistics' },
    { id: 'Du lịch biển', label: 'Du lịch & Sinh thái biển' },
    { id: 'Năng lượng & Thủy sản', label: 'Năng lượng & Sinh quyển' },
    { id: 'Quần đảo chủ quyền', label: 'Quần đảo thiêng liêng' },
  ];

  return (
    <div className="bg-heritage-oceanDeep text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-heritage-oceanLight/30 overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-heritage-oceanLight/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-heritage-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-heritage-oceanLight/20 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-heritage-goldLight mb-2">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>Bản đồ Tương tác Không gian Biển Việt Nam</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Vùng Kinh tế Biển & Điểm Tựa Chủ Quyền
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Khám phá hơn 3.260 km bờ biển với các cụm cảng nước sâu, trung tâm du lịch và 2 quần đảo Hoàng Sa - Trường Sa
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap gap-2">
          {types.map(t => (
            <button
              key={t.id}
              onClick={() => setFilterType(t.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                filterType === t.id
                  ? 'bg-heritage-gold text-heritage-navy font-bold shadow-md'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Map (Left/Center) + Location Detail Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center relative z-10">
        
        {/* Interactive Map Visual */}
        <div className="lg:col-span-7 relative bg-heritage-ocean/20 rounded-2xl p-6 border border-heritage-oceanLight/20 flex items-center justify-center min-h-[460px] overflow-hidden">
          
          {/* Subtle Grid / Marine Nautical Chart Lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, #3D8FA8 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />
          </div>

          {/* SVG Map of Vietnam Coastline with stylized curved representation */}
          <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
            
            {/* S-curve path representation of Vietnam's eastern seaboard */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
              {/* Ocean water subtle backdrop */}
              <defs>
                <linearGradient id="vietnamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFBF7A" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#C6A15B" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#9C7A39" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Stylized Vietnam mainland polygon/path */}
              <path
                d="M 45 12 
                   C 60 14, 70 20, 65 24 
                   C 58 28, 52 35, 58 42 
                   C 66 50, 72 58, 68 68 
                   C 62 76, 52 82, 42 88 
                   C 34 85, 36 78, 44 76 
                   C 52 74, 56 68, 58 60 
                   C 52 50, 48 40, 48 30 
                   C 42 22, 36 18, 45 12 Z"
                fill="url(#vietnamGradient)"
                stroke="#C6A15B"
                strokeWidth="0.8"
                strokeDasharray="1 1"
                className="opacity-70"
              />

              {/* Sea Area Annotation */}
              <g className="pointer-events-none select-none">
                <text
                  x="74"
                  y="26"
                  fill="#4EA2B8"
                  fontSize="2.4"
                  fontWeight="bold"
                  letterSpacing="0.2"
                  textAnchor="middle"
                  opacity="0.9"
                >
                  BIỂN ĐÔNG VIỆT NAM
                </text>
                <text
                  x="74"
                  y="29.5"
                  fill="#7AC3D6"
                  fontSize="1.6"
                  textAnchor="middle"
                  opacity="0.75"
                >
                  Vùng đặc quyền kinh tế &gt; 1.000.000 km²
                </text>
              </g>
            </svg>

            {/* Interactive Location Markers Overlay */}
            {filteredLocations.map((loc) => {
              const isSelected = selectedLocation.id === loc.id;
              const isIsland = loc.type === 'Quần đảo chủ quyền';

              return (
                <div
                  key={loc.id}
                  style={{
                    left: `${loc.coordinates.x}%`,
                    top: `${loc.coordinates.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin ${
                    isIsland ? 'z-20' : 'z-10'
                  }`}
                  onClick={() => setSelectedLocation(loc)}
                >
                  {isIsland ? (
                    /* Sovereign Archipelago Unified Badge */
                    <div
                      className={`group/island relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border transition-all duration-300 shadow-lg select-none whitespace-nowrap ${
                        isSelected
                          ? 'bg-heritage-gold text-heritage-navy border-white ring-4 ring-heritage-gold/40 scale-105 shadow-2xl font-bold'
                          : 'bg-[#103544]/95 hover:bg-[#164356] text-white border-heritage-gold/60 hover:border-heritage-gold hover:scale-105'
                      }`}
                    >
                      {/* Red anchor icon */}
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                          isSelected
                            ? 'bg-heritage-red text-white ring-2 ring-heritage-navy'
                            : 'bg-heritage-red text-white group-hover/island:scale-110 transition-transform'
                        }`}
                      >
                        <Anchor className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>

                      {/* Island Name & Sovereignty Label */}
                      <div className="text-left leading-tight pr-0.5">
                        <div
                          className={`text-[10px] sm:text-[11px] font-bold tracking-wide ${
                            isSelected ? 'text-heritage-navy' : 'text-white'
                          }`}
                        >
                          {loc.id === 'hoangsa' ? 'QĐ. HOÀNG SA' : 'QĐ. TRƯỜNG SA'}
                        </div>
                        <div
                          className={`text-[8.5px] sm:text-[9.5px] font-semibold ${
                            isSelected ? 'text-heritage-navy/80' : 'text-heritage-goldLight'
                          }`}
                        >
                          (Việt Nam)
                        </div>
                      </div>

                      {/* Pulse ring when selected */}
                      {isSelected && (
                        <span className="absolute -inset-1 rounded-xl bg-heritage-gold animate-ping opacity-35 pointer-events-none" />
                      )}
                    </div>
                  ) : (
                    /* Standard Coastal City / Port Marker */
                    <>
                      {/* Pulse ring when selected */}
                      {isSelected && (
                        <span className="absolute -inset-2 rounded-full bg-heritage-gold animate-ping opacity-60 pointer-events-none" />
                      )}

                      {/* Marker Pin Icon */}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                          isSelected
                            ? 'bg-heritage-gold text-heritage-navy scale-125 ring-2 ring-white font-bold'
                            : 'bg-heritage-oceanLight text-white hover:bg-heritage-gold hover:text-heritage-navy hover:scale-110'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>

                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pin:block whitespace-nowrap bg-heritage-navy/95 text-white text-[11px] px-2.5 py-1 rounded shadow-lg border border-white/20 pointer-events-none z-30">
                        {loc.name}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Map legend bottom hint */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/60 bg-heritage-oceanDeep/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
            <span>Nhấn vào các điểm đánh dấu trên bản đồ để xem chi tiết</span>
            <span className="hidden sm:inline text-heritage-goldLight">Đường bờ biển: &gt;3.260 km</span>
          </div>
        </div>

        {/* Selected Location Information Card */}
        <div className="lg:col-span-5 bg-white text-heritage-dark rounded-2xl p-6 sm:p-7 shadow-xl border border-heritage-gold/40 flex flex-col justify-between">
          <div>
            {/* Top region & type badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-heritage-ocean/10 text-heritage-ocean">
                {selectedLocation.region}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-heritage-gold/20 text-heritage-goldDark">
                {selectedLocation.type}
              </span>
            </div>

            {/* Location Name */}
            <h4 className="text-2xl font-heading font-bold text-heritage-navy mb-3 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-heritage-ocean shrink-0" />
              <span>{selectedLocation.name}</span>
            </h4>

            {/* Description */}
            <p className="text-sm text-heritage-muted leading-relaxed mb-5">
              {selectedLocation.description}
            </p>

            {/* Strategic Importance */}
            <div className="p-4 rounded-xl bg-heritage-oceanMist/50 border border-heritage-ocean/20 text-heritage-navy mb-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-heritage-ocean mb-1.5">
                <Info className="w-4 h-4" />
                <span>Ý nghĩa chiến lược phát triển & an ninh:</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed font-medium">
                {selectedLocation.strategicImportance}
              </p>
            </div>
          </div>

          {/* Quick Stats or actions */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-heritage-muted">
            <span>Toạ độ không gian kinh tế biển</span>
            <span className="font-semibold text-heritage-ocean">
              Việt Nam vững vàng tiến ra biển lớn
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
