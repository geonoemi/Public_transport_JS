let chosenTrolley="";
let trolleyFunction=function(){
    let trolleyDiv=$('<div>').attr('id', 'trolleyDiv');
    let label= $('<label>').attr('class','labels').text('Choose trolley'); 
    $(trolleyDiv).append(label);  
    $('.optionDiv').append(trolleyDiv);
    let trolleys = [
                    {val : 1, text: '8'},
                    {val : 2, text: '10'},
                    {val : 3, text: '19'}
                    ];
   let selectTrolley = $('<select>').attr('id','selectTrolley').appendTo('#trolleyDiv');
    $(trolleys).each(function() {
        selectTrolley.append($('<option>').attr('value',this.val).text(this.text));
    });
    /*let img=$('<img>').attr('src', 'trolley.jpg').attr('id', 'trolleyIMG');
    $('.optionDiv').append(img);   */
};
let selectTrolleyFunction=function(){
    $('#selectTrolley').on('change',function(){ 
         let isEmpty=  $('#selectTrolley').next();
         if(isEmpty.children().length>0){
             isEmpty.children().remove();     
         }
    });
    $('#selectTrolley').on('change',function(){  
        chosenTrolley=$('#selectTrolley :selected').text();
        if(chosenTrolley=='8'){
            console.log('your chosen trolley is: '+chosenTrolley);
        }
        if(chosenTrolley=='10'){
            console.log('your chosen trolley is: '+chosenTrolley);

        }
        if(chosenTrolley=='19'){
            console.log('your chosen trolley is: '+chosenTrolley);
        }
    });    
};