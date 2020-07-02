import axios from 'axios'

const devUrl = 'http://localhost:8080'

class HttpRequst {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            header: {
                // 请求头
            },
        }
        return config;
    }
    interceptors(instance, url) {
        instance.interceptors.request.use(config => {
            console.log('拦截和处理请求', config);
            return config;
        })
        instance.interceptors.response.use(result => {
            console.log('处理响应', result);
            return result.data;
        }, error => {
            // console.log(error);
        })
    }
    request(options) {
        const instance = axios.create(); // 创造实例
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}

const axiosHttp = new HttpRequst(devUrl)

export default axiosHttp;