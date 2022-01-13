import { useState } from 'react'
import Layout from '../components/Layout'

export default function Estado(props) {
  const [val, setVal] = useState(0)
  function incrementar() {
    setVal(val + 1)
  }
  return (
    <Layout title="Componente com Estado">
      <span>{val}</span>
      <div>
        <button onClick={incrementar}>incrementar</button>
      </div>
    </Layout>
  )
}
