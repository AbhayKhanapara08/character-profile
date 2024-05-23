import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config/config";
import { Character, CharacterApiResponse } from "../types/character";

export const characterSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.api.base }),
  endpoints: (builder) => ({
    getCharacter: builder.mutation<
      CharacterApiResponse,
      {
        page: number;
        name?: string;
        episode?: string;
        status?: string;
        species?: string;
        type?: string;
        gender?: string;
      }
    >({
      query: ({ page, name, status, species, type, gender }) => ({
        url: `${config.api.url.character}?page=${page}${
          name ? "&name=" + name : ""
        }${status ? "&status=" + status : ""}${
          species ? "&species=" + species : ""
        }${type ? "&type=" + type : ""}${gender ? "&gender=" + gender : ""}`,
        method: "GET",
      }),
    }),
    getCharacterById: builder.mutation<Character, { id: number }>({
      query: ({ id }) => ({
        url: `${config.api.url.character}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCharacterMutation, useGetCharacterByIdMutation } =
  characterSlice;
