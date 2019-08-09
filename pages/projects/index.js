import React from 'react'
import Link from 'next/link'

class Projects extends React.Component {
  render() {
    return (
      <div className='container'>
        <p>{text}</p>
      </div>
    )
  }
}


const text = `I had an ambition to create a game since childhood and after my PhD I started to think seriously about making a game. I had no experience so the game would have to be simple. I chose the Unreal Engine, due to its popularity and extensive documentation.  

The game I eventually made was called BOOST BALL, and you can download it here. It was not popular but the experience was rewarding and I found the learning and problem-solving experience extremely enjoyable. If you would like a short telling of its development, the problems I encountered, and the solutions that I implemented then please read on. 

The video above shows the first prototype that I created to test the basic mechanics of the game. A controllable cue ball used to pot balls in order in the fastest time. I progressed with the game, building a simple table, making textures, and setting up the basic game logic. The first issue was a technical one; crisp dynamic shadows are computationally expensive and caused slowdown on mobile devices. I shifted to fully diffuse lighting, removing shadows entirely, and having a flat style.  

Other problems were related to gameplay. Collisions with the cue ball felt unsatisfying so a force was added along the contact vector. There was no loss state, which left the game feeling boring, so a ball was added to chase the players cue ball and end the game if a collision was detected. In addition, a penalty was added for hitting balls out of order. The video below shows the finished demo that I was considering as a basis to move forward. 

I took a step back and realised that I hated it. It was visually unappealing while being both boring and hard. The optimal strategy was to ignore the potting order and get lucky with the break. Sadly, it needed to be completely reworked and after some thought about why it was so bad, I made some changes.  

It was too hard to hit the balls accurately using a touch screen so the table was redesigned to be square with curved walls that funnelled balls towards pockets. Boost, jump, and pound abilities were added to the cue ball to increase excitement, complexity and interactivity. The timer was switched to a countdown to increase urgency, re-enforced by visual and auditory feedback. Balls were assigned point values, which altered their size and density, offering risk/reward mechanics. Power-ups were implemented, to increase variety and as a way to extend the countdown timer. Balls were changed to spawn in as the game progressed. These changes lead to developing levels based on a ball spawn times, and an endless mode.  

These changes lead to their own challenges. In the case of spawning balls over time the question became, where and how? Some balls can cause a player to lose, so their introduction to the game must be both non-interactable and telegraphed. Spawning them in the air and scaling them to their correct size, at which point they would become active and drop to the surface, gave positional and timing information to the player. Changes to ball physics and table meant the balls would often leave the playing surface. A transparent roof kept the balls in the play area but their position was hard to place in space due to the lack of shadows. I looked at Tetris for the solution to this problem and implemented a semi-transparent cylindrical shadow below balls. 

 

 

The result of all this is a simple game that I am happy with despite a few shortcomings and things that didn’t work out. The game was released for free on android and garnered 10-50 downloads. I think it would be fair to say that I enjoyed making it more than anyone enjoyed playing it. Overall, I accomplished exactly what I aimed to do and look back on the project fondly. `

export default Projects