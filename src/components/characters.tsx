import { ChangeEvent, useEffect, useState } from "react";
import { useGetCharacterMutation } from "../store/characterSlice";
import Pagination from "../shared/pagination";
import Card from "./character/card";
import {
  Character as CharacterType,
  CharacterApiResponse,
} from "../types/character";

const Character = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  const [getCharacter] = useGetCharacterMutation();

  const fetchData = async () => {
    try {
      const res: CharacterApiResponse = await getCharacter({
        page: selectedPage,
        name: nameFilter,
      }).unwrap();
      setCharacters(res?.results);
      setTotalPages(res?.info?.pages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selectedPage, nameFilter]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedPage(1);
    setNameFilter(e.target.value);
  };

  return (
    <>
      <h1 className="text-center text-3xl py-4">Character Profile</h1>
      <div className="flex flex-col flex-wrap justify-center items-center sm:flex-row gap-4 mb-2 p-4 px-6">
        <input
          type="text"
          placeholder="Search..."
          value={nameFilter}
          onChange={handleNameChange}
          className="p-2 border rounded w-56"
        />
      </div>
      <Card data={characters} />
      <Pagination
        totalpages={totalPages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
};

export default Character;
