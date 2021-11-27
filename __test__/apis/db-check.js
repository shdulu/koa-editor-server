/**
 * @description 检查数据库连接
 */

const { get } = require('./_server')

test('数据库连接', async done => {
    const { data, errno } = await get('/api/db-check')
    done()
    const { redisConn, mysqlConn, mongodbConn } = data
    expect(errno).toBe(0)
    expect(redisConn).toBe(true)
    expect(mysqlConn).toBe(true)
    expect(mongodbConn).toBe(true)
}, 10000)
