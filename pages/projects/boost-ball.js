import React from 'react'
import Link from 'next/link'

import NavigationProjects from '../../components/NavigationProjects'
import ListItem from '../../components/ListItem'

class Projects extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationProjects index={0} />
        <a className='link-major start' target="_blank" href='https://play.google.com/store/apps/details?id=com.ScrireGames.BoostBall&hl=en'>
          Download the game
        </a>
        <p>
          I had an ambition to create a game since childhood and after my PhD I started to think about it more seriously.  I chose the Unreal Engine, due to its popularity and extensive documentation. If you would like a short telling of its development, the problems I encountered, and the solutions that I implemented then please read on.
        </p>
        <p>
          The video below shows the first prototype that I created to test the basic mechanics of the game. A controllable cue ball used to pot balls in the fastest time. As the game progressed a number of issues arose.
        </p>
        <iframe className='video-main' src="https://www.youtube.com/embed/L580kzq8R2c" frameborder="0" allowfullscreen />
        <p>
          The first issue was a technical limitation. Crisp dynamic shadows are computationally expensive, causing the framerate to drop which prompted a shift to fully diffuse lighting, removing shadows entirely, and resulting in a flat aesthetic.
        </p>
        <p>
          Other problems were related to gameplay. Collisions were unsatisfying so a force was added along the contact vector. There was no loss state, which left the game feeling boring, so a bad ball was added to chase the player and end the game on contact. A penalty was added for hitting balls out of order to increase risk. With these changes I added a UI and intended to release it as a demo.
        </p>
        <iframe className='video-main' src="https://www.youtube.com/embed/vpQIs2beImI" frameborder="0" allowfullscreen />
        <p>
          The game was was boring, hard and looked awful. The optimal strategy was to ignore the potting order and get lucky with the break. After some thought about why it was so bad, I made some changes.
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
          These changes introduced their own challenges. Spawning balls over time raised the questions of where and how. Some balls can cause a player to lose, so their introduction to the game must be telegraphed. Introducing them by scaling while inactive introduced them gradually and doing so in the air helped the playing surface remain uncluttered. Changes to ball physics and spawn position increased airtime but their position was hard to place in space so a semi-transparent cylinder below balls was used to act as a shadow.
        </p>
        <iframe className='video-main' src="https://www.youtube.com/embed/2GlBSN1zD48" frameborder="0" allowfullscreen />
        <p>
          The result is a simple game that I am happy with despite some shortcomings. The game was released for free on android and has 10-50 downloads at time of writing. I think it would be fair to say that I enjoyed making it more than anyone enjoyed playing it. However, I accomplished exactly what I aimed to do and fulfilled a lifelong dream.
        </p>
        <a className='link-major end' target="_blank" href='https://play.google.com/store/apps/details?id=com.ScrireGames.BoostBall&hl=en'>
          Download the game
        </a>
      </div>
    )
  }
}

export default Projects