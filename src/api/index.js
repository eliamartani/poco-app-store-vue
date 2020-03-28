import axios from 'axios'

export const fetchApps = async () => axios.get('./apps.json')
