import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function ClientePorCodigo(props) {
  const router = useRouter()

  return (
    <Layout title="Navegação dinámica">
      <div>Filial: {router.query.filial}</div>
      <div>Cliente: {router.query.codigo}</div>
    </Layout>
  )
}
