const myemail = 'stucodes22@gmail.com'

const emailRunner = () => {
    navigator.clipboard.writeText(myemail);
    console.log('copied to clipboard')
};

export default emailRunner;