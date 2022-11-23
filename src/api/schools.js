import axios from 'axios'

export default {
  name: "schoolsApi",
  baseUrl: 'https://n1acby.deta.dev/',

  async getSchoolsList () {
    let url = `${this.baseUrl}all-schools/`
    try {
      const response = await axios.get(url)
      console.log(response.data)
      return await Promise.resolve(response.data)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async getSchoolRegions () {
    let url = `${this.baseUrl}regions/`
    try {
      const response = await axios.get(url)
      return await Promise.resolve(response.data)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async addSchool (schoolData) {
    let url = `${this.baseUrl}create-school/`
    try {
      const response = await axios.post(url, schoolData)
      return await Promise.resolve(response.data)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async addDistrict (districtData) {
    let url = `${this.baseUrl}create-district/`
    try {
      const response = await axios.post(url, districtData)
      return await Promise.resolve(response.data)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async sendEmail (emailForm) {
    let url = `${this.baseUrl}send-email/`
    try {
      const response = await axios.post(url, emailForm)
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async uploadImages (fileData) {
    let url = `${this.baseUrl}upload-images/`
    try {
      const response = await axios.post(url, fileData)
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async addSchoolImages (images) {
    let url = `${this.baseUrl}add-images/`
    try {
      const response = await axios.post(url, images)
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  }
}