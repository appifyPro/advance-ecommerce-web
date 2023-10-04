


import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addevent,getTodo,deletedata} from "../store/slics"
import { toast } from "react-toastify"




const event = () => {
    const [des,setdes]=useState("")
    const [title,settitle]=useState("")
    const [loc,setloc]=useState("")
    const [invit,setinvit]=useState("")
    console.log("loc is :",loc);





    useEffect(()=>{
      getTodo
    },[])

    const dispatch=useDispatch()
   
    const addhandler=()=>
    {
      let myloc={
        des:des,
        title:title,
        loc:loc,
        invit:invit
      }
      dispatch(addevent(myloc))
      console.log("myloc:",myloc);
      toast.success("Add data successfully");
    }
    const deleteTodoHandler = (item:any) => {
      // console.log(todoInput);
      dispatch(deletedata(item));
      toast.success("Delete data");
    };
  
   
  return (
    {
        des,
        setdes,
        setloc,
        settitle,
        setinvit,
       invit,
       loc,
       title,
       addhandler,
       deleteTodoHandler,

    }
   
  )
}

export default event