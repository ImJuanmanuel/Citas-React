import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Paciente({ paciente, setPaciente, eliminarPaciente }) {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        Swal.fire({
            title: `Estas Seguro de eliminar al Paciente ${nombre}`,
            text: "Esta accion no se puede revertir",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed){
                eliminarPaciente(id)
                toast.success('Paciente Eliminado Correctamente', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                })

                
            }
            
            
        })
        

    }
    return (
        <div className=' m-5 bg-white shadow-md rounded-xl  px-5 py-10'>
            <p className='font-bold uppercase mb-3 text-gray-700'>

                Nombre: {''}
                <span className='normal-case font-normal'>{nombre}</span>


            </p>
            <p className='font-bold uppercase mb-3 text-gray-700'>

                Propietario: {''}
                <span className='normal-case font-normal'>{propietario}</span>


            </p>
            <p className='font-bold uppercase mb-3 text-gray-700'>

                Correo: {''}
                <span className='normal-case font-normal'>{email}</span>


            </p>
            <p className='font-bold uppercase mb-3 text-gray-700'>

                Alta{'(Fecha)'}: {''}
                <span className='normal-case font-normal'>{fecha}</span>


            </p>
            <p className='font-bold uppercase mb-3 text-gray-700'>

                Sintomas: {''}
                <span className='normal-case font-normal'>{sintomas}
                </span>


            </p>

            <div className="flex justify-between mt-10">

                <button
                    type="button"
                    className="bg-blue-700 py-2 px-10 rounded-lg text-white font-bold hover:bg-blue-900"
                    onClick={() => {
                        setPaciente(paciente)
                    }}
                >Editar</button>

                <button
                    type="button"
                    className="bg-red-700 py-2 px-10 rounded-lg text-white font-bold hover:bg-red-900"
                    onClick={handleEliminar}
                >Eliminar

                </button>

            </div>
            <ToastContainer />
        </div>
    )
}
