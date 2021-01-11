const $burgerTextValue = $("#burger_textarea")
const $burgerList = $("#burger-list")

//add burget to list
const addBurger = async (e) =>{
    e.preventDefault();

    const burger = {
        burger_name : $("#add-burger").val()
    }
    const res = await postBurger(burger).catch((err)=>{console.error(err)})

    console.log(res)

    location.reload();
}

//devour or remove burger

async function removeOrDevourBurger(e){
    e.preventDefault()
    const burger = {id :$(this).data("id")};

    if($(this).data("devour")){
        burger.devoured = 1;

        const res = await putBurger(burger).catch((err)=>{console.error(err)})

        console.log("response ",res)

        location.reload();
    }else{
        await deleteBurger(burger).catch((err)=>{console.error(err)})
        location.reload();
    }
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
    console.log(burger)
    return $.ajax({
        url: "/api/burgers/"+ burger.id,
        data: burger,
        method: "PUT",
      });
}

//delete 
const deleteBurger = (burger)=>{
    return $.ajax({
        url: "/api/burgers/"+ burger.id,
        method: "DELETE",
      });
}

//click events
$burgerTextValue.submit(addBurger);
$burgerList.on("click","[data-devour]",removeOrDevourBurger);


