import server from "../../server";

export const getAllMovies= async () => await server.request("/Movies");
//get movies
export const getMovies=async(URL)=>await server.get(`/${URL}`)
//trendingnow
export const trendingMovies=async()=>await server.get("/trendingnow");
//upcoming
export const upcomingMovies=async()=>await server.get("/upComing");
//toprated
export const topratedMovies=async()=>await server.get("/topRated");
//popular
export const popularMovies=async()=>await server.get("/popular");
//watch
export const watchmovie=async(data)=>await server.post("/watch",data);
//chnage like
export const updateMovies = async ({ id, fetchUrl, ...body }) => {
    await server.put(`/${fetchUrl}/${id}`, body);
  };