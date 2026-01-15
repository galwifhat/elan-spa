// src/components/treatment/TreatmentImageCard.jsx
const TreatmentImageCard = ({ treatment }) => {
  const {
    src,
    alt,
    title,
    colSpan,
    rowSpan,
    hasOverlay,
    hoverEffect,
    textSize = "text-sm",
  } = treatment;

  return (
    <div
      className={`${colSpan} ${rowSpan} bg-gray-100 border border-black/10 relative overflow-hidden group rounded-lg cursor-pointer`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-300 ${
          hoverEffect ? "group-hover:scale-105" : ""
        }`}
        loading="lazy"
      />
      {hasOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
          <span
            className={`text-white uppercase tracking-wider ${textSize} font-bold drop-shadow-lg`}
          >
            {title}
          </span>
        </div>
      )}
      {/* Hover overlay effect */}
      {hoverEffect && (
        <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  );
};

export default TreatmentImageCard;
