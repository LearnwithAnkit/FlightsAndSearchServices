const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await cityRepository.createCity(data);
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await cityRepository.deleteCity(cityId);
      return true;
    } catch (error) {
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }
}
module.exports = { CityService };
