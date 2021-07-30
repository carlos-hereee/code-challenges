/*
  Call two arms equally strong if the heaviest weights 
  they each are able to lift are equal.

  Call two people equally strong if their strongest arms
  are equally strong (the strongest arm can be both the right
  and the left), and so are their weakest arms.

  Given your and your friend's arms' lifting capabilities find
  out if you two are equally strong.
*/
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const myStrongArm = yourLeft > yourRight ? yourLeft : yourRight;
  const friendStrongArm =
    friendsLeft > friendsRight ? friendsLeft : friendsRight;
  console.log("myStrongArm", myStrongArm);
  console.log("friendStrongArm", friendStrongArm);
  if (myStrongArm !== friendStrongArm) return false;
  return yourLeft + yourRight === friendsLeft + friendsRight;
}
console.log("areEquallyStrong()", areEquallyStrong(10, 15, 5, 20));
