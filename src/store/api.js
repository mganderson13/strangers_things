import { createApi, fethcBaseQuery } from '@reduxjs/toolkit'

const api = createApi({
    baseQuery: fethcBaseQuery({ baseUrl: 'https://strangers-things.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF', }),
    endpoints: () => ({

    })
});

export default api;