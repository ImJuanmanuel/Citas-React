import Paciente from "./Paciente"



export default function ListadoPacientes({ pacientes, setPaciente,eliminarPaciente}) {

  return (
    
    <div className='md:w-1/2 lg:w-3/5 '>



      {/* {pacientes.length <= 0 ? "No Hay Pacientes":"Si Hay Pacientes"} */}
      {pacientes && pacientes.length ?

        (
          <>

            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

            <p className='text-center mt-8 mb-10 text-lg '>
              Administra tus {""}
              <span className='text-red-600 font-extrabold'>Pacientes y Citas</span>
            </p>

            <div className="md:h-screen overflow-y-scroll">

              {pacientes.map((paciente) => (

                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />

              ))}




            </div>

          </>
        ) : (

          <>

            <h2 className='font-black text-3xl text-center'>No Hay Pacientes</h2>

            <p className='text-center mt-8 mb-10 text-lg '>
              Comienza Agregando Pacientes {""}
              <span className='text-red-600 font-extrabold'>Apareceran en este Apartado</span>
            </p>

          </>

        )}









    </div>
  )
}
