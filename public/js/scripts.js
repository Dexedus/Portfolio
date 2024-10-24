
$(".submit").on("click", function(){

    alert("Your submission will be sent to Karl")

})

$(".lil").on('click', function(){
    this.classList.add("Click")
    setTimeout(() => {
        this.classList.remove("Click")
    }, 1000);
})