export default function Jsx() {
  const title = <h1>Jsx é um conceito Central</h1>

  function Subtitle() {
    return <h2>{'Muito massa!'.toUpperCase()}</h2>
  }

  return (
    <div>
      {title}
      {Subtitle()}
      <p>{JSON.stringify({ nome: 'bau', idade: 20391 })}</p>
    </div>
  )
}
