// custom hook
import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    // const [state, setState] = useState({data: null, loading: true})
    const [state, setState] = useState({data: 0, loading: true})

    useEffect(() => {
        // setState({data: null, loading: true})
        setState(state => ({data: state.data, loading: true}))
        fetch(url)
        .then(x => x.text())
        .then(y => {
            // console.log(y)
            setState({data: y, loading: false})
        })
    }, [url])

    return state

}