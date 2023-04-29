console.log("Hello World")



const userName = "Jan Kowalki";
const isImmortal = true;

const checkType = (val1,val2) =>{
    console.log(`pierwsza wartość jest typu: ${typeof val1}, a druga ${typeof val2}`);

};
checkType(userName,isImmortal);
checkType(userName, isImmortal);
checkType(isImmortal, userName);
checkType(1, 2);
checkType([1, 2, 3], { name: "Jan Kowalki" });


i=0;
const drawNumber = (min,max) => {
while (i<100){
        rand = (Math.random()*(max-min+1))+1; //losowanie od 1 do 10
        if(rand>=max){
            console.log(Math.floor(rand));
        }
    i++;
}
};

drawNumber(1,10);
