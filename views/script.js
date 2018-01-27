let socket=io()

$(function(){
    $.get('/msg',(arr)=>{
        (function(){
            let str=''
            for(let i=0;i<=arr.length-1;i++){
                if($('#uname').text()==arr[i].name){
                    str+=`<div class="row">
                    <div class="col-1"></div>
                    <div class="col">
                        <div class="card text-white bg-info mb-3">
                            <div class="card-header">
                                ${arr[i].name}
                            </div>
                            <div class="card-body">`
                            if(arr[i].message){
                                str+=`<h5 class="card-title">${arr[i].message}</h5>`
                            }
                                else{
                                    str+=`<img src="${arr[i].img}" class="rounded" alt="error" style="width:100%">`
                                }
                               str+= `<p class="card-text">${arr[i].timestamp}</p>
                                
                            </div>
                            </div>
                    </div>
                    <div class="col"></div>
                </div><br/>`
                }
                else{
                    str+=`<div class="row">
                    <div class="col-1"></div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                ${arr[i].name}
                            </div>
                            <div class="card-body">`
                            if(arr[i].message){
                                str+=`<h5 class="card-title">${arr[i].message}</h5>`
                            }
                                else{
                                    str+=`<img src="${arr[i].img}" class="rounded" alt="error" style="width:100%">`
                                }
                               str+= `<p class="card-text">${arr[i].timestamp}</p>
                                
                            </div>
                            </div>
                    </div>
                    <div class="col"></div>
                </div><br/>`
                }
                
            }
            $('#messages').append(
                str
            )
        })()
    })
    socket.on('info',(obj,arr)=>{
        let str=''
        if($('#uname').text()==obj.name){
            str+=`<div class="row">
            <div class="col-1"></div>
            <div class="col">
                <div class="card text-white bg-info mb-3">
                    <div class="card-header">
                        ${obj.name}
                    </div>
                    <div class="card-body">`
                    if(obj.message){
                        str+=`<h5 class="card-title">${obj.message}</h5>`
                    }
                        else{
                            str+=`<img src="${obj.img}" class="rounded" alt="error" style="width:100%">`
                        }
                       str+= `<p class="card-text">${obj.timestamp}</p>
                        
                    </div>
                    </div>
            </div>
            <div class="col"></div>
        </div><br/>`
        }
        else{
            str+=`<div class="row">
            <div class="col-1"></div>
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        ${obj.name}
                    </div>
                    <div class="card-body">`
                    if(obj.message){
                        str+=`<h5 class="card-title">${obj.message}</h5>`
                    }
                        else{
                            str+=`<img src="${obj.img}" class="rounded" alt="error" style="width:100%">`
                        }
                       str+= `<p class="card-text">${obj.timestamp}</p>
                        
                    </div>
                    </div>
            </div>
            <div class="col"></div>
        </div><br/>`
        }
        

        $('#messages').append(
            str
        )
    })
    $('#send').click(()=>{
        socket.emit('chat',{
            name:$('#uname').text(),
            message:$('#msg').val(),
            timestamp:new Date()
        })
    })
    $('#picsend').click(()=>{
        
        socket.emit('pics',{
            name:$('#uname').text(),
            img:$('#pic').val(),
            timestamp:new Date()
        })
    })
})