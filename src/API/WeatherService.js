import axios from "axios";

export default class WeatherService {
    static url = 'https://api.weatherbit.io/v2.0/forecast/daily';
    static key = '59da86aa47bf4e37af7ca68ac92b545d';

    static async getAll(location) {
        return await axios.get(
            `${this.url}?city=${location}&key=${this.key}`
        )
    }
}