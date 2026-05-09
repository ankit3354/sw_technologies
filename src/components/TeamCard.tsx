interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamCard = ({ image, name, role }: TeamCardProps) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>{role}</p>
    </div>
  );
};

export default TeamCard;
