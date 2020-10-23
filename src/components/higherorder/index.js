import React, { useEffect, useState } from 'react'
import WithLoading from './withLoading'
import List from './list'
const ListWithLoading = WithLoading(List)

const HigherOrderTest = () => {
    const [loading, setLoading] = useState(false)
    const [repos, setrepos] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/hacktivist123/repos`)
            .then((json) => json.json())
            .then((res) => {
                setrepos(res)
                setLoading(false)
            });
    }, [])

    return (
        <>
            <h2>Higher order function test</h2>
            <ListWithLoading isloading={loading} repos={repos} />
        </>
    )
}

export default HigherOrderTest;