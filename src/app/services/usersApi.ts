import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UsersResponse } from 'types/UserTypes'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.mockachino.com/06c67c77-18c4-45/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, void>({
      query: () => 'users',
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
