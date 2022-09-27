import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {

    const {setAlerta, busquedaLetra} = useLetras()

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setAlerta('')

        if(Object.values(busqueda).includes('')) {
            setAlerta('Rellena los 2 campos')
            return
        }
        busquedaLetra(busqueda)
    }

  return (
    <form onSubmit={handleSubmit}>
        <legend>Busca por artista y canción</legend>
        <div className='form-grid'>
            <div>
                <label>Artista</label>
                <input type="text" name='artista' placeholder='Nombre del artista' value={busqueda.artista} 
                onChange={e => setBusqueda({
                    ...busqueda, 
                    [e.target.name] : e.target.value})
                } 
                />
            </div>
            <div>
                <label>Canción</label>
                <input type="text" name='cancion' placeholder='Nombre de la canción' value={busqueda.cancion} onChange={e => setBusqueda({
                    ...busqueda, 
                    [e.target.name] : e.target.value})
                } 
                />
            </div>
            <input type="submit" value='Buscar' />
        </div>
    </form>
  )
}

export default Formulario