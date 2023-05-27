import {useState, useEffect} from 'react'
import Error from './Error'


export default function Formulario({pacientes,setPacientes,paciente,setPaciente}) {

const [nombre,setNombre] = useState('') 
const [propietario,setPropietario] = useState('') 
const [email,setEmail] = useState('') 
const [fecha,setFecha] = useState('') 
const [sintomas,setSintomas] = useState('') 


const [error,setError] = useState(false)


useEffect(() => {
  if(Object.keys(paciente).length>0){
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
  }
},[paciente])

const generarId = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return fecha + random
}

const handleSubmit = (e) =>{
      e.preventDefault();

      if([nombre,propietario,email,fecha,sintomas].includes('')){
        setError(true)
        return
      }
      setError(false)

      const objectoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        
      }

      if(paciente.id){
          objectoPaciente.id=paciente.id

          const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objectoPaciente:pacienteState )
          setPacientes(pacientesActualizados)
          setPaciente({})
        }else{
        objectoPaciente.id = generarId()
        setPacientes([...pacientes,objectoPaciente])
      }
      /* setPacientes([...pacientes,objectoPaciente]) */

      //console.log(objectoPaciente)
      


      //
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')

      
}



  return (
    <div className='md:w-1/2 lg:w-2/5'>
      
      <h2 className='font-bold text-3xl text-center'>
        Seguimiento de Pacientes
      </h2>

      <p className='mt-8  text-center text-lg'>
        Agrega Pacientes y {""}
        <span className='text-red-600 font-extrabold'>Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-xl rounded-lg py-10 px-5 mt-10 mx-5 my-5'>

        {/* {error && <Error mensaje='Todos los Campos son obligatorios'/>} */}
        {error && <Error><p>Todos los Campos son obligatorios</p></Error>}

        

        <div className='mb-5'>

          <label htmlFor='mascota' className='block uppercase font-bold text-gray-700' 
            >Nombre de la Mascota: {""}</label>
          <input 
            id='mascota' 
            type="text" 
            placeholder='Nombre de la Mascota'
            className='border-2 outline-none w-full p-2 mt-2 placeholder-stone-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value) }
          />

        </div>
        {/* ------------------------------------------------------------------------------------ */}
        <div className='mb-8'>

          <label htmlFor='prop' className='block uppercase font-bold text-gray-700' 
            >Nombre Propietario: {""}</label>
          <input 
          id='prop' 
          type="text" 
          placeholder='Juan Jose Pancho'
          className='border-2 outline-none w-full p-2 mt-2 placeholder-stone-400 rounded-md'
          value={propietario}
          onChange={(e) => setPropietario(e.target.value) }
          />

        </div>
        {/* ------------------------------------------------------------------------------------ */}
        <div className='mb-8'>

          <label htmlFor='email' className='block uppercase font-bold text-gray-700' 
            >Email: {""}</label>
          <input 
            id='email' 
            type="email" 
            placeholder='JuanJosePancho@gmail.com'
            className='border-2 outline-none w-full p-2 mt-2 placeholder-stone-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />

        </div>
        {/* ------------------------------------------------------------------------------------ */}
        <div className='mb-8'>

          <label htmlFor='alta' className='block uppercase font-bold text-gray-700' 
            >Alta: {""}</label>
          <input 
            id='alta' 
            type="date"
            className='border-2 outline-none w-full p-2 mt-2 placeholder-stone-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value) }
          />

        </div>
        {/* ------------------------------------------------------------------------------------ */}
        <div className='mb-8'>

          <label htmlFor='sintomas' className='block uppercase font-bold text-gray-700' 
            >Sintomas: {""}</label>
          <textarea
          
            className='border-2 outline-none w-full p-2 mt-2 placeholder-stone-400 rounded-md resize-none'
            id='sintomas'
            placeholder='Describe los sitomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value) }
          />

        </div>

        <input type="submit" 
          className='bg-red-600 w-full p-3 rounded-md text-white uppercase font-bold 
            hover:bg-red-700 cursor-pointer transition-all '
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />


      </form>
      
    </div>
  )
}
