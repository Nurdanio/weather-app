import axios from 'axios'

const API_KEY: string = '937d75949f95b7f749dd9d946a7dbba2'

export const getWeatherByCity = async (city: string) => {
  try {
    return await axios.get(
      `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
    )
  } catch (e) {
    console.log('Error')
  }
}
