function Skill({ name }) {
  return <li>{name}</li>
}

function App() {
  return (
    <div>
      <h1>Jemila Hyder</h1>
      <h2>Junior AI Developer</h2>

      <p>I completed Bio Maths and AI Developer courses.</p>

      <h3>My Skills</h3>
      <ul>
        <Skill name="HTML" />
        <Skill name="CSS" />
        <Skill name="JavaScript" />
        <Skill name="Python" />
        <Skill name="React" />
      </ul>

      <button onClick={() => alert('Thank you!')}>
        Contact Me
      </button>
    </div>
  )
}

export default App
