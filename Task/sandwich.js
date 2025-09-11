function Sandwich(raw, cb){
    console.log("Taking raw bread");
    cb();
}
function Filling(cb){
    console.log("Filling sausage");
    cb();
}
function Oiling(cb){
    console.log("Oiling bread");
    cb();
}
function Grilling(cb) {
  console.log('Grilling...');
  setTimeout(function() {
    console.log('Grilling complete!');
    cb();
  }, 5000);
}
function SandwichReady(cb){
    console.log("Sandwich Ready");
}

Sandwich("raw",function(){
    Filling(function(){
        Oiling(function(){
            Grilling(function(){
                SandwichReady()
            });
        });
    });
});