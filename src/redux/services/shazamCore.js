import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
// import {createAsyncThunk } from '@reduxjs/toolkit'
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "9c8a05837fmsh6d7f21169da9b63p1e5bc3jsnba15e3cb4662",
//     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//   },
// };

// // export const getPost = createAsyncThunk("post/getPost", () => {
// //     return fetch("")
// // })

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "898f675bc8msh04c93e49adb7508p1e93afjsn76c96bf7a241"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
