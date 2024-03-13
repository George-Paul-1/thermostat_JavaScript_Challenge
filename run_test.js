Thermostat = require('./thermostat');

const thermostat = new Thermostat();

console.log(thermostat.getTemperature()); // should return 20

thermostat.up();
thermostat.up();
console.log(thermostat.getTemperature()); // should now return 22

thermostat.down();
console.log(thermostat.getTemperature()); // should now return 21

thermostat.setPowerSaving(true); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
thermostat.up();
}

console.log(thermostat.getTemperature()); // should be 25 (max reached)

thermostat.setPowerSaving(false); // PSM is now off, max temperature is no more 25

thermostat.up();
console.log(thermostat.getTemperature()); // should now return 26

thermostat.reset();
console.log(thermostat.getTemperature()); // should be back to 20