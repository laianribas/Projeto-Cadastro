import { useState } from 'react'
import Layout from '../components/Layout'
export default function Integracao(props) {
  const [cliente, setCliente] = useState({})
  const [cod, setCod] = useState(0)

  async function obterCLiente() {
    const req = await fetch(`http://localhost:3000/api/clientes/${cod}`)
    const data = await req.json()
    setCliente(data)
  }

  return (
    <Layout title="API">
      <div>
        <input
          type="number"
          value={cod}
          onChange={e => setCod(e.target.value)}
        />
        <button onClick={obterCLiente}>Obter Cliente</button>
      </div>
      <ul>
        <li>Código: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  )
}
