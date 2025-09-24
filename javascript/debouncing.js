function searchwithdebouncing(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        },delay);
    };
}

function search(name){
    console.log(`Searching for ${name}`);
}
// Example usage:
const debouncedSearch = searchwithdebouncing(search, 1212);

// Simulating typing:
debouncedSearch("S");
debouncedSearch("Sa");
debouncedSearch("Sah");
debouncedSearch("Sahd");
debouncedSearch("Sahde");
debouncedSearch("Sahdev");