import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://strangers-things.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF', }),
    endpoints: () => ({

    })
});

export default api;