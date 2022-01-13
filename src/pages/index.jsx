import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" color="crimson" />
      <Navegador texto="Exemplo" destino="/exemplo" color="#893cc8" />
      <Navegador texto="Jsx" destino="/jsx" />
      <Navegador texto="Navegação" destino="/navegacao" color="#7a002f" />
      <Navegador
        texto="Navegação Dinâmica"
        destino="/cliente/BA/122223"
        color="#dfa937"
      />
      <Navegador
        texto="Componente com estado"
        destino="/estado"
        color="#3f954e"
      />
      <Navegador texto="API" destino="/integracao" color="#527fb3" />
      <Navegador
        texto="Conteúdo estático"
        destino="/estatico"
        color="#fa054e"
      />
    </div>
  )
}
