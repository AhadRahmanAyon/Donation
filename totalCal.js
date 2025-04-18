//


//
// call back function  for money  calculation 
// function  for innerText 
function numberConvertor(id) {

    const totalAmount = document.getElementById(id).innerText.trim();
    const totalAmountNumber = Number(totalAmount);
    return totalAmountNumber;
}

//function for inner Value

function numberConvertor2(id) {

    const totalAmount = document.getElementById(id).value.trim();
    const totalAmountNumber = Number(totalAmount);
    return totalAmountNumber;
}


// total  calculation  function 
function totalCal(id2, id3 , id1 ) {

    const totalDonatedFund = numberConvertor("total-amount");

    const totalEventDonation = numberConvertor(id2);

    const EventDonatedAmount = numberConvertor2(id3);




    if (EventDonatedAmount > 0 && !isNaN(EventDonatedAmount)) {
        const newTOtalDonation = totalDonatedFund + EventDonatedAmount;
        const newTotalFloodDonation = totalEventDonation + EventDonatedAmount;
        document.getElementById("total-amount").innerText = newTOtalDonation;
        document.getElementById(id2).innerText = newTotalFloodDonation;

        //to show modal 
        document.getElementById('my_modal_1').showModal();

        //  Clear the input field
        document.getElementById(id3).value = '';

        //add history 

        const disasterText  = document.getElementById(id1).innerText.trim();
        const time = new Date().toLocaleString()
        

        const p = document.createElement('p');
        p.innerText = ` ${EventDonatedAmount} taka donated for ${disasterText} On ${time}  `

        const container = document.getElementById('history-container') ;
        container.appendChild(p);
       






    }

    else {
        alert("Please Enter a valid donation amount.");
        document.getElementById('my_modal_1').close();

        //  Clear the input field
        document.getElementById(id3).value ='';

        // document.getElementById().hideModal();

        return
    }
}

