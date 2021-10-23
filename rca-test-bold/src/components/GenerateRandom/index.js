function GenerateRndomStringByNumber() {
    const handleGetRandomLetter = () => {

        let chars = 'abcdefghijklmnopqrstuvwxyz';
        var charsL = chars.length;
        return chars.charAt(Math.floor(Math.random() * charsL));
    }
    const handleSolution = (N) => {
        let newWorld = '';

        for (let index = 0; index < N; index++) {
            let newLetter = handleGetRandomLetter();
            if ((newWorld.split(newLetter).length - 1) % 2 !== 0) {
                newWorld += handleGetRandomLetter();
            } else {
                newWorld += newLetter;
            }
        }
        console.log(newWorld);
    }

    handleSolution(10);
    return (
        <div className="App">
        </div>
    );
}

export default GenerateRndomStringByNumber;
