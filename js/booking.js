window.onload = function(){
    
    var themazone = document.getElementById("themalist");
    var themalist = themazone.getElementsByTagName("a");
    var timezone = document.getElementById("timelist");
    var timelist = timezone.getElementsByTagName("a");
    var bookvalue = document.getElementById("datetext");
    var themavalue = document.getElementById("thematext");
    var timevalue = document.getElementById("timetext");
    var date = document.getElementById("bookdate");
    var bool = [false, false];
    
    document.getElementById("bookform").onsubmit = function()
    {
        
        if(date.value == "")
        {
            alert("날짜를 선택해주세요!");
            return false;
        }
        else if(bool[0] == false)
        {
            alert("이용할 세탁기/건조기를 선택해주세요!");
            return false;
        }
        else if(bool[1] == false)
        {
            alert("시간을 선택해주세요!");
            return false;
        }
        else
            bookvalue.value = date.value;

    }

    for(var i=0;i<themalist.length;i++)
    {
        themalist[i].onclick = function()
        {
            var k = this.id;
            for(var j=0;j<themalist.length;j++)
                themalist[j].style.backgroundColor = "white";

            switch(k)
            {
            case "0":
                themavalue.value = "세탁기";
                break;
            case "1":
                themavalue.value = "건조기";
            }

            this.style.backgroundColor = "orange";
            bool[0] = true;

            return false;
        }
    }

    for(var i=0;i<timelist.length;i++)
    {
        timelist[i].onclick=function()
        {
            var t = this.id;

            for(var j=0;j<timelist.length;j++)
                timelist[j].style.backgroundColor = "white";

                switch(t)
                {
                case "0":
                    timevalue.value = "09:00";
                    break;
                case "1":
                    timevalue.value = "10:00";
                    break;
                case "2":
                    timevalue.value = "11:00";
                    break;
                case "3":
                    timevalue.value = "12:00";
                    break;
                case "4":
                    timevalue.value = "13:00";
                    break;
                case "5":
                    timevalue.value = "14:00";
                    break;
                case "6":
                    timevalue.value = "15:00";
                    break;
                case "7":
                    timevalue.value = "16:00";
                    break;
                case "8":
                    timevalue.value = "17:00";
                    break;
                case "9":
                    timevalue.value = "18:00";
                    break;
                case "10":
                    timevalue.value = "19:00";
                    break;
                case "11":
                    timevalue.value = "20:00";
                    break;
                case "12":
                    timevalue.value = "21:00";
                    break;
                }

            bool[1] = true;
            this.style.backgroundColor = "orange";

            return false;
        }
        
    }
}