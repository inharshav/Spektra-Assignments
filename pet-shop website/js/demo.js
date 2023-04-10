$(document).ready(function(){
    alert("DKDKDK")

$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });



$('.minus-btn').click(function(e) {
    alert("DKDKDKDK")
    // count = $("#total").val();
    // if(count>0){
    //     $("#total").val(count--);
    // }
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    count = $("#total").val();
    
        $("#total").val(count++);
    
});
})