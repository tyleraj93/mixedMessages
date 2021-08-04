/* This project is to create random sayings */
// Array of random parts for our sentence
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}
// Store the 'wisdom' in an array
let collectiveArray = [];
for(let key in collectiveWisdom) {
    let option = Math.floor(Math.random() * collectiveWisdom[key].length);

    switch(key) {
        case 'signInfo' :
            collectiveArray.push(`Your sign is a "${collectiveWisdom[key][option]}".`)
            break
        case 'fortuneOutput' :
            collectiveArray.push(`You are having: "${collectiveWisdom[key][option]}".`)
            break
        case 'advice' :
            collectiveArray.push(`You should: "${collectiveWisdom[key][option]}".`)
            break
        default :
            collectiveArray.push('There is not enough info.')
    }
}

const formatWisdom = wisdom => {
    const formatted = wisdom.join('\n')
    console.log(formatted)
}

formatWisdom(collectiveArray);