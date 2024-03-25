const checkInput = () => {
    let input1 = document.querySelector('#eventName').value;
    let input2 = document.querySelector('#eventDate').value;
    let input3 = document.querySelector('#eventText').value;
    let input4 = document.querySelector('#eventPlace').value;
    let input5 = document.querySelector('#eventImage').value;

    let button = document.querySelector('#eventBtn');
    
    if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "" && input5 !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const addEvent = () => {
    let event = document.querySelector('#eventName').value;
    let date = document.querySelector('#eventDate').value;
    let text = document.querySelector('#eventText').value;
    let place = document.querySelector('#eventPlace').value;
    let image = document.querySelector('#eventImage').files[0];

    let imagePreview = document.querySelector('#eventImagePreview');
    let reader = new FileReader();
    
    // для того, чтобы картинка после загружки отображалась на сайте
    reader.onload = function(e) {
        imagePreview.src = e.target.result;
    }

    reader.readAsDataURL(image);

    let li1 = document.createElement('li'); 
    li1.textContent = event;
    let li2 = document.createElement('li'); 
    li2.textContent = date;
    let li3 = document.createElement('li'); 
    li3.textContent = text;
    let li4 = document.createElement('li'); 
    li4.textContent = place;
    
    document.querySelector('#eventList1').appendChild(li1); 
    document.querySelector('#eventName').value = "";
    document.querySelector('#eventList2').appendChild(li2); 
    document.querySelector('#eventDate').value = "";
    document.querySelector('#eventList3').appendChild(li3); 
    document.querySelector('#eventText').value = "";
    document.querySelector('#eventList4').appendChild(li4); 
    document.querySelector('#eventPlace').value = "";

    document.querySelector('#eventBtn').disabled = true;
}