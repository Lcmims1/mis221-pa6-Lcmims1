function handleOnLoad(){
    populateList();
}

function handleOnChange(){ // get the id of the book, then look through the list find the book, and keep up with that book an duse it to populate the form
    const selectedId = document.getElementById("selectListBox").value;
    //sequential search
    bookList.forEach((book)=>{
        if (book.id == selectedId){
            myBook = book;
        }
    });
    populateform();
}
function handleEditClick(){ // when user clicks edit
    makeEditable();
    hideButtons(); // you should only see save and cancel
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>" // must pass in the id of what's being saved
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleNewClick(){// when user clicks new
    makeEditable();
    hideButtons();
    blankFields();//blanks out fields
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-lg btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleRentClick(){// decrease the num of avail & updates database 
    myBook.numAvlb--;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}
function handleReturnClick(){// increase the num of avail & updates database 
    myBook.numAvlb++;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);     
}

function handleDeleteClick(){ // calls delete on back end
    deleteBook();  
}
function handleCancelSave(){
    populateform();
    makeReadOnly();
    showButtons();
}
function handleEditSave(){
    putBook(id);
    makeReadOnly();
    showButtons();
}
function handleNewSave(){
    postBook(); // postbook for non existing book
    makeReadOnly();
    showButtons();
    blankFields(); // forces user to click a book and populate form again
}

function populateform(){ // grabs each data elements, targets its value and sets value 
    document.getElementById ("bookTitle").value = myBook.title;
    document.getElementById( "bookAuthor").value = myBook.author;
    document.getElementById ("bookGenre").value = myBook.genre;
    document.getElementById ("bookAvlb").value = myBook.numAvlb;
    document.getElementById("bookIsbn").value = myBook.isbn;
    document.getElementById ("bookLength").value = myBook.length;
    document.getElementById ("bookCover").value = myBook.cover;
    //creates html dynamically
    var html = "<img class = \"coverArt\" src= \"" + myBook.cover + "\"></img>"
    document.getElementById("picBox").innerHTML = html;
    
}

function hideButtons(){ // utitilized when user clicks on "new" or "edit"
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}


function showButtons(){ // utitilized when user clicks on "save" or "cancel"
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById ("rentButton" ).style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display= "none";
}


function makeEditable(){ // get each field on the page, grab its read only property and make it false to make it editable
    document.getElementById("bookTitle").readOnly=false;
    document.getElementById("bookAuthor").readOnly=false;
    document.getElementById("bookGenre").readOnly=false;
    document.getElementById("bookAvlb").readOnly=false;
    document.getElementById("bookIsbn").readOnly=false;
    document.getElementById("bookLength").readOnly=false;
    document.getElementById("bookCover").readOnly=false;
}


function blankFields(){ //target the value field and set it to nothing
    document.getElementById("bookTitle").value="";
    document.getElementById("bookAuthor").value="";
    document.getElementById("bookGenre").value="";
    document.getElementById("bookAvlb").value="";
    document.getElementById("bookIsbn").value="";
    document.getElementById("bookLength").value="";
    document.getElementById("bookCover").value="";
}

function makeReadOnly(){//target the readOnly field and set it to true
    document.getElementById("bookTitle").readOnly=true;
    document.getElementById("bookAuthor").readOnly=true;
    document.getElementById("bookGenre").readOnly=true;
    document.getElementById("bookAvlb").readOnly=true;
    document.getElementById("bookIsbn").readOnly=true;
    document.getElementById("bookLength").readOnly=true;
    document.getElementById("bookCover").readOnly=true;
}
