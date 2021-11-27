/**
 * @description 数据量连接测试
 */

const seq = require('../seq')

// 测试连接，直接运行 node src/db/seq/utils/conn-test.js
seq.authenticate()
    .then(() => {
        console.log('ok-success')
    })
    .catch(() => {
        console.log('fail')
    })
    .finally(() => {
        process.exit()
    })
