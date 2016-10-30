var Context = new HTML("mainCanvas");
var cnt = 0;

//Polish 하기
//동굴 및 바다 강, 돌과 오어
//저장하는거

var lastLayer = [];
var layerCnt = 0;

function drawWorld(){
    var tileMapString = "";
    var perc = 0.1;
    var height;
    var heightCnt = 0;
    var firstCnt = 0;
    var mapHeight = Context.canvas.height * 5;
    var mapWidth = Context.canvas.width * 5;
    
    var KingGodJohnSoo;
    
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
                
                lastLayer[layerCnt] = height;
                layerCnt++;
                
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
                
            for(var k = 2784; k< mapHeight; k+=8){
                KingGodJohnSoo = Math.floor(Math.random() * 100 + 1)
                
                if(KingGodJohnSoo < 10){
                    Context.context.drawImage(terrainJohnSooSet[0],i,k);
                }
                else if(KingGodJohnSoo < 16 && KingGodJohnSoo > 12){
                    Context.context.drawImage(terrainJohnSooSet[1],i,k);
                }
                else if(KingGodJohnSoo <42 && KingGodJohnSoo > 40){
                    Context.context.drawImage(terrainJohnSooSet[2],i,k);
                }
                else if(KingGodJohnSoo <57 && KingGodJohnSoo > 50){
                    Context.context.drawImage(terrainJohnSooSet[4],i,k); 
                }
                else{
                    Context.context.drawImage(terrainJohnSooSet[3],i,k); 
                }
                
            }
        }
        console.log("World Loading Complete");
        console.log(tileMapString);
        cnt++;
        }
    }, 500);
}