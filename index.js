//Your Code here
// window.prompt('Do you head left or right?')
// let firstAnswer = window.prompt("Do you head left or right?");
// if (firstAnswer === "left") {
//   let secondAnswer = window.prompt(
//     "You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it or continue on your path? Follow or continue?"
//   );
//   if (secondAnswer === "follow") {
//     let secondAnswer = window.prompt(
//       "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. Thay are content with you staying, but you wonder if you should alert the world to this magical safe haven. Stay or spread the word?"
//     );
//     if (thirdAnswer === "stay") {
//       let thirdAnswer = window.prompt(
//         "You live happily amongst the cats for the rest of your days! And you never return to you original life and even become a cat! Being a person sucked anyways! Game Over."
//       );
//     } else if (thirdAnswer === "spread the word") {
//       let thirdAnswer = window.prompt(
//         "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, thinking you have gone insane! Even though you know everything was in fact true! Unfortunately the world will never know. Game Over."
//       );
//     }
//   } else if (secondAnswer === "continue") {
//     let secondAnswer = window.prompt(
//       "You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? Ladder or staircase?"
//     );
//   }
// } else if (firstAnswer === "right") {
//   let secondAnswer = window.prompt(
//     "You come accross a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?"
//   );
// }

let firstAnswer = window.prompt("Do you head left or right?");
if (firstAnswer === "left") {
  let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you: 'follow', or 'continue' on your path?`);
  if (secondAnswer === "follow") {
   let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder: Do you 'stay' or 'spread the word' to the outside world?`)
} if(thirdAnswer === 'stay'){
  let thirdAnswer = window.prompt(`You live happily amongst the cats for the rest of your days! Not too long later you end up becoming a cat, unable to return to your previous life. Being a person sucked and you are better off with 4 legs and no responsibility! The End`)
} 
  } 
   else if (firstAnswer === "right") {
  let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`);
}
