
// toggle button 
document.getElementById('btn-1').addEventListener('click', function(){
     document.getElementById('btn-1').classList.add('bg-[#B4F461]')
     document.getElementById('btn-2').classList.remove('bg-[#B4F461]')
     document.getElementById("donation").classList.remove('hidden');
     document.getElementById("history").classList.add('hidden');

})
document.getElementById('btn-2').addEventListener('click', function(){
     
    document.getElementById('btn-1').classList.remove('bg-[#B4F461]')
    document.getElementById('btn-2').classList.add('bg-[#B4F461]')
     document.getElementById("donation").classList.add('hidden');
     document.getElementById("history").classList.remove('hidden');

})






//flood finance calculation area 
document.getElementById('floodDnt-btn').addEventListener('click', function () {
    totalCal('floodGet-amount', 'floodDnt-amount' ,"noakhali", );
    
})



// Feni flood donation  calculation 

document.getElementById('feniFlood-btn').addEventListener('click',function(){
    totalCal("feniFlood-donation","feniDonation-input",'feniFlood');
    
})


// Quota movement donation  calculation 

document.getElementById("quotaGet-btn").addEventListener('click',function(){
    totalCal("quotaGet-amount","quotaDonation-amount",'quotaMovement');
    
})
