/**
 * 字典服务层
 * 创建人：刘佳乐
 * 创建时间：2017-7-27
 */

var dictDao = require('../dao/dictDao');

/**
 * 查询字典列表
 * @param options
 * @param callback
 */
exports.queryDictList = function (options, callback) {
   dictDao.queryDictList(options, function (err, dictList) {
       callback(options, dictList);
   })
};

/**
 * 通过字典类型查询字典
 * @param type
 * @param callback
 */
exports.queryDictByType = function (type, callback) {
    dictDao.queryDictByType(options, function (err, dictList) {
        callback(options, dictList);
    })
};

/**
 * 查询字典标签名
 * @param options
 * @param callback
 */
exports.queryDictLabel = function (options, callback) {
    console.log(options.type+'======='+options.value);
    dictDao.queryDictLabel(options, function (err, dict) {
        callback(options, dict);
    })
};