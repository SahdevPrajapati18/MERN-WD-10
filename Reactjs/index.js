async function getData(url) {
    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response; 
        console.log(data);  
        return data;
    } catch (err) {
        console.error("Fetch error:", err.message);
    }
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

export { getData, add, multiply, divide };
