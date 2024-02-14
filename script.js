// let myRequest = new XMLHttpRequest();
// myRequest.open("get", "https://hp-api.onrender.com/api/characters");
// myRequest.send();
// myRequest.onload = function () {
//     if (myRequest.status === 200 && myRequest.readyState === 4) {
//         console.log("sucess");
//         let myData = JSON.parse(this.responseText);
//         console.log(myData[0]);
//     } else {
//         console.log("fail");
//     }
// };

fetch("https://hp-api.onrender.com/api/characters")
    .then((res) => {
        let myData = res.json();
        return myData;
    })
    .then((myData) => {
        console.log(myData[0]);
        console.log(myData[0].image);
        console.log(myData[0].actor);
        console.log(myData[0].name);
        console.log(myData[0].dateOfBirth);
        let i = 0;
        for (j = 0; j < 8; j++) {
            let d = document.createElement("div");
            let img = document.createElement("img");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let s1 = document.createElement("span");
            let s2 = document.createElement("span");
            let s3 = document.createElement("span");
            let stxt1 = document.createTextNode(`${myData[i].actor}`);
            let stxt2 = document.createTextNode(`${myData[i].name}`);
            let stxt3 = document.createTextNode(`${myData[i].dateOfBirth}`);
            if (myData[i].dateOfBirth == null) {
                stxt3 = document.createTextNode("not known");
            }
            let ptxt1 = document.createTextNode("name :-");
            let ptxt2 = document.createTextNode("name of character :-");
            let ptxt3 = document.createTextNode("date :-");
            d.classList.add("box");
            img.src = `${myData[i].image}`;
            img.alt = "sorry image not found";
            //append element
            ++i;
            s1.appendChild(stxt1);
            s2.appendChild(stxt2);
            s3.appendChild(stxt3);
            p1.appendChild(ptxt1);
            p2.appendChild(ptxt2);
            p3.appendChild(ptxt3);
            p1.appendChild(s1);
            p2.appendChild(s2);
            p3.appendChild(s3);
            d.appendChild(img);
            d.appendChild(p1);
            d.appendChild(p2);
            d.appendChild(p3);
            // console.log(d);
            let container = document.querySelector(".container");
            // console.log(container);
            container.appendChild(d);
        }
        let btn = document.querySelector(".btn");
        btn.onclick = function () {
            // console.log("click");
            for (j = 0; j < 8; j++) {
                let d = document.createElement("div");
                let img = document.createElement("img");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let s1 = document.createElement("span");
                let s2 = document.createElement("span");
                let s3 = document.createElement("span");
                let stxt1 = document.createTextNode(`${myData[i].actor}`);
                let stxt2 = document.createTextNode(`${myData[i].name}`);
                let stxt3 = document.createTextNode(`${myData[i].dateOfBirth}`);
                if (myData[i].dateOfBirth == null) {
                    stxt3 = document.createTextNode("not known");
                }
                let ptxt1 = document.createTextNode("name :-");
                let ptxt2 = document.createTextNode("name of character :-");
                let ptxt3 = document.createTextNode("date :-");
                d.classList.add("box");
                img.src = `${myData[i].image}`;
                img.alt = "sorry image not found";
                //append element
                ++i;
                s1.appendChild(stxt1);
                s2.appendChild(stxt2);
                s3.appendChild(stxt3);
                p1.appendChild(ptxt1);
                p2.appendChild(ptxt2);
                p3.appendChild(ptxt3);
                p1.appendChild(s1);
                p2.appendChild(s2);
                p3.appendChild(s3);
                d.appendChild(img);
                d.appendChild(p1);
                d.appendChild(p2);
                d.appendChild(p3);
                // console.log(d);
                let container = document.querySelector(".container");
                // console.log(container);
                container.appendChild(d);
            }
        };
    });
