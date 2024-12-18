import { useNavigate } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";

const CompanyCard = ({ logo, name, category, location }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/company/${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-4">
        <img src={logo} alt={name} className="w-16 h-16 object-contain" />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{category}</p>
          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </div>
        </div>
        <SecondaryButton onClick={handleViewDetails}>
          Lihat Selengkapnya
        </SecondaryButton>
      </div>
    </div>
  );
};

export default CompanyCard;
