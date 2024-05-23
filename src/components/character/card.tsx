import { useNavigate } from "react-router-dom";
import { CardProps } from "../../types/character";

const Card = ({ data }: CardProps) => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/characters/${id}`, { state: { id } });
  };
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {data?.map((character) => (
        <div
          key={character.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer w-60 font-medium"
          onClick={() => handleCardClick(character.id)}
        >
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-60 object-cover"
          />
          <div className="p-4 text-start">
            <h4 className="text-xl font-semibold mb-2">{character.name}</h4>
            <p className="text-gray-600">Type: {character.type}</p>
            <p className="text-gray-600">
              Total Episodes: {character.episode.length}
            </p>
            <p className="text-gray-600">Location: {character.location.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
