export default function ConsoleLog(message) {
    let development = true;
    if(development === true) {
        console.log(message);
    }
}