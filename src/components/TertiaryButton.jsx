import { ArrowRight } from "lucide-react";

const TertiaryButton = ({ className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center text-green-700 hover:text-green-800 font-medium transition-colors gap-2 group ${className}`}
      {...props}
    >
      Baca selengkapnya
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export default TertiaryButton;
