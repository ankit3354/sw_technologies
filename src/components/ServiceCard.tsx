import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="card">
      <Icon className="icon" />

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
