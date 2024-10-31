const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) { 

    const row = document.createElement("div");
    for (let j = 0; j < 16; j++) { 
        const box = document.createElement("div");
        box.style.width = "32px";
        box.style.height = "32px";
        box.style.backgroundColor = "lightblue";
        box.style.border = "1px solid black";

        box.addEventListener("mouseover", () => { 
            box.style.backgroundColor = "orange";
        });



        row.appendChild(box);
    }

    row.style.display = "flex";
    container.appendChild(row);


    
    

}