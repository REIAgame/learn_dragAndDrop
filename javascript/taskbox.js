class taskbox{
    task_box=this.createTag("div",{},{'margin':'10px','float':'left','width':'200px','height':'300px','background-color':'rgba(255, 255, 255, 0.589)'});
    task=this.createTag("input",{'type':'text','placeholder':'タスクを入力してください'},{'border-style':'none','margin':'3px','border-radius':'3px','width':'180px'});
    button_task_add=this.createTag("button",{},{});
    taskCount=0;
    parent;
    add_task_id;
    /**
     * 
     * @param {HTMLElement} parent this contained html parent
     * @param {string} id this id
     */
    constructor(parent,id){
        this.task_box.id=id;   
        this.parent=parent;
        this.task.id=this.task_box.id+this.taskCount;
        this.taskCount++;
        this.button_task_add.innerText="追加";
        this.button_task_add.id=this.task_box.id+"add";
        this.add_task_id=this.button_task_add.id;
        this.parent.appendChild(this.task_box);
        this.task_box.appendChild(this.task);
        this.task_box.appendChild(this.button_task_add);
        this.button_task_add.addEventListener("click",this.task_add);
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
    task_add(remove,add,parent){
        new HTMLElement(parent).remove();
        parent.appendChild(add);
        parent.appendChild(remove);
        this.taskCount++;
    }
}