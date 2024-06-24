const background = document.createElement("div");
background.classList.add("bimage");
document.body.append(background);
Object.assign(background.style,{
    backgroundImage: 'url("people-taking-photos-food_23-2149303525.avif")',
    backgroundSize: "cover",
    minHeight: '600px',
    hight: "1000px",
    margin: "0px 500px 0px 500px",
    borderColor: "#48ee59",
    borederStyle: "solid",
    backgroundPosition: "center",
    borderRadius: "30px"
})

const layer = document.createElement("div");
background.append(layer);
Object.assign(layer.style,{
padding: "450px 0px 0px 0px"
})

const border = document.createElement("div");
border.classList.add("top");
layer.append(border);
Object.assign(border.style,{
    color: "#323f4b",
    backgroundColor: "darkorange",
    padding: "50px 0px 12px 0px",
    borderRadius: "20px",    
})

const text = document.createElement("h1");
text.textContent="Happy Meals";
border.append(text);
Object.assign(text.style,{
    padding: "0px 0px 0px 20px",
    fontFamily: "Bree Serif",
    fontSize: "35px",

})

const para = document.createElement("p");
para.textContent="Discover the best food over the 1,000 restaurants";
border.append(para);
Object.assign(para.style,{
    padding: "0px 0px 0px 20px",
    fontFamily: "Roboto",
    fontSize: "30px",
})

const sp = document.createElement("br");
para.append(sp)

const button = document.createElement("button");
button.textContent = "Book now";
para.append(button);
Object.assign(button.style,{
    margin: "30px 1px -23px 15px",
    padding: "10px 20px 12px 12px",
    borderRadius: "30px",
    borderColor: "darkgrey",
})