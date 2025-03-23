import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath:'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/" }),
    endpoints: (builder) => ({
      fetchUser: builder.query({
        query: () => '',
      }),
      
    }),
  });

  export const { useFetchUserQuery} = usersApi;
  export default usersApi;