const $burgerTextValue = $("#burger_textarea") 

const addBurger = async (e) =>{
    e.preventDefault();

    const burger = {
        burger_name : $("#add-burger").val()
    }
    const res = await postBurger(burger).catch((err)=>{console.error(err)})
    
    console.log(res)

    location.reload();
}

$burgerTextValue.submit(addBurger);

const postBurger = (burger)=>{
    return $.ajax({
        url: "/api/burgers",
        data: burger,
        method: "POST",
      });
}
