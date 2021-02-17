import React, { useState } from 'react'
import ContenedorListaImg from './ContenedorListaImg'

const Formulario = () => {
  const [imagenes, guardarImagenes] = useState(null)
  //esta funcion realiza el preview de la imagen y la pasa de ser un archivo a ser una img
  const onChangeFile = e => {
    const archivos = e.target.files

    let arreglo = []
    for (let archivo of archivos) {
      const reader = new FileReader()

      reader.onload = () => {
        arreglo = [...arreglo, reader.result]
        guardarImagenes(arreglo)
      }

      reader.readAsDataURL(archivo)
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row justify-content-md-center'>
        <form className=' col-md-6 bg-light rounded'>
          <div className='form-group'>
            <label
              className='d-block text-center font-weight-bold'
              htmlFor='uploadImg'
            >
              Sube una imagen en formato .jpg
            </label>
            <input
              type='file'
              name='imagen'
              id='uploadImg'
              className='form-control-file'
              accept='.jpg'
              required
              multiple
              onChange={onChangeFile}
            />
          </div>
          <button type='submit' className='btn btn-primary btn-block mb-3'>
            Subir Imagenes
          </button>
        </form>
      </div>

      {<ContenedorListaImg imagenes={imagenes} />}
    </div>
  )
}

export default Formulario
