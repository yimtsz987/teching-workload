/**
 * 字典数据持久化操作接口层
 * 创建人：刘佳乐
 * 创建时间：2017-7-27
 */

var connection = require('../core/Connection');
var dictModel = require('../model/dictModel');

/**
 * 查询字典列表
 * @param options
 * @param callback
 */
exports.queryDictList = function (options, callback) {
    var queryLimit = ' WHERE ';
    var queryDictListSql = 'SELECT '+ dictModel +' FROM dict';
    if (options != null){
        if (options.type != ''){
            queryLimit = queryLimit + 'type = ' + options.type;
        }
        queryDictListSql = queryDictListSql + queryLimit;
    }
    connection.query(queryDictListSql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        };
        callback(options, result);
    });
};

/**
 * 通过字典类型查询字典
 * @param type
 * @param callback
 */
exports.queryDictByType = function (type, callback) {
    var queryDictByTypeSql = 'SELECT '+ dictModel +' FROM dict WHERE type = ?';
    var queryParams = [type];
    connection.query(queryDictByTypeSql,queryParams,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        };
        callback(options, result);
    })
};

/**
 * 查询字典标签名
 * @param options
 * @param callback
 */
exports.queryDictLabel = function (options, callback) {
    var queryDictLabelSql = 'SELECT '+ dictModel +' FROM dict WHERE type = ? and value = ?';
    var queryParams = [options.type,options.value];
    connection.query(queryDictLabelSql,queryParams,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        };
        callback(options, result[0]);
    })
};