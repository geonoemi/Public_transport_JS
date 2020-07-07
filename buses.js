let chosenBus="";
let way=['forth', 'back'];

let busFunction=function(){
    let busDiv=$('<div>').attr('id', 'busDiv');
    let label= $('<label>').attr('class','labels').text('Choose bus');  
    $('.optionDiv').append(label); 
    
    let bus = [
                {val : 1, text: '70'},
                {val : 2, text: '71A'},
                {val : 3, text: '90H'}
                ];    
    let selectBus = $('<select>').attr('id','selectBus').appendTo('.optionDiv');
    $('.optionDiv').append(busDiv);
    $(bus).each(function() {
     selectBus.append($('<option>').attr('value',this.val).text(this.text));
    });
};

let selectBusFunction=function(){

    $('#selectBus').on('change',function(){ 
        let isEmpty=  $('#selectBus').next();
        if(isEmpty.children().length>0){
            isEmpty.children().remove();     
        }
    });   

    $(selectBus).on('change',function(){  
        chosenBus=$('#selectBus :selected').text();
        if(chosenBus=='70'){
            console.log('your chosen bus is: '+chosenBus);
            select70Station();
        }
    });
    $(selectBus).on('change',function(){  
        if(chosenBus=='71A'){
            console.log('your chosen bus is: '+chosenBus);  
            select71AStation();  
        }
    });    
    $(selectBus).on('change',function(){  
        if(chosenBus=='90H'){
            console.log('your chosen bus is: '+chosenBus);    
            select90HStation();
        }
    });    
};

let select70Station=function(){
    let stations70 = [
        {val : 1, text: 'Füvészkert'},
        {val : 2, text: 'Mars-tér'},
        {val : 3, text: 'Széchenyi-tér'} 
    ];
    let stations70Div=$('<div>').attr('id', 'stations70Div');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations70Div).append(label);  
    $(busDiv).append(stations70Div);  

    let selectStation70 = $('<select>').attr('id','selectStation70').appendTo('#stations70Div');
  
    $(stations70).each(function() {
        selectStation70.append($('<option>').attr('value',this.val).text(this.text));
    });
};

let select71AStation=function(){
    let stations71A = [
        {val : 1, text: 'Mars-tér'},
        {val : 2, text: 'Katalin utca'},
        {val : 3, text: 'Napfényfürdő'}
    ];
    let stations71ADiv=$('<div>').attr('id', 'stations71ADiv');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations71ADiv).append(label);  
    $(busDiv).append(stations71ADiv);  

    let selectStation71A = $('<select>').attr('id','selectStation71A').appendTo('#stations71ADiv');
  
    $(stations71A).each(function() {
        selectStation71A.append($('<option>').attr('value',this.val).text(this.text));
    });
   /*selected station */
    $('#selectStation71A').on('change', function(){
        selectedStation71A=$('#selectStation71A :selected').text();
        if((selectedStation71A)==='Katalin utca'){
            console.log(selectedStation71A);
                let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
                let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
                $('#busDiv').append(selectWayDiv);
                $(selectWayDiv).append(selectWayLabel);
                let way=[
                    {val : 1, text: 'Mars-tér'},
                    {val : 2, text: 'Napfényfürdő'}
                ];
                let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);
                $(way).each(function(){
                    $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
                });
               /* selectWay();*/
                /*choose way: */
             }
    });
};
let selectWay=function(){
    let way=[
        {val : 1, text: 'Mars-tér'},
        {val : 2, text : 'Napfényfürdő'}
    ];
    $(way).each(function(){
        $('#selectWayDiv').append('<option>').attr('value', this.val).text(this.text);
    });
}
let select90HStation=function(){
    let stations90H = [
        {val : 1, text: 'Szegedi Ipari Logisztikai Központ'},
        {val : 2, text: 'Rókusi víztorony'},
        {val : 3, text: 'Lugas utca'}
    ];
    let stations90HDiv=$('<div>').attr('id', 'stations90HDiv');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations90HDiv).append(label);  
    $(busDiv).append(stations90HDiv);  

    let selectStation90H = $('<select>').attr('id','selectStation90H').appendTo('#stations90HDiv');
  
    $(stations90H).each(function() {
        selectStation90H.append($('<option>').attr('value',this.val).text(this.text));
    });

};


