/**
 * Created by jiang on 2019/5/27
 * File description:
 * History:
 */
import cookies from './util.cookies'
import db from './util.db'
import log from './util.log'

const util = {
    cookies,
    db,
    log
}

/**
 * @description 更新标题
 * @param titleText
 */
util.title = function (titleText) {
    const processTitle = process.env.VUE_APP_TITLE || 'Aadmin'
    window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function (url) {
    var a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    a.setAttribute('id', 'Aadmin-link-temp')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(document.getElementById('Aadmin-link-temp'))
}

export default util
