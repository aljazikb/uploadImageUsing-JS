document.getElementById("input").addEventListener("change",function(){
    console.log("clicked")

    let img=document.getElementById("image")
    img.src=URL.createObjectURL(this.files[0])


})