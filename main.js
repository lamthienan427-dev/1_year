// Thay đổi nội dung búc thư ở đây
var letterContent =" Thời gian trôi qua nhanh thật, mới đây mà mình đã bên nhau tròn 1 năm ó. Anh muốn cảm ơn em rất nhiều vì trong khoảng thời gian qua luôn ở bên anh, yêu anh và luôn làm cho anh cảm thấy hạnh phúc, anh rất rất rất hạnh phúc luôn ó. Anh cũng xin lỗi em rất nhiều về những lần anh vô tâm không quan tâm đến em, có gì em cứ nói anh sửa nha. Với lại anh vẫn muốn nhắc em hãy yêu thương bản thân mình nhiều hơn đi ạ, đừng vì người khác mà quên mình, mà có những suy nghĩ tiêu cực không đáng có. Anh mong mình sẽ yêu nhau lâu thật lâu bên nhau trọn đời nhó, yêu Hân nhiều < 3."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})