import React, { useEffect, useState } from 'react'
import { calcularRatio } from '../helpers/helper'

const ContenedorImg = ({ imagen }) => {
  //State para guardar los tamaños originales
  const [anchoimg, actualizarAnchoImg] = useState(0)
  const [altoimg, actualizarAltoImg] = useState(0)

  //state para guardar los nuevos tamaños de la img
  const [nuevoanchoimg, guardarNuevoAnchoImg] = useState(0)
  const [nuevoaltoimg, guardarNuevoAltoImg] = useState(0)

  //state guarda la orientacion ideal
  const [orientacion, guardarOrientacion] = useState('vertical')

  //captura las dimensiones de la img original y las guardo en el state
  const onchangeImg = e => {
    actualizarAnchoImg(e.target.naturalWidth)
    actualizarAltoImg(e.target.naturalHeight)
  }

  // UseEfect para llamar la comparacion de las dimensiones cada ves que se actulize el ancho img
  useEffect(() => {
    compararDimesiones()
  }, [anchoimg])

  //fuction que compara las dimensiones de la img y hace los calculos para dar orientacion y nuevas dimensiones de la img

  const compararDimesiones = () => {
    const anchoPagina = 796
    const altoPagina = 1123

    if (
      (anchoimg >= anchoPagina && anchoimg >= altoPagina) ||
      (altoimg >= altoPagina && altoimg >= anchoPagina)
    ) {
      if (anchoimg > altoimg) {
        const ratio = calcularRatio(anchoimg, altoimg)
        const nuevoAnchoImg = 1123
        const nuevoAltoImg = parseInt(nuevoAnchoImg / ratio)

        guardarOrientacion('Horizontal')
        guardarNuevoAltoImg(nuevoAltoImg)
        guardarNuevoAnchoImg(nuevoAnchoImg)
      } else if (anchoimg === altoimg) {
        const nuevoAnchoImg = 796
        const nuevoAltoImg = nuevoAnchoImg
        guardarOrientacion('Vertical')
        guardarNuevoAnchoImg(nuevoAnchoImg)
        guardarNuevoAltoImg(nuevoAltoImg)
      } else {
        const ratio = calcularRatio(anchoimg, altoimg)
        const nuevoAltoImg = 1123
        const nuevoAnchoImg = parseInt(nuevoAltoImg * ratio)
        guardarOrientacion('Vertical')
        guardarNuevoAnchoImg(nuevoAnchoImg)
        guardarNuevoAltoImg(nuevoAltoImg)
      }
    } else if (anchoimg > anchoPagina && anchoimg < altoPagina) {
      guardarNuevoAnchoImg(anchoimg)
      guardarNuevoAltoImg(altoimg)

      guardarOrientacion('Horizontal')

      console.log('horizontal')
    } else {
      guardarOrientacion('Vertical')
      guardarNuevoAnchoImg(anchoimg)
      guardarNuevoAltoImg(altoimg)
    }
  }

  if (imagen === '') return null

  return (
    <div className='bg-light mt-4 mb-4  mx-3 col col-md-5 col-lg-5'>
      <div className='row rounded'>
        <div className='col-md-6 p-0'>
          <h3 className='bg-primary text-center p-2 m-0 text-white'>
            Imagen Previa
          </h3>
          <img className='imgpreview' src={imagen} onLoad={onchangeImg} />
        </div>

        <div className='col-md-6 bg-dark'>
          <h4 className='titulo-img text-primary'>
            Medidas de la Imagen Original
          </h4>
          <p>El ancho original de la imagen es de : {anchoimg} px </p>
          <p>El alto original de la imagen es de : {altoimg} px </p>
          <h4 className='titulo-img text-primary'>
            Recomendaciones de la Imagen
          </h4>
          <p>La orientacion debe ser : {orientacion} </p>
          <p>El ancho de la imagen debe ser: {nuevoanchoimg} px </p>
          <p>El alto de la imagen debe ser: {nuevoaltoimg} px </p>
        </div>
      </div>
    </div>
  )
}

export default ContenedorImg
