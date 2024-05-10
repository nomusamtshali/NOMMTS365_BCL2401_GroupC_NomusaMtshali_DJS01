/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const distance2 = distance + (velocity * (time / 3600)) //calculates new distance
const remainingFuel = fuel - (fuelBurnRate * time) //calculates remaining fuel

const newAcceleration = acceleration * (3600 / 1000) ; // converting m/s^2 to km/h^2

const velocity2 = calculateNewVelocity(velocity, newAcceleration, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calculateNewVelocity  (velocity, newAcceleration, time) {
  return velocity + (newAcceleration * time) // calculate the new velocity based on the initial velocity (vel), the converted acceleration (newAcc), and the time (time).
}
try {
  if (calculateNewVelocity(velocity, newAcceleration, time) !== velocity + (newAcceleration * time))
    {
      throw new Error('Incorrect unit of measurement used!')
    }
} catch (error) {
  console.error(`Error:${error.message}`)
} 

console.log(`Corrected New Velocity: ${velocity2} km/h`);
console.log(`Corrected New Distance: ${distance2} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);




