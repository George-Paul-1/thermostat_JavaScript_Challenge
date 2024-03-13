Thermostat = require('./thermostat');

describe('unit-testing Thermostat class', () => {
    test ('initilises with initial temp of 20 degrees', () => {
        newtherm = new Thermostat();
        expect (newtherm.temp).toBe(20);
    });

    test ('we can use a getTemperature method to return temp', () => {
        newtherm = new Thermostat();
        expect(newtherm.getTemperature()).toEqual(20);
    });
    
    test ('We can raise temperature with an up method', () => {
        newtherm = new Thermostat();
        newtherm.up()
        newtherm.up()
        expect(newtherm.getTemperature()).toEqual(22);
    });
    
    test ('We can decrease temperature with a down method', () => {
        newtherm = new Thermostat();
        newtherm.down()
        newtherm.down()
        expect(newtherm.getTemperature()).toEqual(18);
    });
    
    test ('The minimum possible temperature is 10 degrees', () => {
        newtherm = new Thermostat();
        for (i = 0; i < 15; i++) { 
            newtherm.down();
        };
        expect(newtherm.getTemperature()).toEqual(10);
    });

    test ('initilises with power-saving mode ON', () => {
        newtherm = new Thermostat();
        expect (newtherm.powerSaving).toBe(true);
    });
    
    test ('maximum temp with power-saving mode ON is 25', () => {
        newtherm = new Thermostat();
        for (i = 0; i < 15; i++) { 
            newtherm.up();
        };
        expect (newtherm.getTemperature()).toBe(25);
    });
    test ('You can set power-saving mode to OFF', () => {
        newtherm = new Thermostat();
        newtherm.setPowerSaving(false);
        expect (newtherm.powerSaving).toBe(false);
    });
    test ('Maximum temp with powerSaving off is 32', () => {
        newtherm = new Thermostat();
        newtherm.setPowerSaving(false);
        for (i = 0; i < 15; i++) { 
            newtherm.up();
        };
        expect (newtherm.getTemperature()).toBe(32);
    });
    test ('You can reset the thermostat to 20 using reset method', () => {
        newtherm = new Thermostat();
        newtherm.up();
        newtherm.up();
        newtherm.up();
        newtherm.reset();
        expect(newtherm.getTemperature()).toEqual(20)
    });
    test ('Getting energy-usage for <= 25 degrees', () => {
        newtherm = new Thermostat();
        expect(newtherm.getEnergyUsage()).toEqual('medium-usage')
    });
    test ('Getting energy-usage for < 18 degrees', () => {
        newtherm = new Thermostat();
        for (i = 0; i < 15; i++) { 
            newtherm.down();
        };
        expect(newtherm.getEnergyUsage()).toEqual('low-usage')
    });

    test ('Getting energy-usage for high-usage (>25)', () => {
        newtherm = new Thermostat();
        newtherm.setPowerSaving(false)
        for (i = 0; i < 15; i++) { 
            newtherm.up();
        };
        expect(newtherm.getEnergyUsage()).toEqual('high-usage')
    });
});