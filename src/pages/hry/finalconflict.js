import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../components/layout'
import Jumbotron from '../../components/jumbotron'
import GameInfo from '../../components/gameInfo'
import Support from '../../components/support'

export default () => {
  const games = require('../../data/hry.json')
  const currGame = games.find(game => game.codeName === 'finalconflict')
  return (
    <Layout className="game">
      <Jumbotron title={currGame.title} className="home zoomy" image="finalconflict" />
      <div className="container game__panel">
        <div className="game__download">
          <p className="big">
            Akční karetní hra volně šiřitelná na základě <Link to="/licence/">licence Creative Commons</Link>.
            Již brzy!
            {/* ZIP archiv (XX MB) obsahuje PDF s kartami, jejich ruby a pravidla hry. Hru si zde můžete stáhnout a vytisknout nebo nechat u nás vyrobit. */}
            </p>
          {/* <div className="game__download-wrap">
            <a href="/games/finalconflict.zip" className="button button--download">Stáhnout</a>
            <a href="https://www.firmy.cz/sluzby/nabidka/vyroba-deskove-hry-12865086-174" className="button button--order">Vyrobit</a>
          </div> */}

          <Support />
        </div>
        <GameInfo game={currGame} />
      </div>
      <section>
        <div className="container">
          <h2>Více o hře</h2>
          <p>
            V roce 2500 nemá lidstvo na růžích ustláno. Zplundrovaná a zamořená planeta Země se stala nehostinným domovem pro lidstvo, jehož celosvětová populace se rozdělila do dvou ideologických frakcí.
          </p>
          <p>
            Hnutí Progresu vyznává technooptimistickou víru v nikdy nekončící virtuální růst a pokrok díky neustálému vývoji nových technologií. Jedovatý vzduch i voda spolu s oslabenou atmosférou donutily tuto část lidstva k životu v obrovských převážně podzemních metropolích, kde většina obyvatel sotva kdy spatří sluneční světlo. Naplňování svých potřeb svěřili z velké části robotům a virtuální realitě.
          </p>
          <p>
            Zbytek lidstva, který zůstal venku v pustině, se postupně adaptoval na změny. Hnutí Balance se řídí  fundamentalistickou filosofií udržitelnosti a naprosté rovnováhy člověka s přírodou. Tato společenství jsou řízena striktními pravidly ohledně chování a stylu života svých členů, která jsou vynucována přísnými tresty. Nulový odpad a téměř stoprocentní recyklace vyžaduje náročný životní styl, který však přispívá k jejich odolnosti.
          </p>
          <p>
            V metropolích Progresu lidé netušili, že venku může přežít nějaká civilizovaná společnost. Když utlumující se geotermální zdroje spolu s kolísající solární aktivitou začali způsobovat stále častější energetické problémy, byli donuceni do pustiny vyslat průzkumníky hledající nové zdroje. K jejich překvapení se na části povrchu vrátila vegetace v podobě radioaktivní džungle a tak rychle začali doplňovat energii nezbytnou pro chod měst spalováním zde získávané biomasy.
          </p>
          <p>
            Střet Balance a Progresu na sebe nenechal dlouho čekat. Jakákoliv naděje na usmíření je z ideologických důvodu zcela nemyslitelná. Nastal poslední střet v historii lidstva, finální konflikt.
          </p>
          <p>
            Final Conflict je poslední samostatně hratelnou expanzí karetní hry <Link to='/hry/supertrooper'>Super Trooper.</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}