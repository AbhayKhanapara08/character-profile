import { useLocation } from "react-router-dom";
import { useGetCharacterByIdMutation } from "../store/characterSlice";
import { useEffect, useState } from "react";
import { Character } from "../types/character";

const CharacterDetailsPage = () => {
  const location = useLocation();
  const { id } = location.state;

  const [character, setCharacter] = useState<Character | null>(null);
  const [getCharacterById] = useGetCharacterByIdMutation();

  const fetchData = async () => {
    try {
      const res = await getCharacterById({ id }).unwrap();
      setCharacter(res);
    } catch (error) {
      console.error("Failed to fetch character:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={character?.image}
            alt={character?.name}
            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left font-medium">
            <h1 className="text-3xl font-bold mb-2">{character?.name}</h1>
            <p className="text-gray-600 mb-1">Status: {character?.status}</p>
            <p className="text-gray-600 mb-1">Species: {character?.species}</p>
            <p className="text-gray-600 mb-1">Type: {character?.type}</p>
            <p className="text-gray-600 mb-1">Gender: {character?.gender}</p>
            <p className="text-gray-600 mb-1">
              Origin: {character?.origin?.name}
            </p>
            <p className="text-gray-600 mb-1">
              Origin Url: {character?.origin?.url}
            </p>
            <p className="text-gray-600 mb-1">
              Location: {character?.location?.name}
            </p>
            <p className="text-gray-600 mb-1">
              Location URL:{" "}
              <a
                href={character?.location?.url}
                className="text-blue-500 text-sm"
              >
                {character?.location?.url}
              </a>
            </p>
            <p className="text-gray-600 mb-1">
              URL:{" "}
              <a href={character?.url} className="text-blue-500 text-sm">
                {character?.url}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden p-3 sm:p-6">
        <h2 className="text-2xl font-bold mb-4">Episodes</h2>
        <div className="flex flex-wrap justify-start gap-4">
          {character?.episode?.map((data, index) => (
            <p
              key={index}
              className="text-blue-500 hover:underline text-sm cursor-pointer"
            >
              Episode:{index + 1} {data}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
