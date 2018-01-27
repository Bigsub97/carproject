let socket=io()

$(function(){
    (function(){
        $.get('/cars',(c)=>{
            let str=''
            let p=''
            console.log(c)
            for(let i=0;i<c.length;i++){
                if($('#uname').text()==c[i].username){
                    console.log('In if')
                    str=`<div class="col-lg-4 col-md-6 col-xs-10 col-sm-10 col-xl-4">
                <div class="card border-danger mb-3" style="max-width: 30rem;">
                <div class="card-header">
                <div class="row">
                <div class="col">${c[i].username}</div>
                <div class="col"></div>
                <div class="col"><button class="btn btn-danger" onclick="remit(this,${i})">Remove</button></div>
                </div>
                </div>
                
                
                <div class="card-body text-info">
                <img class="rounded" src="${c[i].im}" width="100%" alt="car_image"><br/><br/>
                    <h5 class="card-title">${c[i].cname}</h5>
                    <h6 class="text-danger">Seller name- ${c[i].name}</h6>
                    <h6 class="text-warning">Personal contact- ${c[i].no}</h6>
                    <p>
                    
                    <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#${i}" aria-expanded="false" aria-controls="collapseExample">
                      Details
                    </button>
                  </p>
                  <div class="collapse" id="${i}">
                    <div class="card card-body">
                       <a class="list-group-item list-group-item-action">Model: ${c[i].cmod}</a>
                        <a class="list-group-item list-group-item-action">Number: ${c[i].cnum}</a>
                        <a class="list-group-item list-group-item-action">No. of kms. run: ${c[i].km}</a>
                        <a class="list-group-item list-group-item-action">Expected amount: ${c[i].cost}</a>
                    </div>
                  </div>
                  <p class="font-weight-light">${c[i].timestamp}</p>
                </div>
                </div>
            </div>`
            $('#cars').append(str)
                }
                else if(c[i].username==''){}
                else{
                    console.log('in else')
                    p+=`<div class="col-lg-4 col-md-6 col-xs-10 col-sm-10 col-xl-4">
                <div class="card border-info mb-3" style="max-width: 30rem;">
                <div class="card-header">${c[i].username}</div>
                <div class="card-body text-info">
                <img class="rounded" src="${c[i].im}" width="100%" alt="car_image"><br/><br/>
                    <h5 class="card-title">${c[i].cname}</h5>
                    <h6 class="text-danger">Seller name- ${c[i].name}</h6>
                    <h6 class="text-warning">Personal contact- ${c[i].no}</h6>
                    <p>
                    
                    <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#${i}" aria-expanded="false" aria-controls="collapseExample">
                      Details
                    </button>
                  </p>
                  <div class="collapse" id="${i}">
                    <div class="card card-body">
                       <a class="list-group-item list-group-item-action">Model: ${c[i].cmod}</a>
                        <a class="list-group-item list-group-item-action">Number: ${c[i].cnum}</a>
                        <a class="list-group-item list-group-item-action">No. of kms. run: ${c[i].km}</a>
                        <a class="list-group-item list-group-item-action">Expected amount: ${c[i].cost}</a>
                    </div>
                  </div>
                  <p class="font-weight-light">${c[i].timestamp}</p>
                </div>
                </div>
            </div>`
                }
            }

            $('#cars').append(p)
            
        })
    })()
    window.remit=function(e,id){
        $(e).parent().parent().parent().parent().parent().remove()
        $.get(`/removefromc?id=${id}`,(c)=>{

        })

    }
    socket.on('sell',(obj)=>{
        let str=''
        console.log(obj.id)
        if($('#uname').text()==obj.username){
            str+=`<div class="col-lg-4 col-md-6 col-xs-10 col-sm-10 col-xl-4">
        <div class="card border-danger mb-3" style="max-width: 30rem;">
        <div class="card-header">
        <div class="row">
        <div class="col">${obj.username}</div>
        <div class="col"></div>
        <div class="col"><button class="btn btn-danger" onclick="remit(this,${obj.id})">Remove</button></div>
        </div>
        </div>
        
        
        <div class="card-body text-info">
        <img class="rounded" src="${obj.im}" width="100%" alt="car_image"><br/><br/>
            <h5 class="card-title">${obj.cname}</h5>
            <h6 class="text-danger">Seller name- ${c[i].name}</h6>
            <h6 class="text-warning">Personal contact- ${obj.no}</h6>
            <p>
            
            <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#${obj.id}" aria-expanded="false" aria-controls="collapseExample">
              Details
            </button>
          </p>
          <div class="collapse" id="${obj.id}">
            <div class="card card-body">
               <a class="list-group-item list-group-item-action">Model: ${obj.cmod}</a>
                <a class="list-group-item list-group-item-action">Number: ${obj.cnum}</a>
                <a class="list-group-item list-group-item-action">No. of kms. run: ${obj.km}</a>
                <a class="list-group-item list-group-item-action">Expected amount: ${obj.cost}</a>
            </div>
          </div>
          <p class="font-weight-light">${obj.timestamp}</p>
        </div>
        </div>
    </div>`
        }
        else{
            str+=`<div class="col-lg-4 col-md-6 col-xs-10 col-sm-10 col-xl-4">
        <div class="card border-info mb-3" style="max-width: 30rem;">
        <div class="card-header">${obj.username}</div>
        <div class="card-body text-info">
        <img class="rounded" src="${obj.im}" width="100%" alt="car_image"><br/><br/>
            <h5 class="card-title">${obj.cname}</h5>
            <h6 class="text-danger">Seller name- ${c[i].name}</h6>
            <h6 class="text-warning">Personal contact- ${obj.no}</h6>
            <p>
            
            <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#${obj.id}" aria-expanded="false" aria-controls="collapseExample">
              Details
            </button>
          </p>
          <div class="collapse" id="${obj.id}">
            <div class="card card-body">
               <a class="list-group-item list-group-item-action">Model: ${obj.cmod}</a>
                <a class="list-group-item list-group-item-action">Number: ${obj.cnum}</a>
                <a class="list-group-item list-group-item-action">No. of kms. run: ${obj.km}</a>
                <a class="list-group-item list-group-item-action">Expected amount: ${obj.cost}</a>
            </div>
          </div>
          <p class="font-weight-light">${obj.timestamp}</p>
        </div>
        </div>
    </div>`
        }
        
        

        $('#cars').append(str)
    })
    
    $('#sell').click(function(){
        window.alert('Displaying car on Buy page!')
        socket.emit('sell',{
            name:$('#sname').val(),
            username:$('#u').text(),
            no:$('#no').val(),
            cname:$('#cname').val(),
            cmod:$('#cmod').val(),
            cnum:$('#cnum').val(),
            km:$('#km').val(),
            cost:$('#cost').val(),
            timestamp:new Date(),
            im:$('#im').val()
        })
    })
})