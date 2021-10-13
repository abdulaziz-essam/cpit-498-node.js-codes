const req = () => {
    console.log("name : ahmad , age :53 , job:ux")
}
const res = () => {
    console.log("status : 200 , file :json ")
}

const doWork=async()=>{
const response=await req();
console.log("good job")

};
doWork().then(()=>{
    console.log("status : 200 ,file:json")
});
console.log("wrong information")
console.log("json file")