// 每个模块都应该有自己的接口文件去统一管理api
import {get, post } from '@/api/axios'

export const getDzData = (params) => get('/getJoke', params)