var app=angular.module("app",[]);
app.controller("list",["$scope", function ($scope) {
    $scope.data=[
        {
            src:"image/1.png",
            tit:"百度",
            sp:"北京市海淀区西北旺",
            p:"互联网 | 已上市 | 10000人以上",
            b:"热招：",
            a:"前端工程师",
            bb:"等2382个职位"
        },
        {
            src:"image/2.png",
            tit:"北京来为科技",
            sp:"北京市昌平区沙河",
            p:"IT软件 | 微融资 | 100-499人",
            b:"热招：",
            a:"前端开发工程师",
            bb:"等2382个职位"
        },
        {
            src:"image/3.png",
            tit:"最酷教育",
            sp:"北京市海淀区五棵松",
            p:"互联网 | A轮 | 20-99人",
            b:"热招：",
            a:"web前端开发工程师",
            bb:"等2382个职位"
        },
        {
            src:"image/4.png",
            tit:"京东集团",
            sp:"北京市大兴区",
            p:"移动互联网 | 已上市 | 10000人以上",
            b:"热招：",
            a:"webGL",
            bb:" 等2382个职位"
        }
]}]);