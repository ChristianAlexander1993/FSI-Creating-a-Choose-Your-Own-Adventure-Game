//Your Code here
let firstAnswer = window.prompt("Do you head left or right?");
if (firstAnswer === 'left') {
  let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you: 'follow', or 'continue' on your path?`);
  if (secondAnswer === 'follow') {
    let thirdAnswer = window.prompt(
      `You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content if you 'stay', but you wonder if you should 'spread the word' to the world to this magical safe haven.`
    );
    if (thirdAnswer === 'stay') {
      let thirdAnswer = window.alert(
        `You live happily amongst the cats for the rest of your days! Eventually you even become a cat, unable to return to your previous life! But you are fine with this, being a person sucked anyways. The End.`
      );
    } else if (thirdAnswer === 'spread the word') {
      let thirdAnswer = window.alert(
        `After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, even thinks you are crazy! Even though you know it's true, no one else will ever know, let alone talk about in the future. Game Over.`
      );
    }
  }
  if (secondAnswer === 'continue') {
    let thirdAnswer = window.prompt(
      `You come across a chamber that reaches upward to a shining light above. There is a long, winding 'staircase', and a much quicker, but rickety-looking 'ladder' that leads up toward the light. Which do you take?`
    );
    if (thirdAnswer === 'ladder') {
      let thirdAnswer = window.alert(
        `After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home. Game Over.`
      );
    } else if (thirdAnswer === 'staircase') {
      let thirdAnswer = window.alert(
        `After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever. The End.`
      );
    }
  }
} else if (firstAnswer === 'right') {
  let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`);
  if (secondAnswer === 'past the dragon') {
    let thirdAnswer = window.prompt(
      `The dragon wakes up and sits upright. You only have a moment to respond, to 'stay there' or 'run':`
    );
    if (thirdAnswer === 'stay there') {
      let thirdAnswer = window.alert(
        `You and the dragon have an uplifting conversation about local politics and become lifelong friends. Game Over.`
      );
    } else if (thirdAnswer === 'run') {
      let thirdAnswer = window.alert(
        `Quickly, you run back to the cave's entrance. Sheepish, you return home. The End.`
      );
    }
  }
  if (secondAnswer === 'away from dragon') {
    let thirdAnswer = window.prompt(
      `After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either 'draw it' or 'pick it'. Which do you do?`
    );
    if (thirdAnswer === 'draw it') {
      let thirdAnswer = window.alert(
        `You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch. The End.`
      );
    } else if (thirdAnswer === 'pick it') {
      let thirdAnswer = window.alert(
        `You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust. Game Over.`
      );
    }
  }
}
