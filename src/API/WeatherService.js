import axios from "axios";

const API_KEY = "fe7af2ec25fa845bc2722c05e62c3efb";

export default class WeatherService{

    static async getWeather(country){
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`)
            return response.data
        }catch{
            alert("Such a city does not exist")
        }
    }



}