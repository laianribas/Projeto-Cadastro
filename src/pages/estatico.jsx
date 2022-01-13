import Layout from '../components/Layout'
export default function Estatico(props) {
  return (
    <Layout title="Conteúdo Estático">
      <span>{props.numero}</span>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}
