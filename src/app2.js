import './app2.css'
import $ from 'jquery'
const $tabBar = $('#app2 .tab-bar')
const $tabContent=$('#app2 .tab-content')

//我们要监听的是ol(tab-bar)的子元素li
$tabBar.on('click', 'li', (e) => { 
    const $li = $(e.currentTarget);
    //切换背景色
    $li.addClass('selected')
    .siblings().removeClass('selected')
    const index = $li.index()
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})
$tabBar.children().eq(0).trigger('click')