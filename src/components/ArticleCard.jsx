import { Link } from "react-router-dom";
import TertiaryButton from "./TertiaryButton";

const ArticleCard = ({
  image,
  title,
  description,
  author,
  date,
  showAuthorInfo = true,
  slug,
}) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {showAuthorInfo && author && date && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center gap-3 text-white/90">
              <span className="font-medium text-sm">{author}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <time dateTime={date} className="text-sm">
                {date}
              </time>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-5 space-y-4">
        <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
          <Link
            to={`/article/${slug}`}
            className="focus:outline-none focus:underline"
          >
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-4">
          <Link
            to={`/article/${slug}`}
            className="inline-block"
            aria-label={`Read more about ${title}`}
          >
            <TertiaryButton/>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
