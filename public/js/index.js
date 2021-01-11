const $burgerTextValue = $("#burger_textarea")
const $burgerList = $("#burger-list")

//add burget to list
const addBurger = async (e) =>{
    e.preventDefault();

    const burger = {
        burger_name : $("#add-burger").val()
    }
    await postBurger(burger).catch((err)=>{console.error(err)})

    location.reload();
}

//devour or remove burger

async function removeOrDevourBurger(e){
    e.preventDefault()
    const burger = {id :$(this).data("id")};
    let devoured;
    
    if($(this).data("devour")){
        burger.devoured =false

        await putBurger(burger).catch((err)=>{console.error(err)})

        location.reload();
    }else{
        await deleteBurger(burger).catch((err)=>{console.error(err)})
    }
    console.log(burger)
} 

//post 
const postBurger = (burger)=>{
    return $.ajax({
        url: "/api/burgers",
        data: burger,
        method: "POST",
      });
}

//put 
const putBurger = (burger)=>{
    return $.ajax({
        url: "/api/burgers"+ burger.id,
        data: burger,
        method: "PUT",
      });
}

//delete 
const deleteBurger = (burger)=>{
    return $.ajax({
        url: "/api/burgers"+ burger.id,
        data: burger,
        method: "DELETE",
      });
}

//click events
$burgerTextValue.submit(addBurger);
$burgerList.on("click","[data-devour]",removeOrDevourBurger);


