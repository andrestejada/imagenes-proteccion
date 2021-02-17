import React from 'react'
import ContenedorImg from './ContenedorImg'

const ContenedorListaImg = ({ imagenes }) => {
  if (imagenes === null) return null

  return (
    <div className='row justify-content-md-center justify-content-lg-center'>
      {imagenes.map((imagen, index) => (
        <ContenedorImg imagen={imagen} key={index} />
      ))}
    </div>
  )
}

export default ContenedorListaImg
