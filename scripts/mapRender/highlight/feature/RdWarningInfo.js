/**
 * 定义‘警示信息’要素选中时的高亮规则
 * @file      RdWarningInfo.js
 * @author    WangMingDong
 * @date      2017-09-12
 *
 * @copyright @Navinfo, all rights reserved.
 */

FM.mapApi.render.highlight.RDWARNINGINFO = {
    key: 'pid',
    type: 'geoLiveObject',
    layer: 'RDLINKWARNING',
    zIndex: 0,
    defaultSymbol: 'pt_feature_relationBorder',
    topo: [{
        joinKey: 'nodePid',
        highlight: {
            type: 'pid',
            layer: 'RDNODE',
            zIndex: 1,
            defaultSymbol: 'pt_rdNode_in'
        }
    }, {
        joinKey: 'linkPid',
        highlight: {
            type: 'pid',
            layer: 'RDLINK',
            zIndex: 1,
            defaultSymbol: 'ls_rdLink_in'
        }
    }]
};
