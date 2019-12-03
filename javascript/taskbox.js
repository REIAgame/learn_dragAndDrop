class taskbox{
    task_box;
    button_task_add;
    button_task_del;
    taskCount=0;
    parent;
    width=0;
    input_togle;
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
        this.input_togle=this.createTag("img",{"src":"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
"})
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
        this.task_box.appendChild(this.task_create());
        this.task_box.appendChild()
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
        return task;
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
        this.task_box.appendChild(this.task_create());
        this.task_box.appendChild(this.button_task_add);
        this.task_box.appendChild(this.button_task_del);
    }
    
}
