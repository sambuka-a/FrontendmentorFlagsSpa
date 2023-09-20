import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1/'}),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => '/all'
    }),
    getCountriesByRegion: builder.query({
      query: (region) => `/region/${region}`
    }),
    getCountriesBySearch: builder.query({
      query: (query) => `/name/${query}`
    })
  })
})

export const {
  useGetAllCountriesQuery,
  useGetCountriesByRegionQuery,
  useGetCountriesBySearchQuery
} = apiSlice