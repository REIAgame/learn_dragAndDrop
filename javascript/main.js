var task_box_group;
var task_boxCount=0;
var taskGroup=[];
window.onload=function(){
    task_box_group=document.getElementById("task_box_group");
    document.getElementById("add_button").addEventListener("click",function(){
        taskGroup.push(new taskbox(task_box_group,String(task_boxCount)));
        task_boxCount++;
        
    });
    
}
