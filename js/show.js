window.onload = function()
{
    var str = '',
        data = [
            [
                { title : 'html/css demo'},
                { url : 'mydemo/cssdemo/固定层效果/index.html', title : '固定层效果' },
                { url : 'mydemo/cssdemo/绝对定位布局实例/index.html', title : '绝对定位布局实践' },
                { url : 'mydemo/cssdemo/css3瀑布流布局/index.html', title : 'css3瀑布流布局' },
                { url : 'mydemo/cssdemo/css商城分类导航/index.html', title : 'css商城分类导航' },
                { url : 'mydemo/cssdemo/文字滚动效果/index.html', title : '文字滚动效果' },
            ],
            [
                { title : '原生js demo'},
                { url : 'mydemo/jsdemo/QQ登录框/index.html', title : 'QQ登录框' },
                { url : 'mydemo/jsdemo/仿京东分类导航/index.html', title : '仿京东分类导航' },
                { url : 'mydemo/jsdemo/简易抽奖系统/index.html', title : '简易抽奖系统' },
                { url : 'mydemo/jsdemo/时间显示效果/index.html', title : '时间显示效果' },
                { url : 'mydemo/jsdemo/团购限时抢效果/index.html', title : '团购限时抢效果' },
                { url : 'mydemo/jsdemo/js瀑布流布局/index.html', title : 'js瀑布流布局' },
                { url : 'mydemo/jsdemo/信息滚动效果/index.html', title : '信息滚动效果' },
                { url : 'mydemo/jsdemo/移动端web相册效果/index.html', title : '移动端web相册效果' },
            ],
            [
                { title : 'jquery demo'},
                { url : 'mydemo/jquerydemo/定位导航特效/index.html', title : '定位导航特效' },
                { url : 'mydemo/jquerydemo/jQuery瀑布流布局/index.html', title : 'jQuery瀑布流布局' },
            ],
            [
                { title : '综合网站 demo'},
                { url : 'mydemo/websitedemo/必应搜索框/index.html', title : '必应搜索框' },
                { url : 'mydemo/websitedemo/仿腾讯软件中心网页/index.html', title : '仿腾讯软件中心网页' },
                { url : 'mydemo/websitedemo/企业网站实例/index.html', title : '企业网站实例' },
            ]
        ];
    for(var i = 0; i < data.length; i++){
        var items = data[i];
        var sub = '';
        for(var j=0; j<items.length; j++){
            var son = items[j];
            if(j == 0){
                sub += '<li><h1><a href="javascript:;" title="' + son.title + '">' + son.title + '</a></h1><dl class="sub-dl">';
            } else {
                sub += '<dd><a href="' + son.url + '" target="_blank" title="' + son.title + '">' + j +')' + '  '+ son.title + '</a></dd>';
            }
            if(j == items.length - 1){
                sub += '</dl></li>';
            }
        }
        str += sub;
    }
    var ul = document.getElementById('ul');
    ul.innerHTML = str;
    var h1 = ul.getElementsByTagName('h1');
    var dl = ul.getElementsByTagName('dl');
    var tmp = -1;
    var open = false;
    for(var i=0; i < h1.length; i++){
        h1[i].index = i;
        h1[i].onclick = function(){
            for(var i=0; i<h1.length; i++){
                dl[i].style.display = 'none';
            }
            if(tmp == this.index && open){
                dl[this.index].style.display = 'none';
                open = false;
            } else {
                dl[this.index].style.display = 'block';
                open = true;
            }
            tmp = this.index;
        }
    }

}
 