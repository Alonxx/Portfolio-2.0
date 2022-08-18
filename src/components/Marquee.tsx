interface Props {
  items: string[];
}

export const Marquee: React.FC<Props> = ({ items }) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-4 text-4xl text-white  font-semibold">
            {item}
          </span>
        ))}
      </div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-4 text-4xl text-white font-semibold">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
