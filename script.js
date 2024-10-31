const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) { 

    const row = document.createElement("div");
    for (let j = 0; j < 16; j++) { 
        const box = document.createElement("div");
        box.style.width = `${960/16}px`;
        box.style.height = `${960/16}px`;
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

const newGridBtn = document.querySelector(".new-grid");

newGridBtn.addEventListener("click", () => { 
    const size = prompt("Size of New Grid: ");

    if (size > 100) { 
        size = 100;
    }

    container.innerHTML = "";

    

    for (let i = 0; i < size; i++) { 

        const row = document.createElement("div");
        for (let j = 0; j < size; j++) { 
            const box = document.createElement("div");
            box.style.width = `${960/size}px`;
            box.style.height = `${960/size}px`;
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
    


});