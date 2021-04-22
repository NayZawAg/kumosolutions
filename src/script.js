<script>
window.onscroll= function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myHeader").style.backgroundColor = "blue";
    } 
    else {
        document.getElementById("myHeader").style.backgroundColor = "none";        
    }
}
</script>