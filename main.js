let $images, $buttons, length, index
//初始化数据
init()


//设置定时器开始轮播
let timer = setTimer(3000)


//监听按钮点击
for (let i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', function (e) {
        activeButton($(e.currentTarget))
        $images.css({
            transform: `translateX(${-(i*920)+'px'})`
        })
        index = i
    })
    $buttons[i].addEventListener('mouseenter',function(e){
        $(e.currentTarget).addClass('in')
    })
    $buttons[i].addEventListener('mouseleave',function(e){
        $(e.currentTarget).removeClass('in')
    })
}

//监听鼠标移入移出
$images.on('mouseenter', function () {
    console.log(1)
    window.clearInterval(timer)
})
$images.on('mouseleave', function () {
    console.log(2)
    timer = setTimer(3000)
})
//监听用户切换页面

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        timer = setTimer(3000)
    }
})

function activeButton($button) {
    $button.addClass('active').siblings().removeClass('active')
}

function init() {
    $images = $('.images')
    $buttons = $('.buttons> button')
    length = $images.children().length
    index = 1
}

function playSlide(index) {
    $buttons.eq(index).trigger('click')
}

function setTimer(time) {
    return setInterval(() => {
        playSlide(index % length)
        index += 1
    }, time)
}