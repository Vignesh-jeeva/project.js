function formsummit() {
//     var photo = document.getElementById('pid').files[0];
// var reader = new FileReader();
// reader.onload = function() {
//     document.getElementById('img').src=reader.result;
//  };
//  reader.readAsDataURL(photo); 
    let fnmae = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let pnum = document.getElementById('pnum').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let linkdin = document.getElementById('linkdin').value;
    let git = document.getElementById('git').value;
    let tskills=document.getElementById('tskills').value;
    let tskills1=document.getElementById('tskills1').value;
    let sskills=document.getElementById('sskills').value;
    let sskills1=document.getElementById('sskills1').value;
    let carrier = document.getElementById('objective').value;
    let education = document.getElementById('education').value;
    let education1 = document.getElementById('education1').value;
    let education2 = document.getElementById('education2').value;
    let instute = document.getElementById('insname').value;
    let instute1 = document.getElementById('insname1').value;
    let instute2 = document.getElementById('insname2').value;
    let spelization = document.getElementById('spelization').value;
    let spelization1 = document.getElementById('spelization1').value;
    let spelization2 = document.getElementById('spelization2').value;
    let pout = document.getElementById('pout').value;
    let pout1 = document.getElementById('pout1').value;
    let pout2 = document.getElementById('pout2').value;
    let cgpa = document.getElementById('cgpa').value;
    let cgpa1 = document.getElementById('cgpa1').value;
    let cgpa2 = document.getElementById('cgpa2').value;
    let project=document.getElementById('project').value;
    let print1=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class="container">
            <div class="start">
        <h2 class="name" id="name">${fnmae}${lname}</h2>
        <img src="" alt="" class="img" id="img">
        </div>
        <div class="container1">
            <h3 class="info">Contact Info :</h3><p class="info">Address :${address}<br>Email :${email}<br>Phone :${pnum}<br>Linkdin :${linkdin}<br>Github :${git}</p><hr>
            <h3 class="info">Carrier_objective</h3><p class="info">${carrier}</p><hr> <h3 class="info">Educational_qualification</h3> <table border="1px" class="info" id="table" >
            <tr>
            <th class="th">Education</th>
            <th class="th">Institute Name</th>
            <th class="th">Specialization</th>
            <th class="th">Year_of_passing</th>
            <th class="th">Percentage/CGPA</th>
           </tr>
           <tr>
            <td>${education}</td>
            <td>${instute}</td>
            <td>${spelization}</td>
            <td>${pout}</td>
            <td>${cgpa}</td>
           </tr>
           <tr>
            <td>${education1} <sup>th</sup></td>
            <td>${instute1}</td>
            <td>${spelization1}</td>
            <td>${pout1}</td>
            <td>${cgpa1}</td>
            </tr>
            <tr>
                <td>${education2}<sup>th</sup></td>
                <td>${instute2}</td>
                <td>${spelization2}</td>
                <td>${pout2}</td>
                <td>${cgpa2}</td>
            </tr>
        </table>
        </div>
        <div class="container2">
        <h3 class="info" >Soft_Skills</h3>
        <ul>
        <li>${sskills}</li>
        <li>${sskills1}</li>
        </ul>
       
        <h3 class="info">Technical_Skills</h3>
        <ul>
        <li>${tskills}</li>
        <li>${tskills1}</li>
        </ul>
        <h3 class="info">Project</h3>
        <h4 class="info">${project}</h4>
    </div>
    </div>
    </body>
    </html>`
    let printWindow = window.open('', '_blank');
    printWindow.document.write(print1);
    printWindow.document.close();
    printWindow.print();

}

function sadd() {
    let inp = document.createElement('input');
    inp.setAttribute('type', 'text');
    inp.setAttribute('id','sskills1');
    inp.setAttribute('value', '');
    inp.setAttribute('placeholder', 'enter your skills')
    document.getElementById('soskills').appendChild(inp);

}
function tadd()
 {
    let inp = document.createElement('input');
    inp.setAttribute('type', 'text');
    inp.setAttribute('id', 'tskills1');
    inp.setAttribute('value', '');
    inp.setAttribute('placeholder', 'enter your skills');
    document.getElementById('teskills').appendChild(inp);
 }