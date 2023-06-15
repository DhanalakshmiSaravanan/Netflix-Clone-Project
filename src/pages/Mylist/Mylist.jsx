import { useEffect,useState } from 'react'
import DataRow from '../../component/Row/DataRow'
import { getlist } from '../../lib/axios/api-functions/mylist';

const MyList = () => {
const [lists,setLists]=useState([]);
useEffect(()=>{
  getlist().then(({data})=>setLists(data))
},[]);
   
  return (
    <div className="h-[100vh] bg-black text-white">
    <div>
    {lists.length > 0 ? (
    <>
    <h1 className="pt-[65px] pl-[20px] font-bold text-2xl ">My List</h1>
    <DataRow searchmovie={""} fetchUrl={"mylist"}/>
    </>
    ) : (
    <h1 className="text-xl text-center pt-[200px]  font-bold ">
    List is Empty
    </h1>
    )}
    </div>
    </div>
  )
}

export default MyList;