const input = document.getElementById("input");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
   return item.length;
}

function createListElemen(){
   var li = document.createElement("li"); 
   li.appendChild(document.createTextNode(input.value)); //สร้างข้อความที่จะบันทึก
   ul.appendChild(li); //สร้างให้แสดง list ออกมา
   input.value = "" ; //ลบข้อความจากช่องอินพุตที่เราใส่ไปแล้ว

   //ฟังชั่นสิ่งที่ทำแล้ว
   function crossOut(){
       li.classList.toggle("done"); 
   }

   li.addEventListener("click", crossOut);

   var dBtn = document.createElement("button");
   dBtn.appendChild(document.createTextNode("X"));
   li.appendChild(dBtn);
   dBtn.addEventListener("click", deleteListItem);

   function deleteListItem() {
       li.classList.add("delete");   
   }
}

function addListAfterKeyPress(event) {
   if (inputLength() > 0 && event.which === 13){
       createListElemen();
   }
}

input.addEventListener("keypress", addListAfterKeyPress);