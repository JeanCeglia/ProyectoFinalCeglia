export class Weather {
  
    constructor(city, countryCode) {
      this.apiKey = '29c8106716e0898afd7e99be6dc2eb92';
      this.city = city;
      this.countryCode = countryCode;
    }
  
    async getWeather() {
      const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`
      const response = await fetch(URI);
      const data = await response.json();
      return data;
    }
  
    changeLocation(city, countryCode) {
      this.city = city;
      this.countryCode = countryCode;
    }
  
  } 