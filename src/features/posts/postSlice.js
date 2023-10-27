import api from "../../store/api";

const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
        transformResponse: (response) => response.posts,
        })
    })
})