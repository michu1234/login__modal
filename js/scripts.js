let button = document.querySelector(".btn"),
    input = document.querySelector("input"),
    label = document.querySelector("label"),
    reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


    button.addEventListener("click", function() {
       if(!reg.test(input.vaue)){
        input.style.borderBottomColor = "#fc007e";
        label.style.color = "#fc007e";
       }
    })

