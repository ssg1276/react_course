import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/ssg1276')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data)
  //         setData(data)
  //       })
  //   }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Repos: {data.public_repos}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

//recommended to keep it in separate file
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ssg1276')
  return response.json()
}
