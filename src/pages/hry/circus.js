import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout'
import Jumbotron from '../../components/jumbotron'
import GameInfo from '../../components/gameInfo'
import Support from '../../components/support'

export default () => {
  const games = require('../../data/hry.json')
  const currGame = games.find(game => game.codeName === 'circus')
  return (
    <Layout className="game">
      <Jumbotron title={currGame.title} className="home zoomy" image="circus" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            {/* Zábavná karetní hra volně ke stažení a vytištění na základě <Link to="/licence/">Creative Commons license</Link>. ZIP archiv (20 MB) obsahuje jednostranné i oboustranné verze karet v PDF, návod k vytištění a pravidla hry. Ke hře jsou potřeba kostky nebo <a href="https://bit.ly/circusdice" target="_blank" rel="noopener noreferer">aplikace</a>. */}
            Hra aktuálně prochází finálními kosmetickémi úpravami, získává profesionální ilustrace a&nbsp;v&nbsp;nejbližší době bude oficiálně vypuštěna! Pro nejnovější informace můžete sledovat náš <a href="http://www.facebook.com/jerrylabsgames" target="_blank" rel="noopener noreferrer">facebook</a>.
          </p>
          {/* <div className="game__download-wrap">
            <a href="#" className="button button--download">Stáhnout hru</a>
          </div> */}
          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>Více o hře</h2>
          <p>
            Cyborg Mutant Zombie Circus původně vznikla jako vánoční dárek pro nejbližší okruh přátel v zimě 2018. Po nečekaném ohlasu jsme se rozhodli sdílet její potenciál se světem. Po létech vývoje, testování a úprav máme tu čest oznámit, že vstupujeme do cílové rovinky prvního oficiálního print-to-play vydání pro veřejnost.
          </p>
          <p>
            Překonejte překážky a nástrahy bláznivého labyrintu. V kůži vyřazeného robota nebo nepovedeného mutanta získejte přízeň fanoušků a staňte se šampionem arény Cyborg Mutant Zombie Circus, jejíž cena pro vítěze je meta nejvyšší - stát se člověkem.
          </p>
          <h2>Poděkování</h2>
          <p>
            Za testování a&nbsp;feedback, díky kterému vděčí Cyborg Mutant Zombie Circus své současné podobě, děkujeme Jolance, Web Pro týmu, České deskoherní společnosti a&nbsp;všem ostatním, kteří se na něm podíleli. Autorem finálních ilustrací a&nbsp;designu karet je Ondřej Šulák.
          </p>
        </div>
      </section>
    </Layout>
  )
}