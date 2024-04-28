import * as Styles from "./styles"

import { useRef, useEffect, useState } from "react"

import { useLocation } from 'react-router-dom'
import { toSvg } from "html-to-image"

interface UserProps {
  id: string | null
  name: string | null
  lastName: string | null
  age: string | null
  sex: string | null
}

export function Document() {
  const [ documentImageURL, setDocumentImageURL ] = useState('')
  const [ documentAlreadyPrinted, setDocumentAlreadyPrinted ] = useState(false)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const user: UserProps = {
    id: queryParams.get('id'),
    name: queryParams.get('name'),
    lastName: queryParams.get('lastname'),
    age: queryParams.get('age'),
    sex: queryParams.get('sex')
  }

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function transformComponentToPng() {
      toSvg(ref.current!)
      .then((dataUrl) => {
        setDocumentImageURL(dataUrl)
        setDocumentAlreadyPrinted(true)
      })
      .catch(error => console.error(error))
    }

    transformComponentToPng()
  }, [])

  return (
    <>
      <Styles.Root
        ref={ref}
        style={{ display: documentAlreadyPrinted ? 'none' : '' }}
      >
        <div className="Content">
          <div className="contentRow1">
            <h3>LOS SANTOS</h3>
            <span className="line"></span>
          </div>
          <div className="contentRow2">
            <h2>BAPHOMEEEEEEEET</h2>
          </div>
          <div className="contentRow3">
            <div className="avatar">
              <img src="src/assets/avatar.png" alt="user character photo" />
            </div>

            <ul>
              <li>
                Nome: <strong>{user.name}</strong>
              </li>
              <li>
                Sobrenome: <strong>{user.lastName}</strong>
              </li>
              <li>
                Idade: <strong>{user.age}</strong>
              </li>
              <li>
                Sexo: <strong>{user.sex}</strong>
              </li>
            </ul>
          </div>

          <h3 className="idNumber">ID: {user.id}</h3>
        </div>

        <div className="id">
          <p>
            {
              "48f69025-9ff5-4122-9c55-f842eae4b17b-48f69025-9ff5-4122-9c55-f842eae4b17b-48f69025-9ff5-4122-9c55-f842eae4b17b"
            }
          </p>
        </div>
      </Styles.Root>

      <img style={{ display: documentAlreadyPrinted ? '' : 'none' }} src={documentImageURL} alt="Vitor Gay" />
    </>
  )
}