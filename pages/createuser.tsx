

import React from 'react'
import {useSelector} from 'react-redux'


const  createuser = () => {
    const todos = useSelector((store:any) => store.addmyevent.todos);
    console.log("for check data is in gdfke:",todos);
    
  return(
   <div className="row justify-content-center mt-5">
     <h3 className='text-center mb-5'>There are some Events You can add new event by clicking add event</h3>
    <div className="col-md-3">
    <div className="card" >
  <img src="my.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">marriage ceremony</h5>
    <p className="card-text">Some quick example text to build to build on the card title and  on the card title and make up the bulk of the card's content.</p>
    <a href="/login" className="btn btn-primary">Create Event</a>
  </div>
</div>
    </div>
    <div className="col-md-3">
    <div className="card" >
  <img src="school.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">School Function</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/login" className="btn btn-primary">Create Event</a>
  </div>
</div>
    </div>
    <div className="col-md-3">
    <div className="card" >
  <img src="sport.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Sport Function</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/login" className="btn btn-primary">Create Event</a>
  </div>
  
 

</div>
            
    </div>
   
   </div>
   

  )
}
export default createuser