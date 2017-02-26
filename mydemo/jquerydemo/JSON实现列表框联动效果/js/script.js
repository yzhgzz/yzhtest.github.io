//将JSON格式的数据保存在变量中
        var AreaData = {
            "省份": { val: "1", items: { "城市": { val: "2", items: { "学校": "3"}}} },
            "江苏省": { val: "01", items:
            { "南京": { val: "0101", items: { "南京大学": "010101", "东南大学": "010102" }
            }, "苏州": { val: "0102", items: { "苏州大学": "010201", "西交利物浦大学": "010202"}}}
            },
            "辽宁省": { val: "02", items:
            { "大连": { val: "0201", items: { "大连理工大学": "020101", "大连海事大学": "020102" }
            }, "沈阳": { val: "0202", items: { "东北大学": "020201", "辽宁大学": "020202"}}}
            },
            "山东省": { val: "03", items:
            { "青岛": { val: "0301", items: { "中国海洋大学": "030101", "中国石油大学": "030102" }
            }, "济南": { val: "0302", items: { "山东大学": "030201"}}}
            }
        };
        $(function() {
            //使用变量保存各页面元素
            var $s1 = $("#sele1");
            var $s2 = $("#sele2");
            var $s3 = $("#sele3");
            var $t1 = $("#Tip");
            //定义显示选中值变量
            var $t2 = "";
            //设置各个下拉列表框的默认值
            var v1 = "1";
            var v2 = "2";
            var v3 = "3";
            //设置第一个下拉列表框的数据
            $.each(AreaData, function(k, v) {
                appendOptTo($s1, k, v.val, v1);
            });
            //自定义添加下拉列表框数据函数
            function appendOptTo($o, k, v, d) {
                var $opt = $("<option>").text(k).val(v);
                if (v == d) { $opt.attr("selected", "true") }
                $opt.appendTo($o);
            };
            //编写第一个下拉列表框内容改变事件并执行该事件
            $s1.change(function() {
                $s2.html("");
                $s3.html("");
                if (this.selectedIndex == -1) return;
                var s1_curr_val = this.options[this.selectedIndex].value;
                var s1_curr_txt = this.options[this.selectedIndex].text;
                $.each(AreaData, function(k, v) {
                    if (s1_curr_val == v.val) {
                        if (v.items) {
                            $.each(v.items, function(k, v) {
                                appendOptTo($s2, k, v.val, v2);
                            });
                        }
                    }
                });
                $t2 = s1_curr_txt;
                $t1.html($t2);
                $s2.change();
            }).change();
            //编写第二个下拉列表框内容改变事件并执行该事件
            $s2.change(function() {
                $s3.html("");
                var s1_curr_val = $s1[0].options[$s1[0].selectedIndex].value;
                if (this.selectedIndex == -1) return;
                var s2_curr_val = this.options[this.selectedIndex].value;
                $.each(AreaData, function(k, v) {
                    if (s1_curr_val == v.val) {
                        if (v.items) {
                            $.each(v.items, function(k, v) {
                                if (s2_curr_val == v.val) {
                                    $.each(v.items, function(k, v) {
                                        appendOptTo($s3, k, v, v3);
                                    });
                                }
                            });
                        }
                    }
                });
                showChangeItem();
            }).change();
            //编写第三个下拉列表框内容改变事件
            $s3.change(function() {
                showChangeItem();
            });
            //自定义将列表框选择内容显示在页面中的函数
            function showChangeItem() {
                var s1_curr_txt = $s1[0].options[$s1[0].selectedIndex].text;
                var s2_curr_txt = $s2[0].options[$s2[0].selectedIndex].text;
                var s3_curr_txt = $s3[0].options[$s3[0].selectedIndex].text;
                $t2 = "" + s1_curr_txt + " > " + s2_curr_txt + " > " + s3_curr_txt;
                $t1.html($t2);
            }
        });