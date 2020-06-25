
let chosenTram="";

let tramFunction=function(){
    let tramsDiv=$('<div>').attr('id', 'tramsDiv');
    let label= $('<label>').text('Choose tram:');  
    $(tramsDiv).append(label); 
    $('.optionDiv').append(tramsDiv);
    let trams = [
                {val : 1, text: '2'},
                {val : 2, text: '3F'},
                {val : 3, text: '4'}
                ];    
    let selectTram = $('<select>').attr('id','selectTram').appendTo('#tramsDiv');
    $(trams).each(function() {
    selectTram.append($('<option>').attr('value',this.val).text(this.text));
    });
};
/*$('#selectTram').on('change',function(){ 
    let isEmpty=$(this);
         if(isEmpty.children().length>0){
            isEmpty.children().remove();
            chosenTram=$('#selectTram :selected').text();
            console.log('your chosen tram is: '+chosenTram);
        }
});*/

let selectTramFunction=function(){
    $(selectTram).on('change',function(){  
        chosenTram=$('#selectTram :selected').text();
        if(chosenTram=='2'){
            console.log('your chosen tram is: '+chosenTram);
            select2Station();
        }
    });
    $(selectTram).on('change',function(){  
        if(chosenTram=='3F'){
            console.log('your chosen tram is: '+chosenTram);  
            select3FStation();  
        }
    });    
    $(selectTram).on('change',function(){  
        if(chosenTram=='4'){
            console.log('your chosen tram is: '+chosenTram);    
            select4Station();
        }
    });    
};

let select2Station=function(){
    let stations2 = [
        {val : 1, text: 'Személyi pályaudvar'},
        {val : 2, text: 'Anna-kút'},
        {val : 3, text: 'Európa-liget'}
    ];
    let stations2Div=$('<div>').attr('id', 'stations2Div');
  
    let label= $('<label>').text('Choose station:'); 
    $(stations2Div).append(label);  
    $(tramsDiv).append(stations2Div);  

    $('#stations2Div').on('change',function(){  
        let isEmpty=$(this);
        if(isEmpty.children().length>0){
            isEmpty.children().remove();
        }
    });
    let selectStation2 = $('<select>').attr('id','selectStation2').appendTo('#stations2Div');
  
    $(stations2).each(function() {
        selectStation2.append($('<option>').attr('value',this.val).text(this.text));
    });
};

let select3FStation=function(){
    let stations3F = [
        {val : 1, text: 'Tarján'},
        {val : 2, text: 'Dugonics-tér'},
        {val : 3, text: 'Fonógyári út'}
    ];
    
    let stations3FDiv=$('<div>').attr('id', 'stations3FDiv');
    let label= $('<label>').text('Choose station:'); 
    $(stations3FDiv).append(label);  
    $(tramsDiv).append(stations3FDiv);  

    let selectStation3F = $('<select>').attr('id','selectStation3F').appendTo('#stations3FDiv');
    $(stations3F).each(function() {
        selectStation3F.append($('<option>').attr('value',this.val).text(this.text));
    });
};

let select4Station=function(){
    let stations4 = [
        {val : 1, text: 'Tarján'},
        {val : 2, text: 'Dugonics-tér'},
        {val : 3, text: 'Kecskés'}
    ];
    
    let stations4Div=$('<div>').attr('id', 'stations4Div');
    let label= $('<label>').text('Choose station:'); 
    $(stations4Div).append(label);  
    $(tramsDiv).append(stations4Div);  

   
    let selectStation4 = $('<select>').attr('id','selectStation4').appendTo(stations4Div);
    $(stations4).each(function() {
        selectStation4.append($('<option>').attr('value',this.val).text(this.text));
    });
};