let n = 9;
//Latihan 1

document.write('<h3>Latihan 1</h3> </br>')

for(let i=0; i < n; i++){
    document.write(i * 2, ' ')
}

//Latihan 2
document.write('</br><hr> <h3>Latihan 2</h3> </br>')

for(let i=1; i < 10; i++){
    document.write(i * 2 - 1, ' ')
}

//Latihan 3
document.write('</br><hr> <h3>Latihan 3</h3> </br>')

for(let x=1; x <= 5; x++){
    for(let y=1; y <= x; y++){
        document.write(y)
    }
    document.write('</br>')
}


//Latihan 4
document.write('</br><hr> <h3>Latihan 4</h3> </br>')

for (let i=1;i <= n; i++){
    for( let y = 1;y <= n; y++){
        if(i % 2 == 0){
            document.write("+")
        } else {
            document.write(" - ")
        }
    }
    document.write("</br>")
}

//Latihan 5
document.write('</br><hr> <h3>Latihan 5</h3> </br>')

for (let i=1;i <= n; i++){
    for( let y = 1;y <= n; y++){
            if (y%2==0){
                document.write(" - &nbsp;")
            } else {
                document.write(" + &nbsp;")
            }
    }
    document.write("</br>")
}

//Latihan 6
document.write('</br><hr> <h3>Latihan 6</h3> </br>')

for(let x=1; x <= n; x++){
    for(let y=1; y <= x-1; y++){
        document.write(" -&nbsp;")
       
    }
     for(let z=1; z <=1; z++){
            document.write(" + ")
        }
        for(let i=1; i <= n-x; i++){
            document.write("&nbsp;-&nbsp;")
        }
    document.write('</br>')
}

//Latihan 7
document.write('</br><hr> <h3>Latihan 7</h3> </br>')

for(let x=1; x <= n; x++){
    for(let y=1; y <= n-x; y++){
        document.write(" -&nbsp;")
       
    }
     for(let z=1; z <=1; z++){
            document.write(" + ")
        }
        for(let i=1; i <= x-1; i++){
            document.write("&nbsp;-&nbsp;")
        }
    document.write('</br>')
}

//Latihan 8
document.write('</br><hr> <h3>Latihan 8</h3> </br>')

for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++){
       if (j+i== n+1 || j==i) {
        document.write('+ &nbsp;')
       } else document.write ('&nbsp;- &nbsp;')
    }
    document.write ('<br>')
}



//Latihan 9
document.write('</br><hr> <h3>Latihan 9</h3> </br>')

for(let x=1; x <= n; x++){
    for(let y=1; y <= x; y++){
        document.write(" + ")
    }
    for(let z=1; z <=n-x; z++){
        document.write("&nbsp;-&nbsp;")
    }
    document.write('</br>')
}


//Latihan 10
document.write('</br><hr> <h3>Latihan 10</h3> </br>')

for(let x=1; x <= n; x++){
    for(let y=1; y <= n-x; y++){
        document.write(" -&nbsp;")
    }
    for(let z=1; z <=x; z++){
        document.write(" + ")
    }
    document.write('</br>')
}

