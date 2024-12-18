const StatCard = ({ title, value, percentage, icon }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="bg-[#4F772D]/10 p-3 rounded-full">{icon}</div>
      </div>
      <div className="flex items-center mt-2">
        <span
          className={`text-sm ${
            percentage >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {percentage}%
        </span>
        <span className="text-gray-500 text-sm ml-1">vs bulan lalu</span>
      </div>
    </div>
  );
};

export default StatCard;