function increment(selector){
    let container=$(selector);
    //DOM stands for Document Object Model and is a mechanism for representing and interacting with your HTML, XHTML or XML documents
    //Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.
    let fragment=document.createDocumentFragment();
    let textArea=$("<textarea></textarea>");
    let incrementBtn=$("<button>Increment</button>");
    let addBtn=$("<button>Add</button>");
    let list=$("<ul>");
    textArea.val(0);
    textArea.addClass("counter");
    textArea.attr("disabled",true);
    incrementBtn.addClass("btn");
    incrementBtn.attr("id","incrementBtn");
    addBtn.addClass("btn");
    addBtn.attr("id","addBtn");
    list.addClass("results");
    incrementBtn.on("click",function(){
        let value=parseInt(textArea.val());
        textArea.val(++value);
    });
    addBtn.on("click",function(){
        let value=parseInt(textArea.val());
        let li=$("<li>");
        li.text(value);
        list.append(li);
    });
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);

}