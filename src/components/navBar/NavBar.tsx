import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import car from "../../assets/carro.png";




function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/' className='text-2xl font-bold uppercase'><img src={logo} alt="" className="" /></Link>

          <div className="flex">
          <label className="relative block w-96">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Pesquisar"
              type="text"
              name="search"
            />
          </label>
        </div>

            <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>

              <div className="hover:underline"> <Link to='/login' className='hover:underline'><img src={user} alt="" className="w-3/4" /></Link> </div>
              <div className='hover:underline'> <img src={car} alt="" className="w-3/4" /></div>

              
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar