import React from 'react'
import mystate from '../hooks/event'
import {useSelector} from 'react-redux'

const events = () => {
  const todos = useSelector((store:any) => store.addmyevent.todos);
  console.log("for check data:",todos);
  const{
 
 setdes,
 setloc,
 settitle,
 setinvit,
 title,
 loc,
 des,
 addhandler,
 deleteTodoHandler,
 invit
  }=mystate()
  return (
    <div>
          <div className="row justify-content-center mt-10">

<h2 className="row justify-content-center mt-2">you can enter new events</h2>
            <div className="col-md-2">
           
        
            title <input value={title} onChange={(e:any)=>settitle(e.target.value)} type="text" placeholder="enter your title" />
           description  <input value={des} onChange={(e:any)=>setdes(e.target.value)} type="text"  placeholder="enter  description" />
           location <input value={loc} type="text" onChange={(e:any)=>setloc(e.target.value)} placeholder="enter  location" />
           List of invities <input value={invit } type="text" onChange={(e:any)=>setinvit(e.target.value)} placeholder="enter  invities" />
            {/* <Button data1="login"/> */}
            <button  onClick={addhandler}>Submit</button>
  
            </div>
        </div>
 
        <div className="row justify-content-center mt-5">
                <div className="col-md-9 text-center">
                    <h2>Here are the created Events</h2>
                
                </div>
           
            </div>
        {todos.map((doc: any, i: number) => {
          return (
            <div  key={i} className="card text-center">
              <div className="card-body ">
                <h2>id is :{i+1}</h2>
                <h2>Title is :{doc.title}</h2>
               
                <h2>description is :{doc.description}</h2>
                <h2>Location is :{doc.location}</h2>
                <h2>list of inviting is :{doc.inviting}</h2>
               
              </div>
              <div >
                <button onClick={()=>deleteTodoHandler(doc)}>Delele</button>
                <button>Update</button>
              </div>
            </div>
          );
        })}


    </div>
  )
}

export default events