// 1.挂载index.html文件中
// 2.声明游戏中使用变量
  //2.1 创建变量保存画布
    var can1;
  //2.2 创建变量保存画笔
    var ctx1;
  //2.3 创建一个变量保存背景图片
    var bgPic=new Image();
  //2.4 创建二个变量保存画布宽度和高度
    var canWidth=0;
    var canHeight=0;
  //2.5 创建两个变量保存上一帧执行时间和二帧间隔时间差
    var lastTime;
    var deltaTime;
  //2.6 创建一个变量保存大鱼对象
    var mom;
  //2.7 创建两个变量保存鼠标位置
    var mx=0;
    var my=0;

// 3.创建函数game --> 启动函数
    function game(){
        init();
        lastTime=Date.now();//上一帧时间
        deltaTime=0;
        gameloop();
    }
// 4.创建函数init --> 初始化函数，初始化变量和对象值
    function init(){
        //4.1 初始化二个画布
        can1=document.getElementById("canvas1");
        //4.2 初始化二个画笔
        ctx1=can1.getContext("2d");
        //4.3 下载背景图片
        bgPic.src="img/slide8.jpg";
        //4.4 初始画布宽度和高度
        canWidth=can1.width;
        canHeight=can1.height;
        //4.8 为画布1绑定鼠标移动事件
        can1.addEventListener("mousemove",onMouseMove,false);
    }
// 5.创建函数gameloop  通过智能定时器调用绘制游戏中不同角色功能
    function gameloop(){
        //5.1 创建智能定时器调用 gameloop
        requestAnimFrame(gameloop);
        //5.1.1 两帧之间时间差
        var now=Date.now();//当前时间
        deltaTime=now-lastTime;//两帧之差
        lastTime=now;//更新上一帧时间
        if(deltaTime>40){
            deltaTime=40;
        }
        //5.2 绘制背景图片
        drawBackground();
        //5.3 清空画布1上的所有元素
        ctx1.clearRect(0,0,canWidth,canHeight);
        fruitMonitor();//5.3
    }
// 6.页面加载成功后调用game函数
    document.body.onload=game;
// 7.
    function onMouseMove(e){
        if(e.offsetX||e.layerX){
            mx=e.offsetX==undefined?e.layerX:e.offsetX;
        }
        if(e.offsetY||e.layerY){
            my=e.offsetY==undefined?e.layerY:e.offsetY;
        }
    }