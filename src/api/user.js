import request from '@/network/request'
// 登录
export function logins(data) {
    return request({
        url: '/plat/v1/login',
        method: 'post',
        data
    })
}
// 验证码
export function yzmFun(params) {
      return request({
          url: '/plat/v1/ecode',
          method: 'post',
          params
      })
  }

// 退出登录
export function getCodeDome(params) {
      return request({
          url: '/plat/v1/logout',
          method: 'post',
          params
      })
  }
// 修改密码||忘记密码
export function forGet(data) {
        return request({
            url: '/plat/v1/user/modify_password',
            method:'post',
            data
        })
    }

// 获取用户信息
export function info(params) {
      return request({
          url: '/plat/v1/user/info',
          method:'get',
           params
      })
  }
  // 获取消息列表
  export function list(params) {
        return request({
            url: '/plat/v1/msg/list',
            method:'get',
            params
        })
    }
    // 获取单条消息
    export function msg(params) {
          return request({
              url: '/msg/msg',
              method:'get',
               params
          })
      }
      // 每周推广数据
      export function weekData(params) {
            return request({
                url: '/plat/v1/weekdata/data',
                method:'get',
                 params
            })
        }