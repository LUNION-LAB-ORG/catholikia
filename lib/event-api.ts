import axios from "axios"

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
})

// Newsletter subscription
export const subscribeNewsletter = async (email: string) => {
  const response = await api.post("/newsletter", { email })
  return response.data
}

// Contact form
export const sendContactMessage = async (data: {
  name: string
  email: string
  message: string
}) => {
  const response = await api.post("/contact", data)
  return response.data
}

// Donation
export const processDonation = async (amount: number, donorInfo: any) => {
  const response = await api.post("/donations", { amount, donorInfo })
  return response.data
}

// Get articles
export const getArticles = async (page = 1, limit = 6) => {
  const response = await api.get(`/articles?page=${page}&limit=${limit}`)
  return response.data
}

// Get events
export const getEvents = async () => {
  const response = await api.get("/events")
  return response.data
}

export default api