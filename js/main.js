window.onload = function()
{
    var str = '',
        data = [
            [
                { title : '原生js'},
                { url : 'mydemo/jsdemo/QQ登录框/index.html', title : '可拖动QQ登录框效果' },
                { url : 'mydemo/jsdemo/仿京东分类导航/index.html', title : '仿京东分类导航' },
                { url : 'mydemo/cssdemo/css实现分类导航效果/index.html', title : '（附）css实现分类导航' },
                { url : 'mydemo/jsdemo/简易抽奖系统/index.html', title : '简易抽奖系统' },   
                { url : 'mydemo/jsdemo/自动打字效果/index.html', title : '自动打字效果' }, 
                { url : 'mydemo/jsdemo/图片局部放大效果/index.html', title : '图片局部放大效果' },               
                { url : 'mydemo/jsdemo/信息滚动效果/index.html', title : '信息滚动效果' },
                { url : 'mydemo/jsdemo/排序表格效果实现/index.html', title : '排序表格效果实现' },
            ],
            [
                { title : 'jquery'},
                { url : 'mydemo/jquerydemo/定位导航特效/index.html', title : '定位导航特效' },
                { url : 'mydemo/jquerydemo/jQuery瀑布流布局/index.html', title : 'jQuery瀑布流布局' },
                { url : 'mydemo/jsdemo/js瀑布流布局/index.html', title : '（附）js实现瀑布流布局' },
                { url : 'mydemo/cssdemo/css3瀑布流布局/index.html', title : '（附）css3实现瀑布流布局' },
                { url : 'mydemo/jquerydemo/JSON实现列表框联动效果/index.html', title : '列表框联动效果' },
            ],
            [
                { title : 'bootstrap'},
                { url : 'mydemo/bootstrapdemo/产品介绍网页开发/index.html', title : '产品介绍网页开发' },
            ],
            [
                { title : 'angularjs'},
                { url : 'mydemo/angularjsdemo/抽奖系统/index.html', title : '可增删奖品的抽奖系统' },
            ],
            [
                { title : '综合网页'},
                { url : 'mydemo/websitedemo/常见技术产品官网/index.html', title : '常见技术产品官网' },
                { url : 'mydemo/websitedemo/仿w3school网站主页/index.html', title : '仿w3school网站主页' },
                { url : 'mydemo/cssdemo/模拟报纸排版/index.html', title : '模拟报纸排版' },
                { url : 'mydemo/websitedemo/学校网站主页实例/index.html', title : '学校网站主页实例' },
                { url : 'mydemo/websitedemo/明星介绍网站/index.html', title : '明星介绍网站' },
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
 