/**
 * 课程管理实体类
 * 创建人：丁涛
 * 创建时间：2017年7月26日
 */
var stringUtils = require('../utils/stringUtils');
var adminField = [
    'id',
    'name',
    'formula_type as formulaType',
    'course_node as courseNode',
    'major_node as majorNode',
    'course_type as courseType'
];
var adminModel = stringUtils.ArrayToString(adminField,',');

module.exports = adminModel;


