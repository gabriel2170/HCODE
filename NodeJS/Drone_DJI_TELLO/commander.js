class Comander{
    constructor(socket, host, port){
        this.socket = socket;
        this.host = host;
        this.port = port;
    }


    setInitCommand(){
        return new Promise((res, rej)=>{
            this.socket.send('command', 0 , 'command'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }

    setTakeOff(){
        return new Promise((res, rej)=>{
            this.socket.send('takeoff', 0 , 'takeoff'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }

    setLand(){
        return new Promise((res, rej)=>{
            this.socket.send('land', 0 , 'land'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }

    setForward(distance=20){
        return new Promise((res, rej)=>{
        this.socket.send(`forward ${distance}` , 0 , `forward ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }

    setback(distance=20){
        return new Promise((res, rej)=>{
        this.socket.send(`back ${distance}` , 0 , `back ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }
    setLeft(distance=20){
        return new Promise((res, rej)=>{
        this.socket.send(`left ${distance}` , 0 , `left ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }
    setCw(distance=20){
        return new Promise((res, rej)=>{
        this.socket.send(`cw ${distance}` , 0 , `cw ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }
    setCcw(distance=20){
        return new Promise((res, rej)=>{
        this.socket.send(`ccw ${distance}` , 0 , `ccw ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }
    setRight(distance=20){
        return new Promise((res, rej)=>{
        this.socket.send(`right ${distance}` , 0 , `right ${distance}`.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }

    setFlip(distance=20){
        return new Promise((res, rej)=>{
        this.socket.send(`flip b` , 0 , `flip b`.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }

    getBattery(distance=20){
        return new Promise((res, rej)=>{
        this.socket.send( 'battery?', 0 , 'battery?'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                }else{
                    return res()
                }
                
            })
        })
    }
}