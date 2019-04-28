'use strict'

function getElement(elObject){
    let elem = document.createElement(elObject.type)
    console.log(elObject);
    if(typeof elObject.id === 'string'){
        elem.id = elObject.id;
    }
    if(typeof elObject.className === 'string'){
        elem.className = elObject.className;
    }
    if(typeof elObject.alt === 'string'){
        elem.alt = elObject.alt;
    }
    if(typeof elObject.src === 'string'){
        elem.src = elObject.src;
    }
    if(typeof elObject.onclick === 'string'){
        elem.onclick = elObject.onclick;
    }
    if(typeof elObject.innerHTML === 'string'){
        elem.innerHTML = elObject.innerHTML;
    }
    if(typeof elObject.href === 'string'){
        elem.href = elObject.href;
    }
    return elem;
}
function initJSON() {
    loadJSON(function(res) {
        recurseJSON(JSON.parse(res).content, document.body);
    });
}

function recurseJSON(data, container){
    for (let el of data){
        let newContainer = getElement(el);
        // newContainer.className = 'container'
        // document.body.appendChild(getElement(el),data.content);
       
        container.appendChild(newContainer);
        catchEventListener(el);
        ;


        if(typeof el.content === 'object'){
            recurseJSON(el.content, newContainer);
        }    
    }
}

function loadJSON(callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', 'https://api.myjson.com/bins/zac2s', true); 
    req.onreadystatechange = 
    function() {
        if (req.readyState == 4 && req.status == "200") {
            callback(req.responseText);
        }
    };
    req.send(null);  
}
function catchEventListener(el){
    if(el.onclick === 'spust'){
        document.getElementsByClassName('menu-button')[0].addEventListener('click', function (){
            showMenu();
        });
    }
    if(el.onclick === 'spust1'){
        document.getElementById('change').addEventListener('click', function(){
            document.getElementsByClassName('text')[0].style.display = 'block';
            document.getElementsByClassName('text1')[0].style.display ='none';
            document.getElementsByClassName('text2')[0].style.display = 'none';
            document.getElementsByClassName('text3')[0].style.display = 'none';
            
        })
     
    }
    if(el.onclick === 'spust2'){
        document.getElementById('change1').addEventListener('click', function(){
            document.getElementsByClassName('text')[0].style.display = 'none';
            document.getElementsByClassName('text1')[0].style.display = 'block';
            document.getElementsByClassName('text2')[0].style.display = 'none';
            document.getElementsByClassName('text3')[0].style.display = 'none';
            
        })
     
    }
    if(el.onclick === 'spust3'){
        document.getElementById('change2').addEventListener('click', function(){
            document.getElementsByClassName('text')[0].style.display = 'none';
            document.getElementsByClassName('text1')[0].style.display ='none';
            document.getElementsByClassName('text2')[0].style.display = 'block';
            document.getElementsByClassName('text3')[0].style.display = 'none';
            
        })
     
    }
    if(el.onclick === 'spust4'){
        document.getElementById('change3').addEventListener('click', function(){
            document.getElementsByClassName('text')[0].style.display = 'none';
            document.getElementsByClassName('text1')[0].style.display ='none';
            document.getElementsByClassName('text2')[0].style.display = 'none';
            document.getElementsByClassName('text3')[0].style.display = 'block';
            
        })
     
    }
    if(el.onclick === 'push'){
        document.getElementById('link').addEventListener('click', function(){
           document.getElementById('htext').style.display = 'block';
           document.getElementById('htext1').style.display = 'none';
           document.getElementById('htext2').style.display = 'none';
           document.getElementById('htext3').style.display = 'none';
        })
    }
    if(el.onclick === 'push1'){
        document.getElementById('link1').addEventListener('click', function(){
           document.getElementById('htext').style.display = 'none';
           document.getElementById('htext1').style.display = 'block';
           document.getElementById('htext2').style.display = 'none';
           document.getElementById('htext3').style.display = 'none';
        })
    }
    if(el.onclick === 'push2'){
        document.getElementById('link2').addEventListener('click', function(){
           document.getElementById('htext').style.display = 'none';
           document.getElementById('htext1').style.display = 'none';
           document.getElementById('htext2').style.display = 'block';
           document.getElementById('htext3').style.display = 'none';
        })
    }
    if(el.onclick === 'push3'){
        document.getElementById('link3').addEventListener('click', function(){
           document.getElementById('htext').style.display = 'none';
           document.getElementById('htext1').style.display = 'none';
           document.getElementById('htext2').style.display = 'none';
           document.getElementById('htext3').style.display = 'block';
        })
    }
    if(el.onclick === 'mob'){
        document.getElementById('linkm').addEventListener('click', function(){
           document.getElementById('htext').style.display = 'block';
           document.getElementById('htext1').style.display = 'none';
           document.getElementById('htext2').style.display = 'none';
           document.getElementById('htext3').style.display = 'none';
        })
    }
    if(el.onclick === 'mob1'){
        document.getElementById('linkm1').addEventListener('click', function(){
           document.getElementById('htext').style.display = 'none';
           document.getElementById('htext1').style.display = 'block';
           document.getElementById('htext2').style.display = 'none';
           document.getElementById('htext3').style.display = 'none';
        })
    }
    if(el.onclick === 'mob2'){
        document.getElementById('linkm2').addEventListener('click', function(){
           document.getElementById('htext').style.display = 'none';
           document.getElementById('htext1').style.display = 'none';
           document.getElementById('htext2').style.display = 'block';
           document.getElementById('htext3').style.display = 'none';
        })
    }
    if(el.onclick === 'mob3'){
        document.getElementById('linkm3').addEventListener('click', function(){
           document.getElementById('htext').style.display = 'none';
           document.getElementById('htext1').style.display = 'none';
           document.getElementById('htext2').style.display = 'none';
           document.getElementById('htext3').style.display = 'block';
        })
    }
  
}

let isMenu = false;

function showMenu() {
    if (!isMenu) {
        document.getElementsByClassName('mobile-menu')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
    }
    isMenu = !isMenu;
}







