var shown = false;
function showhideEmail(){
    if(shown){
        document.getElementById('email').innerHTML= "Show my email";
        shown=false;
    }else
    {
        var aditya_email = "<a href='mailto:kurapatiu1" + "@" + "udayton.edu'>kurapatiu1" + "@" + "udayton.edu</a> ";
        var aishwarya_email = "<a href='mailto:marghattanandeesha1" + "@" + "udayton.edu'>marghattanandeesha1" + "@" + "udayton.edu</a> ";
        document.getElementById('email').innerHTML=aditya_email+" & "+aishwarya_email;
        shown = true;
    }
}