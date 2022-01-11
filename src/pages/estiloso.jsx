import Styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estilo() {
  return (
    <Layout title="Exemplo de CSS modularizado">
      <div className={Styles.roxo}>
        <h1>Estilo de componente</h1>
      </div>
    </Layout>
  )
}
