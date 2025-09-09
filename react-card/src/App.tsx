
import './App.css'
import React from "react"

function App() {

  return (
 <div className="card">
      <img  className='image' src="./src/assets/me.png" />
      <main>
        <h1 className='name'>Paul Obiero</h1>
        <h3 className='job'>Frontend Developer</h3>
        <h4 className='website'>paulobiero.website</h4>
        <div className='btns'>
          <button className='email-btn'><img className='email-icon' src="./src/assets/email.png"/>Email</button>
          <button className='linkedin-btn'><img className='linkedin-icon' src="./src/assets/linkedin.png"/>LinkedIn</button>
        </div>
        <section className='about'>
          <h2>About</h2>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I am always looking for new things to learn.</p>
        </section>
        <section className='interests'>
          <h2>Interests</h2>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </section>
        <footer>
          <img className='twitter-icon' src="./src/assets/twitter.png"/>
          <img className='facebook-icon' src="./src/assets/facebook.png"/>
          <img className='instagram-icon' src="./src/assets/instagram.png"/>
          <img className='github-icon' src="./src/assets/github.png"/>
        </footer>
</main>

 </div>
  )
}

export default App
