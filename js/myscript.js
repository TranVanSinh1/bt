$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        $.ajax({
            url: "process-upload.php",
            type:"POST",
            data: {email:$("#email").val()},
            success:function(dt){
                if(dt=='success'){
                    alert('Thành công');
                }else{
                    alert('Thất bại');
                }
            }
        })
    })
})
