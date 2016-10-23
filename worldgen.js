var Context = new HTML("mainCanvas");
var cnt = 0;

//Polish 하기
//동굴 및 바다 강, 돌과 오어
//저장하는거

function drawWorld(){
    var tileMapString = "";
    var perc = 0.1;
    var height;
    var heightCnt = 0;
    var firstCnt = 0;
    var mapHeight = Context.canvas.height * 5;
    var mapWidth = Context.canvas.width * 5;
    
    setInterval(function(){
        while(cnt==0){
            
            Context.context.clearRect(0, 0, mapWidth, mapHeight);
            
            height = mapHeight / 2;
        
            for(var i = 0; i < mapWidth; i+=8){
                
                if(Math.ceil(Math.random() * 10) > perc){
                    if(Math.floor(Math.random() * 2) == 0){
                        height -= Math.ceil(Math.random() * 16);
                    } else {
                        height += Math.ceil(Math.random() * 16);
                    }
                } else {
                    height = Math.floor(Math.random() * mapHeight);
                    if(height > mapHeight / 2){
                        height += 500;
                    } else {
                        height -= 500;
                    }
                }
                
                firstCnt = 0;
                
                for(var j = 0; j < mapHeight; j+=8){
                    if(j > height){
                        if(firstCnt == 0){
                            var randomTop = Math.floor(Math.random() * 3);
                            Context.context.drawImage(tileSet[0][0, randomTop], i, j);
                        } else {
                            Context.context.drawImage(tileSet[0][0, 3], i, j);
                        }
                        firstCnt++;
                    }
            }
        }
        console.log("World Loading Complete");
        console.log(tileMapString);
        cnt++;
        }
    }, 500);
}