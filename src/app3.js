import './app3.css'
import $ from 'jquery'
const $square = $('#app3 .square')
$square.on('click', () => { 
    $square.toggleClass('active')
    //与addClass不同, toggle如果没有就加上,有就删除
    
})