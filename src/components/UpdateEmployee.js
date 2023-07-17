import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const {id}=useParams();
    const navigate= useNavigate();
    const [emplyee, setemployee] = React.useState({ 
        id:id,
        firstName:"",
        lastName:"",
        emailID:"",
    });
    const handelchange=(e)=>{
        const value=e.target.value;
        setemployee({...emplyee,[e.target.name]:value});
    } ;

    useEffect(() => {
      
        const fetchData=async ()=>{
            try{
                const response=await EmployeeService.getEmployeeByID(id);

                setemployee(response.data);

            }catch(error){
                console.log(error);
            }
        };
        fetchData();

    }, [])
    

    const updateEmployee=(e)=>{
        e.preventDefault();
        EmployeeService.updateEmployee(emplyee,id)
        .then((response)=>{
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
        });
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className=' font-thin text-2xl tracking-wider'>
                <h1>Edit emp</h1>
            </div> 
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input type="text" name="firstName" value={emplyee.firstName} onChange={(e)=> handelchange(e)} className='border h-10 w-96 mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input type="text" name="lastName" value={emplyee.lastName} onChange={(e)=> handelchange(e)}  className='border h-10 w-96 mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input type="email" name="emailID" value={emplyee.emailID} onChange={(e)=> handelchange(e)} className='border h-10 w-96 mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button onClick={updateEmployee} className='rounded text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700' >update</button>  
            <button  onClick={()=>navigate('/')} className='rounded text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700' >cancel</button>  
            </div>
        </div>
      </div>
  )
}

export default UpdateEmployee
