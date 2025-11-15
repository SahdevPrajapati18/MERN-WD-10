function debounce(fn,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            fn(...args);
        },delay);
    }
}
function searchingWithDebouncing(name){
    console.log(`Searching ${name}`);
}

const debouncedSearch = debounce(searchingWithDebouncing,1000)






debouncedSearch("Hi");
debouncedSearch("Sah");
debouncedSearch("Sahd");
debouncedSearch("Sahdev");
debouncedSearch("Sahdev Prajapati");
