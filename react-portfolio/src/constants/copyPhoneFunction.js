const myphone = '9188086027'

const phoneRunner = () => {
    navigator.clipboard.writeText(myphone);
    console.log('copied to clipboard')
};

export default phoneRunner;