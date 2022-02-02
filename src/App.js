import React from 'react';
import {useFormik} from 'formik';
import './App.css';

function App(){
    const initialValues = {
      firstname:'',
      lastname:'',
      gmail:'',
      gender:'',
      courses:'Angular'
    }
    const onSubmit =  values => {
      console.log(values)
    }
    const validate =  values => {

      let errors = {}

      if(!values.firstname){
        errors.firstname="Firstname is required"
      }

      if(!values.lastname){
        errors.lastname="Lastname is required"
      }

      if(!values.gmail){
        errors.gmail="Gmail is required"
      }
       
      if(!values.gender){
        errors.gender="Gender is required"
      }
       return errors;


    }


   
      const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        
              
  })
  


return(
  
   <form onSubmit={formik.handleSubmit}>
     <div>
     <label>First Name</label>
        <input 
        type="text" 
        name="firstname" 
        value={formik.values.firstname}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
        </div>
        <span style={{color:'red'}}>
        {formik.touched.firstname && formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}
        </span>
        <br/>
       
         
        <div>
        <label>Last Name</label>
        <input 
        type="text" 
        name="lastname" 
        value={formik.values.lastname}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        />
        </div>
        <span style={{color:'red'}}>
        {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
        </span>
          <br/>


        
        <div>
        <label>Gmail &nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input 
        type="gmail" 
        name="gmail" 
        value={formik.values.gmail}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
       />
        </div>
        <span style={{color:'Red'}}>
        {formik.touched.gmail && formik.errors.gmail ? <div>{formik.errors.gmail}</div> : null}
        </span>
        <br/>
        
        <div>
        <label>Gender</label>
        <input 
        type="radio" 
        name="gender" 
        value="male"
        onBlur = {formik.handleBlur}
        onChange={formik.handleChange}
        
        />Male
        
        

        <input 
        type="radio" 
        name="gender" 
        value="Female"
        onBlur = {formik.handleBlur}
        onChange={formik.handleChange}
       />
        Female
        
      </div>
      <span style={{color:'red'}}>
      {formik.touched.gender && formik.errors.gender ? <div>{formik.errors.gender}</div> : null}
      </span>
      <br />

      <div>
      <label> Courses : </label>
            <select
              name="courses"
              value={formik.values.courses}
              onChange={formik.handleChange}
            >
              <option> Angular </option>
              <option> React </option>
              <option> Node </option>
              <option> Mongo </option>
            </select>
            </div>
          <br />
        
        <div>
        <button type='Submit'>Submit</button>&nbsp;
         

        <button type='submit' onClick={formik.resetForm}>Reset</button>

        </div>
   
   </form>


)
}
export default App;