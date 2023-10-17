import React from 'react';
import FormularioProdutos from '../formularioProdutos/FormularioProdutos';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProdutos.css'

function ModalProdutos() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 bg-indigo-900 hover:bg-white hover:text-indigo-800'>Cadastrar Produtos</button>} modal>
        <div>
          <FormularioProdutos />
        </div>
      </Popup>
    </>
  );
}

export default ModalProdutos;