import Contact from '../components/Contact'
import Projects from '../components/Projects'
function Home() {
  return (
    <>
      <section
        id="intro"
        className="py-16 px-4 pb-40 pl-4 max-w-[1200px] mx-auto"
      >
        <p className="text-base/6">
          Hey! My name is{' '}
          <span className="text-7xl text-swash-5 block">Jimmy</span>{' '}
        </p>
        <h2 className="text-[4rem] font-normal">I'm a student</h2>
        <p className="text-base/6">
          I am currently attending Saint Louis University in St. Louis, Missouri
        </p>
        <p className="text-base/6">
          Currently, I'm learning Software Engineering, Algorithms, and Computing Priniciples
        </p>
        <p></p>
      </section>
      <Projects />
      <div className="gradient" />
      <Contact />
      <div className="gradient" />
    </>
  )
}

export default Home
