const JobCard = ({ title, company, location, type, logo }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo} alt={company} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-600">{company}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <span className="px-3 py-1 rounded-full text-sm bg-[#4F772D]/10 text-[#4F772D]">
        {type}
      </span>
    </div>
  );
};

export default JobCard;