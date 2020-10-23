import React from 'react'


const List = (props) => {
    const { repos } = props;
    if (!repos) return null
    if (!repos.length) return <p>No repo , sorry</p>
    console.log(repos)
    return (
        <ul>
            {repos.map((e) => {
                return <li key={e.id}>{e.full_name}</li>
            })}
        </ul>
    )
}

export default List