import PropTypes from "prop-types";

const StatsCard = ({ icon, number, label }) => (
  <div className="bg-yellow-400 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform">
    <div className="text-green-700 text-3xl mb-4">{icon}</div>
    <div className="text-4xl font-bold text-green-700 mb-2">{number}</div>
    <div className="text-green-700 font-medium">{label}</div>
  </div>
);

StatsCard.propTypes = {
  icon: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatsCard;
