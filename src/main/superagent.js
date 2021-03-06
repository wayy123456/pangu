const superagent = require('superagent')
const superagentCharset = require('superagent-charset')(superagent)

// 请求
export function superagentReq (url, method, charset1 = 'utf-8', params, data, cookies) {
  return new Promise(function (resolve, reject) {
    superagentCharset(method, url)
      .charset(charset1)
      .query(params)
      .send(data)
      .end((err, response) => {
        if (err) {
          reject(err)
        }
        resolve(response)
      })
  })
}

// form请求
export function superagentForm ({url, method, charset1 = 'utf-8', params, data, cookies}) {
  return new Promise(function (resolve, reject) {
    superagentCharset(method, url)
      .type('form')
      .charset(charset1)
      .query(params)
      .send(data)
      .end((err, response) => {
        if (err) {
          reject(err)
        }
        resolve(response)
      })
  })
}
