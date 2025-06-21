// src/components/Card.jsx
function ClassCard({
  school,
  classTakenName,
  date,
  description,
  bgColor = "#031ca6",
  tags = [],
  hasGitHub = false,
  hasExternal = false,
  githubURL = "",
  externalURL = "",
}) {
  // Check if bgColor is a hex color (starts with #) or a Tailwind class
  const isHexColor = bgColor.startsWith("#");

  return (
    <div
      className={`p-6 rounded-lg shadow-lg transition-transform hover:scale-105 hober:shadow-xl min-h-[300px] flex flex-col ${!isHexColor ? bgColor : ""}`}
      style={isHexColor ? { backgroundColor: bgColor } : {}}
    >
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {classTakenName}
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <p className="text-lg text-gray-200">{school}</p>
          <p className="text-sm text-gray-300">{date}</p>
        </div>
      </div>
      <p className="text-white leading-relaxed">{description}</p>
    </div>
  );
}

export default ClassCard;
