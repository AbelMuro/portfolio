/* 
  this is where i left off, i need a more reliable way of creating linear animations with useSpring()

  also, check out the documentation for useVelocity and useTime

  AnimatePentagram initial scale starts from 800 and ends at 2000,   [0.8, 5]

  OuterMostSquare mounts at 2000 with scale already set to 5

*/


export const LinearRing = {
  stiffness: 20,      // Low stiffness for gentle acceleration
  damping: 25,        // Damping keeps it smooth and non-bouncy
  mass: 1,          // Adds weight to stretch the duration
  restDelta: 0.0001,
  restSpeed: 0.0001
};

export const LinearPentagram = {
  stiffness: 40,      // Low stiffness for gentle acceleration
  damping: 25,        // Damping keeps it smooth and non-bouncy
  mass: 1,          // Adds weight to stretch the duration
  restDelta: 0.0001,
  restSpeed: 0.0001
};

export const LinearSquare = {
  stiffness: 40,      // Low stiffness for gentle acceleration
  damping: 25,        // Damping keeps it smooth and non-bouncy
  mass: 1,          // Adds weight to stretch the duration
  restDelta: 0.0001,
  restSpeed: 0.0001
};

export const LinearMoon = {
  stiffness: 40,      // Low stiffness for gentle acceleration
  damping: 25,        // Damping keeps it smooth and non-bouncy
  mass: 1,          // Adds weight to stretch the duration
  restDelta: 0.0001,
  restSpeed: 0.0001
};