export default function GlassBackground() {
  const items = [
    {
      title: "The Color Red",
      text: "The color red is the color of energy, passion and action. It signifies a pioneering spirit and leadership qualities, promoting ambition and determination.",
    },
    {
      title: "Globe",
      text: "Adopting the International standards of learning and teaching model besides global acceptance is represented by the symbol Globe.",
    },
    {
      title: "The Human Chain",
      text: "It symbolizes cultural diversity, global brotherhood and the spirit of National Integration that the University promotes. Students from different countries, different states and regions belonging to different communities form a team that works for a single goal 'Excellence'.",
    },
    {
      title: "The Color Black and White",
      text: "The combination of Black & White represents transparency adopted in policymaking and the way it is implemented. University rules are transparent and the students are clear about the vision and mission of the University.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative shadow-lg rounded-lg p-6 border border-gray-200/30 ${
              index === 0 || index === 3
                ? "bg-gradient-to-r from-blue-400/50 to-blue-200/50 backdrop-blur-xl"
                : "bg-white/20"
            }`}
          >
            {/* Red bookmark icon */}
            <div className="absolute left-4 top-4 w-2 h-6 bg-red-600 rounded-sm"></div>

            <div className="ml-8">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-800">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
