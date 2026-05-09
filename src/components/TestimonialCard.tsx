interface TestimonialCardProps {
  review: string;
  name: string;
}

const TestimonialCard = ({ review, name }: TestimonialCardProps) => {
  return (
    <div className="card">
      <p>"{review}"</p>

      <h4>- {name}</h4>
    </div>
  );
};

export default TestimonialCard;
