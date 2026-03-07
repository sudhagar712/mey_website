interface DifferentiatorCardProps {
  title: string;
  description: string;
}

const DifferentiatorCard = ({ title, description }: DifferentiatorCardProps) => {
  return (
    <div className="text-center md:text-left">
      <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
      <p className="font-sans text-sm opacity-70 leading-relaxed">{description}</p>
    </div>
  );
};

export default DifferentiatorCard;
