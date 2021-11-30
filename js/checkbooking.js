window.onload = function(){
    
    document.getElementById("checkform").onsubmit = function()
    {
        var username = document.getElementById("user_name");
        var userpnumber = new Array(document.getElementById("user_p1"),document.getElementById("user_p2"));
        var namevalue = document.getElementById("guestname");

        if(username.value == "")
        {
            alert("예약자명을 입력해주세요!");
            username.focus();
            return false;
        }
        else if(userpnumber[0].value == "" || userpnumber[1].value == "")
        {
            alert("연락처를 입력해주세요!");
            for(var i=0;i<userpnumber.length;i++)
            {
                if(userpnumber[i].value == "")
                {
                    userpnumber[i].focus();
                    break;
                }
            }
            return false;
        }
        else
        {
            let today = new Date();
            var result = confirm(today.toLocaleString() + " 예약 확인되었습니다.");
            if(result){
                location.href = "checkbooking.html";
            }
        }
    }
}

