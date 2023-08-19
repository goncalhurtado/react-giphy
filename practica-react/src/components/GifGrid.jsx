import React from 'react'
import UseFetchGifs from '../components/hooks/UseFetchGifs'
import GifGridItem from './GifGridItem'
import LoadingGif from './LoadingGif'


const GifGrid = ({category="batman"}) => {
  const { data, loading } = UseFetchGifs(category)

  return (
    <div>
      <div className='contenedor-category'>
        <h3 className='titulo-category'>{category}</h3>
      </div>
        <div className='container'>
          {loading ? <LoadingGif/> : ""}
          {
            data.map( gif => (
             <GifGridItem gif={gif} key={gif.id}/>
            ))
            }
        </div>
    </div>
  )
}

export default GifGrid