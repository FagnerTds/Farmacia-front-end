import React from 'react';
import homeLogo from '../../assets/farmacia.png'
import './Home.css';
import ListaProdutos from '../../components/produtos/ListaProdutos/ListaProdutos';
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos';



function Home() {
    return (
        <>
        <div className="bg-emerald-300 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Aqui você encontra medicamentos e cosméticos</p>
  
              <div className="flex justify-around gap-4">
              <ModalProdutos />
                
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-1/5' />
      
            </div>
          </div>
        </div>
        <ListaProdutos />
      </>
    );
}

export default Home;