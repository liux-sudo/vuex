import axios from '@/api/axios'

export const getlbt = () => {
    return axios.request({
        url: 'banner',
        type: 'get'
    })
}