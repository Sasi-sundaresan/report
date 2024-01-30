import '../sty.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Ivcreate=()=>{
   const [report,setreport]=useState({
      "mode_of_transport":"" ,
      "year_of_students_visited":0, 
      "sem_of_students_visited":0 ,
      "total_class_strength":0, 
      "no_of_students_visited":0 , 
      "students_visited_list":"",
      "place_of_visit":"", 
      "date_of_leaving":"",
      "leaving_time":"",
      "reaching_place":"",
      "day_1_reaching_time":"", 
      "day_1_FN_time":"" ,
      "day_1_FN_place":"",
      "day_1_AN_time":"" , 
      "day_1_AN_place":"" , 
      "day_1_night_time":"", 
      "day_1_night_place":"", 
      "day_2_FN_time":"" , 
      "day_2_FN_place":"" , 
      "day_2_AN_time":"",
      "day_2_AN_place":"", 
      "day_2_night_time":"" ,
      "day_2_night_place":"" ,
      "day_3_FN_time":"" ,
      "day_3_FN_place":"", 
      "day_3_AN_time":"" ,
      "day_3_AN_place":"" ,
      "day_3_night_time":"" , 
      "day_3_night_place":"" ,
      "date_of_arriving":"",
      "time_of_arriving":"" 

})

   const navigate=useNavigate()
   const handlechange=(e)=>{
      setreport((prev)=>({...prev,[e.target.name]:e.target.value}))
   }
   console.log(report)
const handleClick = async (e)=>{
   e.preventDefault()
   try{
      // alert(JSON.stringify(report))
      await axios.put("http://localhost:1234/iv/update/1",report)
      // alert(JSON.stringify(t.data.records))

      navigate("/")
   }catch (err) {
      console.log(err.response);  // Log the response for more details
      console.error(err);
  }
}

return(
   <>
   <div className='report-container' style={{justifyContent:'center',marginTop:"150px"}} >
   <div class="report-header">
    <h1 class="recent-Articles"> IV REPORT</h1>
    </div> 
    <div className="row justify-content-center"style={{justifyContent:'center'}}>
     

    <div>
                <label>Mode of Transport</label>
                <select>
                   <option value=""> Bus</option>
                   <option value=""> Train</option>
                </select>
             </div>

             <div className='form-group'>
        <label>Dept ID</label>
        <input type='text' placeholder='dept_id' name='Department Id' onChange={handlechange}/>
       </div>

       
       <div className='form-group'>
        <label>Year of Students Visited</label>
        <input type='text' placeholder='year_of_students_visited' name='Year of Students Visited' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Sem of Students Visited</label>
        <input type='text' placeholder='sem_of_students_visited' name='Sem of Students Visited' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Total Class Strength</label>
        <input type='number' placeholder='total_class_strength' name='Total Class Strength' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>No of Students Visited</label>
        <input type='number' placeholder='no_of_students_visited' name='No of Students Visited' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Students Visited List</label>
        <input type='text' placeholder='students_visited_list' name='Students Visited List' onChange={handlechange}/>
       </div>

              {/* ------------------file----------------- */}
             <div className='form-group'>
                <label>No of Students Visited (List)</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Visit/Tour Approval Form</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Letter to the Company For Permission</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Permission Letter from The Company</label>
                <input type='file' onCanPlay={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Bus Permit Copy</label>
                <input type='file' onChange={handlechange}/>
             </div>
  
             
             <div className='form-group'>
                <label>Undertaking by Parents</label>
                <input type='file' onChange={handlechange}/>
             </div>
             <div className='form-group'>
                <label>Undertaking by Students (Sample 1)</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>Undertaking by Students (Sample 2)</label>
                <input type='file' onChange={handlechange}/>
             </div>
               

               <div className='form-group'>
                <label>Boarding and Lodging Arrangement Details</label>
                <input type='file' onChange={handlechange}/>
             </div>


           
             <div className='form-group'>
                <label>About Industry</label>
                <input type='file' onChange={handlechange}/>
             </div>
     
              <div className='form-group'>
                <label>Feedback from Students</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>photo 1</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>photo 2</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>photo 3</label>
                <input type='file' onChange={handlechange}/>
             </div>

             <div className='form-group'>
                <label>photo 4</label>
                <input type='file' onChange={handlechange}/>
             </div>
            
            <div className='form-group'>
                <label>photo 5</label>
                <input type='file' onChange={handlechange}/>
             </div>
 {/* ------------------------------------------------ */}
             <div class="report-header">
    <h1 class="recent-Articles">whereabouts</h1>
    </div> 

       <div className='form-group'>
        <label>Places of Visit</label>
        <input type='text' placeholder='places_of_visit' name='places_of_visit' onChange={handlechange}/>
       </div>

   


       <div className='form-group'>
        <label>Date of Leaving from College</label>
        <input type='date' placeholder='date_of_leaving' name='Date_of_leaving' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Time of Leaving from College</label>
        <input type='time' placeholder='leaving_time' name='Leaving_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Reaching Time</label>
        <input type='time' placeholder='day_1_reaching_time' name='Day_1_Reaching_Time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Reaching Place</label>
        <input type='time' placeholder='reaching_place' name='Day_1_Reaching_Place' onChange={handlechange}/>
       </div>

       

       <div class="report-header">
    <h1 class="recent-Articles">Day 1</h1>
    </div>

    <h2>FN</h2>
      
       <div className='form-group'>
        <label>Time</label>
        <input type='time' placeholder='	day_1_FN_time' name='Day_1_FN_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='day_1_FN_place' name='Day_1_FN_place' onChange={handlechange}/>
       </div>
 
       <h2>AN</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='day_1_AN_time' name='Day_1_AN_time' onChange={handlechange}/>
        <label >whereabouts</label>
        <input type='text' placeholder='day_1_AN_place' name='Day_1_AN_place' onChange={handlechange} />
       </div>    
   
       <h2>Night</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='day_1_night_time' name='Day_1_night_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='day_1_night_place' name=' Day_1_night_place' onChange={handlechange}/>
       </div>

       <div class="report-header">
    <h1 class="recent-Articles">Day 2</h1>
    </div>

    <h2>FN</h2>
      
       <div className='form-group'>
        <label>Time</label>
        <input type='time' placeholder='day_2_FN_time' name='Day_2_FN_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='day_2_FN_place' name='Day_2_FN_place' onChange={handlechange}/>
       </div>
 
       <h2>AN</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='day_2_AN_time' name='Day_2_AN_time' onChange={handlechange}/>
        <label >whereabouts</label>
        <input type='text' placeholder='day_2_AN_place' name='Day_2_AN_place' onChange={handlechange} />
       </div>


       <h2>Night</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='day_2_night_time' name='Day_2_Night_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='day_2_night_place'name='Day_2_Night_place' onChange={handlechange}/>
       </div>

       <div class="report-header">
    <h1 class="recent-Articles">Day 3</h1>
    </div>

    <h2>FN</h2>
      
       <div className='form-group'>
        <label>Time</label>
        <input type='time' placeholder='day_3_FN_time' name='Day_3_FN_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='day_3_FN_place' name='Day_3_FN_place' onChange={handlechange}/>
       </div>
 
       <h2>AN</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='day_3_AN_time' name='Day_3_AN_time' onChange={handlechange}/>
        <label >whereabouts</label>
        <input type='text' placeholder='day_3_AN_place' name='Day_3_AN_place' onChange={handlechange} />
       </div>


       <h2>Night</h2>

       <div className='form-group'>
        <label>Time</label>
        <input type='Time' placeholder='day_3_night_time' name='Day_3_Night_time' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>whereabouts</label>
        <input type='text' placeholder='day_3_night_place'name='Day_3_Night_place' onChange={handlechange}/>
       </div>

       <div className='form-group'>
        <label>Time of Arriving</label>
        <input type='Time' placeholder='time_of_arriving' name='Time_of_Arriving' onChange={handlechange}/>
       </div>
      
       <div className='form-group'>
        <label>Date of Arriving  College</label>
        <input type='date' placeholder='date_of_arriving' name='Date_of_Arriving' onChange={handlechange}/>
       </div>
       
    </div>

    <h1 style={{color:'red',}}></h1>
      <div className='row mt-5 justify-content-around'>
      <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
        <button onClick={handleClick} value="" className='col-3 btn btn-primary' >Submit</button>
      </div> 
</div>
   </>
)
}

export default Ivcreate;