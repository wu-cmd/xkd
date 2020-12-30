import request from '@/network/request'

export function login(data) {
    return request({
        url: '/plat/v1/login',
        method: 'post',
        data
    })
}

export function getCodeDome(params) {
      return request({
          url: '/plat/v1/logout',
          method: 'post',
          params
      })
  }