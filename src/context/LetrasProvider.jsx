import { useState, createContext } from "react";
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('')
    const [letra, setLetra] = useState('')
    const [cargando, setCargando] = useState('')
    const busquedaLetra = async (busqueda) => {
        setCargando(true)
        try {
            const url = `https://api.lyrics.ovh/v1/{${busqueda.artista}/${busqueda.cancion}`
            const {data} = await axios(url)
            setLetra(data.lyrics)
            console.log(data.lyrics)

        } catch(error) {
            console.log(error)
            setAlerta('Canción no encontrada')
        }
        setCargando(false)

    }

    return (
        <LetrasContext.Provider value={{
            alerta, 
            setAlerta,
            busquedaLetra,
            letra,
            cargando
        }}>
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext