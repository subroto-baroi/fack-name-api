




const button=document.getElementById('button');
button.addEventListener('click',()=>details())




function details(){
  fetch('https://randomuser.me/api/')
.then(res=>res.json())
.then(data=>{
  getAll(data);  
})
}
details()
function getAll(data){
    const details=data.results[0];
    const name=details.name;
    const fullName=`${name.title} ${name.first} ${name.last}`;
    const street=`${details.location.street.number}-${details.location.street.name} `;
    const img=`${details.picture.large}`
    const date= (details.dob.date);
    const nDate=date.slice(0, date.length - 14);
    const married= `${details.registered.age}`
    const getMarried=document.getElementById('married');
    const marriageDate= `${details.registered.date}`;
    const exatmarrigeDate=marriageDate.slice(0, marriageDate.length - 14)
    const getMarrigeDate=document.getElementById('marrigeDate');
    
    document.getElementById('name').innerText=fullName;
    document.getElementById('email').innerText=details.email;
    document.getElementById('gender').innerText=details.gender;
    document.getElementById('country').innerText=details.location.country;
    document.getElementById('city').innerText=details.location.city;
    document.getElementById('cell').innerText=details.cell;
    document.getElementById('street').innerText=street;
    document.getElementById('psCode').innerText=details.location.postcode;
    document.getElementById('age').innerText=details.dob.age;
    document.getElementById('phone').innerText=details.phone;
    document.getElementById('img').setAttribute('src' , img);
    document.getElementById('birth').innerText=nDate;
    
    if(marrid=>1){
      getMarried.innerText= `${married} Years Married`
      getMarrigeDate.innerText=exatmarrigeDate;
    }
    else{
      getMarried.innerText= "Unmarrid"
      getMarrigeDate.style.display='none'
    }

}
// setInterval(() => {
//   details();
// }, 1000);