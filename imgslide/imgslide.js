let img=["a.jpg","b.jpg","c.jpg","d.jpg"]
let i=0
document.getElementById("image").src=img[0]

const next=()=>{
    let a=Math.floor(Math.random()*img.length)
    document.getElementById("demo").innerHTML=a
    document.getElementById("image").sec=img[a]
    
}