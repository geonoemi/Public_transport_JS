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

    $(selectStation70).on('change', function(){
    
        if(stations70Div.next().length>0){
            stations70Div.next().remove();     
        }
      
        selectedStation70=$('#selectStation70 :selected').text();
    
        if((selectedStation70)==='Füvészkert') {

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(busDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);
            selectWay70();
            getDepartureTimesFor70FuveszkertWorkingDays();
        }
        if((selectedStation70)==='Mars-tér') {

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(busDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);
            selectWay70();
            getDepartureTimesFor70MarsTerWorkingDays();
        }
        if((selectedStation70)==='Széchenyi-tér') {

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(busDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);
            selectWay70();
            getDepartureTimesFor70SzechenyiTerTerWorkingDays();
        }
    });
};