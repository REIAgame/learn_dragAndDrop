class taskbox{
    task_box;
    button_task_add;
    button_task_del;
    taskCount=0;
    parent;
    width=0;
    task_box_anim;
    /**
     * 
     * @param {HTMLElement} parent this contained html parent
     * @param {string} id this id
     */
    constructor(parent,id){
        this.task_box=this.createTag("div",{},{"position":"relative",'margin':'10px','float':'left','width':'0%','height':'0px','background-color':'rgba(255, 255, 255, 0.589)'});
        this.button_task_add=this.createTag("button",{},{"position":"absolute","top":"90%","left":"10%"});
        this.button_task_del=this.createTag("button",{},{"position":"absolute","top":"90%","right":"10%"});
       
        this.task_box.id=id;   
        this.parent=parent;

        this.button_task_add.innerText="追加";
        this.button_task_add.id=this.task_box.id+"add";
        this.button_task_del.innerText="削除";
        this.button_task_del.id=this.task_box.id+"del";

        this.parent.appendChild(this.task_box);
        this.task_box_anim=setInterval(()=>{
            if(this.task_box.style.width=="20%"){
                clearInterval(this.task_box_anim);
                return;
            }
            this.task_box.style.height=String(this.width*15)+"px";
            this.task_box.style.width=String(this.width)+"%";
            this.width++;
        },10);
        this.task_create();
        this.task_box.appendChild(this.button_task_add);
        this.task_box.appendChild(this.button_task_del);
        this.button_task_del.addEventListener("click",this.task_delete.bind(this));
        this.button_task_add.addEventListener("click",this.task_add.bind(this));
    }
    
    /**
     * @param element html tag name : string
     * @param attrs atatch atribute : Dictionary<string,string> {attrName: attrValue}
     * @param styles atatch style : Dictionary<string,string> {property:value}
     * @return HTMLElement
     */
    createTag(element="a",attrs,styles){
        var tag=document.createElement(element);
        for(var attr in attrs){
            tag.setAttribute(attr,attrs[attr]);
        }
        for(var style in styles){
            tag.style.setProperty(style,styles[style]);
        }
        return tag;
    }
    /**
     * @description create input tag for task and id set and taskCount plus one;
     * @return HTMLElement input
     */
    task_create(){
        var task=this.createTag("input",{'type':'text','placeholder':'タスクを入力してください'},{"float":"left","text-align":"center","display":"block",'border-style':'none','margin':'5px auto','border-radius':'3px','width':'90%',"clear":"both"});
        task.id=this.task_box.id+this.taskCount;
        this.taskCount++;
        var img=this.createTag("img",{"src":""},{"width":"5%","height":"5%","margin-left":"2%","margin-top":"3%"});
        this.imgToBase64("../t.png",function(data,classes){
            img.src=data;
            img.id="t"+task.id;
            img.addEventListener("dragstart",this.task_ds);
            img.addEventListener("dragend",this.task_de);
            classes.task_box.appendChild(task);
            classes.task_box.appendChild(img);
        }.bind(this))
        
    }
    imgToBase64(filepath,func){
        var xhr =new XMLHttpRequest(filepath.split("/")[1]);
        xhr.onload=function(){
            var read =new FileReader();
            read.onloadend=function(){
                func(read.result,this);
                
                
            }.bind(this);
            read.readAsDataURL(xhr.response);
        }.bind(this);
        xhr.open("GET",filepath);
        xhr.responseType="blob";
        xhr.send();
    }
    task_delete(){
        this.button_task_add.remove();
        this.button_task_del.remove();
        document.getElementById(this.task_box.id+(this.taskCount-1)).remove();
        this.taskCount--;
        this.task_box.appendChild(this.button_task_add);
        this.task_box.appendChild(this.button_task_del);
    }
    task_add(){
        console.log(this);
        this.button_task_add.remove();
        this.button_task_del.remove();
        this.task_create();
        this.task_box.appendChild(this.button_task_add);
        this.task_box.appendChild(this.button_task_del);
    }
    task_ds(e){
        var any=
        console.log(any);
    }
    task_de(e){
        console.log(e);
    }
}
