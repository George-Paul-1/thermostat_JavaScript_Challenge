class Thermostat {
    
    constructor () { 
        this.temp = 20;
        this.powerSaving = true;
    };
    
    getTemperature() {
        return this.temp;
    };
    
    up() {
        if (this.powerSaving === true && this.temp === 25)
            {}
        else if (this.powerSaving === false && this.temp === 32)
            {}
        else
            this.temp += 1;
    };
    
    down() {
        if (this.temp == 10) 
            {}
        else
            this.temp -= 1;
    };
    
    setPowerSaving(condition) {
        this.powerSaving = condition
    };
    
    reset() {
        this.temp = 20;
    };
    
    getEnergyUsage() {
        if (this.temp <= 25 && this.temp > 18) 
            return 'medium-usage'
        else if (this.temp < 18)
            return 'low-usage'
        else 
            return 'high-usage'
    }
}
module.exports = Thermostat;