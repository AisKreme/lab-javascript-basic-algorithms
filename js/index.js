// Iteration 1: Names and Input

let hacker1 = `Manish`;
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = `Manic Manish`;
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
  }

// Iteration 3: Loops

let upperCaseHacker1 = "";
let reverseHacker2 = "" ;

for (let i = 0 ; i < hacker1.length ; i++) {
 if (i === hacker1.length - 1) {
  upperCaseHacker1 += hacker1[i].toUpperCase();
}
else {
upperCaseHacker1 = upperCaseHacker1 +  hacker1[i].toUpperCase() + ` `;
}
}
console.log(upperCaseHacker1);


for (let i = hacker2.length - 1; i >= 0 ; i--) {
    reverseHacker2 =  reverseHacker2 + hacker2[i];
  }
  console.log(reverseHacker2);


if (hacker1 < hacker2){
    console.log(`The driver's name goes first.`);
    }
   else if (hacker1 > hacker2){
        console.log(`Yo, the navigator goes first definitely.`);
    }
   else {
        console.log(`What?! You both have the same name?`);
    }


  // Bonus 1

let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a feugiat est, non venenatis purus. Integer dictum, est at sodales congue, risus libero viverra ex, ut euismod mi mauris in est. Maecenas ut pulvinar metus. Donec bibendum ac metus in pretium. Sed malesuada tincidunt magna vitae lobortis. Vivamus blandit eu lectus quis varius. Aenean eleifend, tellus ac dignissim ultricies, neque tellus laoreet lacus, nec tempor elit sem vitae purus.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ut condimentum ex. Sed feugiat in sapien vel condimentum. Suspendisse auctor tempor lacus, non auctor neque ultricies quis. Proin facilisis massa sit amet nunc congue, malesuada interdum erat mollis. Vestibulum consectetur ligula pellentesque efficitur pellentesque. Aenean lacinia purus eu nunc scelerisque malesuada. Etiam mattis feugiat ultricies. Curabitur porttitor neque vel sem pretium sagittis. Maecenas non dolor in nisl semper pulvinar id sit amet nibh. Ut sit amet tortor risus. Aliquam dapibus ante at sapien bibendum aliquam. Etiam fermentum dolor eu lacus eleifend, sed venenatis nulla rhoncus. Cras egestas id ipsum quis vestibulum. Etiam bibendum lectus eros, eu feugiat odio maximus vitae.
    
Vestibulum dignissim viverra elit, eget fermentum sem bibendum id. Vestibulum ac sagittis risus. Morbi eu maximus tellus. Mauris dui justo, pharetra in laoreet vel, sodales a odio. Vivamus felis felis, aliquam sit amet tristique in, eleifend eu eros. Vivamus non sem egestas, ullamcorper mi ut, tincidunt ex. Aliquam dictum sagittis elementum.`;

//counter number of words
console.log(str.split(" ").length);


//count specific word
//split string when word appears and cut rest without the word
console.log(str.split(" et ").length - 1);

  // Bonus 2

  