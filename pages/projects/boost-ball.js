import React from 'react'
import Link from 'next/link'

import NavigationProjects from '../../components/NavigationProjects'
import ListItem from '../../components/ListItem'

class Projects extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationProjects index={0} />
        <a className='end' target="_blank" href='https://play.google.com/store/apps/details?id=com.ScrireGames.BoostBall&hl=en'>
          Download the game here
        </a>
        <p>
        The video below shows the first prototype to test the basic mechanics of what would become Boost Ball. A controllable cue ball used to pot balls in the fastest time. As the game progressed a number of issues arose.         
        </p>
        <iframe className='video-main' src="https://www.youtube.com/embed/L580kzq8R2c" frameborder="0" allowfullscreen />
        <p>
          The first issue was a technical limitation. Crisp dynamic shadows are computationally expensive, causing the framerate to drop. This prompted a shift to fully diffuse lighting, removing shadows entirely, and resulting in a flat aesthetic.  Other problems were related to gameplay. Collisions were unsatisfying so a force was added along the contact vector. There was no loss state, so a ball was added to chase the player and end the game on contact. A penalty was added for hitting balls out of order to increase risk. After adding a UI the demo was set to release, with further development planned if people enjoyed the game. 
        </p>
        <iframe className='video-main' src="https://www.youtube.com/embed/vpQIs2beImI" frameborder="0" allowfullscreen />
        <p>
        The game was ugly, boring, difficult, and the optimal strategy was to ignore the potting order and get lucky with the break. It would be pointless to release before reworking.
        </p>
        <ListItem>
          <p>
          Accuracy using touch screens was difficult so the table was redesigned to be smaller, square, and with curved walls that funnelled balls towards pockets.
          </p>
        </ListItem>
        <ListItem>
          <p>
          Boost, jump, and pound abilities increased interactivity and excitement.
          </p>
        </ListItem>
        <ListItem>
          <p>
          The time was switched to a countdown to increase urgency, re-enforced by visual and auditory feedback.
          </p>
        </ListItem>
        <ListItem>
          <p>
          Balls were spawned in over time and assigned point values, coupled to changes in size and density, offering risk/reward mechanics.
          </p>
        </ListItem>
        <ListItem>
          <p>
          Power-ups were added to increase variety and introduced a way to extend the countdown timer.
          </p>
        </ListItem>
        <ListItem>
          <p>
          Different levels and an endless mode were introduced.
          </p>
        </ListItem>
        <p>
        These changes introduced their own challenges. Spawning balls over time raised the questions of where and how. Some balls can cause a player to lose, so their introduction to the game must be both non-interactable and telegraphed. Spawning in the air by scaling introduced them gradually, telegraphed their position and helped the playing surface remain uncluttered. Changes to ball physics and spawn position increased airtime but their position was hard to place in space due to the lack of shadows. The solution took inspiration from tetris, implementing a semi-transparent cylinder below balls to act as a shadow. 
        </p>
        <iframe className='video-main' src="https://www.youtube.com/embed/2GlBSN1zD48" frameborder="0" allowfullscreen />
        <p>
        The resulting game has 16 levels, an arcade mode, sound and music, particle effects, and high scores. It took around 6 months if learning is taken into account. The game was released for free on android, and runs well on tested devices. 
        </p>
        <a className='start' target="_blank" href='https://play.google.com/store/apps/details?id=com.ScrireGames.BoostBall&hl=en'>
          Download the game here
        </a>
      </div>
    )
  }
}

export default Projects