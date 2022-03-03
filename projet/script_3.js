

{let hashTag = 1;
let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let space = number;
while(hashTag <= number) {
    console.log((" ").repeat(space - 1) + ("#").repeat(hashTag)); 
    hashTag += 1;
    space -= 1;
  }
}