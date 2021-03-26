// import React from 'react';
// // import img from './dd.jpg';

// function Login()
// {
//     return(
//         <div className="back ">
//             <div className="section">
//                 <div className="box">
//                     <div  id="blink-bg">
//                         <h1>This is my Login Page</h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login;

import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

function Login()
{
    // create hook
    const {register, handleSubmit, errors}=useForm();

    //create a function
    const onSubmit =(data)=> {
        console.log(data);
    }

    return(
        <div className="App">
            <h1>Login Page</h1>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="column">
                            <div className="card">   
                                <label>Enter Your Email</label><br/>
                                <input type="text" placeholder="Enter Email" name="email" ref={register({required:"Email Required"})}/><br/><br/>
                                {errors.email && <p>{errors.email.message }</p>}

                                <label>Enter Your Password</label><br/>
                                <input type="password" placeholder="Enter Password" name="password" ref={register({required: "PASSWORD REQUIRED", minLength:8})}/><br/><br/>
                                {errors.password && <p>{errors.password.message }</p>}

                                <input type="submit" name="submit" id="submit" value="SUBMIT"></input>
                                <p>New User</p><Link to="/Register" className="navstyle">Register</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;