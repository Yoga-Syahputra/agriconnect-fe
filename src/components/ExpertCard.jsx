import { Badge } from "lucide-react";

const ExpertCard = ({ name, role, image }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-transform">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md">
        <Badge className="w-6 h-6 text-gray-600" />
      </button>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

export default ExpertCard;
