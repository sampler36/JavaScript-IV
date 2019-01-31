/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===constructor
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(attrs) {
    this.createdAt = attrs.createdAt;
    this.dimensions = attrs.dimensions;
    }
    
    
    /*
      === CharacterStats ===
      * healthPoints
      * name
      * takeDamage() // prototype method -> returns the string '<object name> took damage.'
      * should inherit destroy() from GameObject's prototype
    */
    
      function CharacterStats(charecterAttrs){
        GameObject.call(this, charecterAttrs);
        this.thisthis = charecterAttrs.thisthis;
      }
      CharacterStats.prototype = Object.create(GameObject.prototype);
    
      CharacterStats.prototype.takeDamage = function() {
       return `${this.name} took damage.`
      };
      
    
      CharacterStats.prototype.checkifthisthis = function() {
        if(this.thisthis) {
          return true;
        } else {
          return false;
        }
      };
      
    
    /*
      === Humanoid (Having an appearance or character resembling that of a human.) ===
      * team
      * weapons
      * language
      * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
      * should inherit destroy() from GameObject through CharacterStats
      * should inherit takeDamage() from CharacterStats
    */
      function  Humanoid(attrs) {
        CharacterStats.call(this, attrs);
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.healthPoints = attrs.healthPoints;
        this.language = attrs.language;
    
      }
      Humanoid.prototype = Object.create(CharacterStats.prototype); //this one take the f from the char stats ....inherit
    
      Humanoid.prototype.destroy = function(){
        return `${this.name} was removed from the game `} //
    
      Humanoid.prototype.greet = function(){
        return `${this.name} offers a greeting in ${this.language} `};//
    
      
        GameObject.prototype.createdAt = function(created) {
          console.log (` Your character is ${this.name} with a  ${this.weapon} height: ${this.dimensions} and health at ${this.healthPoints}`);
        };
      
      
    /*
      * Inheritance chain: GameObject -> CharacterStats -> Humanoid
      * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
      * Instances of CharacterStats should have all of the same properties as GameObject.
    */
    
    // Test you work by un-commenting these 3 objects and the list of console logs below:
    
    
      const mage = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        healthPoints: 5,
        name: 'Bruce',
        team: 'Mage Guild',
        weapons: [
          'Staff of Shamalama',
        ],
        language: 'Common Tongue',
      });
    
      const swordsman = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 2,
          height: 2,
        },
        healthPoints: 15,
        name: 'Sir Mustachio',
        team: 'The Round Table',
        weapons: [
          'Giant Sword',
          'Shield',
        ],
        language: 'Common Tongue',
      });
    
      const archer = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 4,
        },
        healthPoints: 10,
        name: 'Lilith',
        team: 'Forest Kingdom',
        weapons: [
          'Bow',
          'Dagger',
        ],
        language: 'Elvish',
      });
      console.log(mage.createdAt); // Today's date
      console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
      console.log(swordsman.healthPoints); // 15
      console.log(mage.name); // Bruce
      console.log(swordsman.team); // The Round Table
      console.log(mage.weapons); // Staff of Shamalama
      console.log(archer.language); // Elvish
      console.log(archer.greet()); // Lilith offers a greeting in Elvish.
      console.log(mage.takeDamage()); // Bruce took damage.
      console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
      
    /*
      // Stretch task: 
      // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
      // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
      // * Create two new objects, one a villain and one a hero and fight it out with methods!
      */
    // create a class named person that accepts name, age, height / add a speak method ('hie my name is);
    
          function Person(props){
            this.name = props.name;
            this.age = props.age;
            this.height = props.height;
    
          }
          
          Person.prototype.speak = function(){
            return `hie my name is ${this.name}`;
          }
           const guy = new Person({name:' Tale', age:25, height:'170 cm'})
             
          console.log(guy.speak()); //when it a fucntion double curcly braces;
