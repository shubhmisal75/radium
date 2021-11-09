function log (name)
{
    console.log(name)
}

function welcome(){
    console.log("welcome to my application,this is me, I am function Up")

}

const url = 'https://www.google.com/'

module.exports.log = log
module.exports.welcome= welcome
module.exports.url = url