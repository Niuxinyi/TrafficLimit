/**
 * Zone线的前端数据模型
 * @class FM.mapApi.render.data.ZoneLink
 * @author LiuZhe
 * @date   2017-09-12
 *
 * @copyright @Navinfo, all rights reserved.
 */
FM.mapApi.render.data.ZoneLink = FM.mapApi.render.data.Feature.extend({
    /**
     * 模型转换主函数，将接口返回的数据转换为前端数据模型
     * @method setAttribute
     * @author LiuZhe
     * @date   2017-09-12
     * @param  {object} item 接口返回的数据
     * @return {undefined}
     */
    setAttribute: function (item) {
        this.properties.geoLiveType = 'ZONELINK';
        this.geometry.type = 'LineString';
        this.properties.snode = item.m.a;
        this.properties.enode = item.m.b;
        this.properties.kind = item.m.c;
    }
});
