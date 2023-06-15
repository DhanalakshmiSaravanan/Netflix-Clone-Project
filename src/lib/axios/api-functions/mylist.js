import server from "../../server";
//to getlist
export const getlist=async()=>await server.get("mylist");
//addlist
export const addlist=async(list)=>await server.post("mylist",list)
//deletelist
export const deletelist=async(id)=>await server.delete(`mylist/${id}`)