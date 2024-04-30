const firstNameChange = (e) =>{
    console.log(e.target.value);
    // if(val.length>1){
    //     console.log('correct');
    // }
}

function submitform(e){
    e.preventDefault();
    const t=e.target;
    for(let i=0;i<t.length;i++){
        const ty=t[i].type;
        const vl=t[i].value;
        console.log(ty,vl);
        if(ty=='checkbox'){
            console.log(t[i].checked)
        }
    }
    
}