export default function Headline({ title, subtitle }) {
  return (
    <div className="text-center mb-16 pt-24">
      <p className="text-lg text-primary uppercase">{subtitle}</p>
      <h2 className="text-4xl md:text-6xl font-bold text-body">{title}</h2>
    </div>
  );
}
