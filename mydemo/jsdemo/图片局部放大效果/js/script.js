    (function(){
        var div = document.getElementById('div');
        var whole = getByClass(div, 'whole')[0];
        var detail = getByClass(div, 'detail')[0];
        var img = detail.getElementsByTagName('img')[0];
        var layer = whole.getElementsByTagName('span')[0];
        whole.onmousemove = function(e){
            e = e || event;
            this.style.cursor = 'move';
            layer.style.display = detail.style.display = 'block';
            var t = e.clientY - div.offsetTop - layer.clientHeight/2;
            var l = e.clientX - div.offsetLeft - layer.clientWidth/2;
            if(t < 0){
                t = 0;
            } else if(t > div.clientHeight - layer.clientHeight){
                t = div.clientHeight - layer.clientHeight;
            }
            if(l < 0){
                l = 0;
            } else if(l > div.clientWidth - layer.clientWidth){
                l = div.clientWidth - layer.clientWidth;
            }
            var scaleX = l / (div.clientHeight - layer.clientHeight);
            var scaleY = t / (div.clientWidth - layer.clientWidth);
            layer.style.top = t + 'px';
            layer.style.left = l + 'px';
            img.style.left = -scaleX * (img.clientWidth - detail.clientWidth) + 'px';
            img.style.top = -scaleY * (img.clientHeight - detail.clientHeight) + 'px';
        }
        whole.onmouseout = function(e){
            layer.style.display = detail.style.display = 'none';
        }
        function getByClass(obj, cls){
            if(obj.getElementsByClassName){
                return obj.getElementsByClassName(cls);
            } else {
                var res = [],
                    reg = new RegExp('^|\\s+' + cls + '\\s+|$'),
                    all = obj.all;
                for(var i = 0; i < all.length; i++){
                    if(reg.test(all[i].className)){
                        res.push(all[i]);
                    }
                }
                return res;
            }
        }
    }());