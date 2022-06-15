// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

function dirReduc(arr){
    // ...
    for(let i= 0;i< arr.length; i++){
      if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") || (arr[i] === "EAST" && arr[i+1] === "WEST")){
        arr.splice(i,2)
        i = 0
      }else if((arr[i] === "NORTH" && arr[i-1] === "SOUTH") || (arr[i] === "SOUTH" && arr[i-1] === "NORTH")||(arr[i] === "EAST" && arr[i-1] === "WEST")||(arr[i] === "WEST" && arr[i-1] === "EAST")){
        arr.splice(i-1,2)
        i = 0
      }
  }
  return arr
}
 
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])