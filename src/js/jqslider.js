(function($){

    $.Jqslider = function(context,options){

        var self = this; //获取到$.Jqslider构造方法本身;

        console.log("this a test");

        //默认参数
        self.defaults = {

            //是否自动开始
            autoplay:true,

            //选择器 分别是容器和滑块
            selectors:{
                container:'ul:first',
                slides:'li'
            }

        };

        //传入参数的默认设置
        self.$context = context;
        self.options = {};

        //Dom节点对象的声明
        self.$parent = null;
        self.$container = null;
        self.$slides = null;


        //初始化
        self.init = function(options){
            self.options = $.extend({}, self.defaults, options);
            //为容器添加类名，对应样式为相对定位
            self.$container = self.$context.find(self.options.selectors.container).addClass('jqslider-wrapper');
            self.$slides = self.$container.children(self.options.selectors.slides);

            //对获取的环境进行封装和样式处理
            self.setup();

            //是否自动开始
            // self.options.autoplay && self.start();
        }

        //对获取的环境进行封装和样式处理
        self.setup = function(){
            self.$context.wrap('<div class="jqslider"></div>');
            self.$parent = self.$context.parent('.jqslider');
            if(self.$context.css('position') === 'static'){
                self.$context.css('position','relative');
            }
            self.$context.css('overflow','hidden');
        }

        //最终调用init方法,
        return self.init(options);
    }


    $.fn.jqslider = function(options){
        var $this = $(this);
        return new $.Jqslider($this,options);
    }
})($)
