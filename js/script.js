//consts
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const reset_btn = document.querySelector("#reset")
const brush_width = document.querySelector("#brush_width")
const color_brush = document.querySelector("#color_brush")
const eraser = document.querySelector(".eraser")
const brush = document.querySelector(".brush")
const save = document.querySelector("#save")

//events
canvas.addEventListener("mousemove" , drawing)
canvas.addEventListener("mousedown" , drawing_click)
canvas.addEventListener("mouseup" , none_drawing)
reset_btn.addEventListener("click" , load)
window.addEventListener("load" , width_hight)
brush_width.addEventListener("change" , border_brush)
color_brush.addEventListener("change" , color_picker)
eraser.addEventListener("click" , remove)
brush.addEventListener("click" , brush_active )
save.addEventListener("click" , save_img)

//lets
let isDrawing = false
let border = 5;
let color = ""
//functions
function drawing(e){
    if(!isDrawing) return
    ctx.lineTo(e.offsetX , e.offsetY)
    ctx.stroke()
    ctx.lineWidth = border
    ctx.strokeStyle = `${color}`
}
function load(){
    window.location.reload()
}
function width_hight (){
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,canvas.width,canvas.height)
}
function drawing_click (){
    isDrawing = true
    ctx.beginPath()
}
function none_drawing (){
    isDrawing = false
}
function border_brush (){
    border = brush_width.value;
}
function color_picker (){
    color = color_brush.value
}
function remove (){
    eraser.classList.add("active")
    brush.classList.remove("active")
    ctx.strokeStyle = "white"
    
}
function brush_active(){
    brush.classList.add("active")
    eraser.classList.remove("active")
    ctx.strokeStyle = color_brush.value
}
function save_img (){
    let save_text =  prompt("Save Your Drowing")
    let creat_a = document.createElement("a")
    creat_a.download = `${save_text}.jpg`
    creat_a.href = canvas.toDataURL()
    creat_a.click()

}