window.onload = function(){

    document.getElementById("writeform").onsubmit = function()
    {
        var titled = document.getElementById("title");
        
        if(titled.value == "")
        {
            alert("제목을 입력해주세요!");
            titled.focus();
            return false;
        }
        else
        {
            var result = confirm("저장완료!");
        
            if(result){
                location.href = "q&a.html";
            }
        }
    }
}

function backpage(){
    var result = confirm("작성했던 글은 저장되지 않습니다. 목록으로 돌아가시겠습니까?");

    if(result){
        location.href = "q&a.html";
    }
}
