const word = 'kakak menjual katak dengan harga 12021'
const arrWord = word.split(' ')

const palindromeWords = (word) => {
    let result = []
    for (let i = 0; i < arrWord.length; i++) {
        let word = arrWord[i]
        let reverseWord = word.split('').reverse().join('')
        if (word === reverseWord) {
        result.push(word)
        }
    }
    return result
}

const palindromeIndex = (word) => {
    let result = []
    for (let i = 0; i < arrWord.length; i++) {
        let word = arrWord[i]
        let reverseWord = word.split('').reverse().join('')
        if (word === reverseWord) {
        result.push(i)
        }
    }
    return result
}

const totalDetectedPalindrome = (word) => {
    let result = []
    for (let i = 0; i < arrWord.length; i++) {
        let word = arrWord[i]
        let reverseWord = word.split('').reverse().join('')
        if (word === reverseWord) {
        result.push(word)
        }
    }
    return result.length
}

const invalidPalindromeIndex = (word) => {
    let result = []
    for (let i = 0; i < arrWord.length; i++) {
        let word = arrWord[i]
        let reverseWord = word.split('').reverse().join('')
        if (word !== reverseWord) {
        result.push(i)
        }
    }
    return result
}

console.log('Total detected palindrome: '  + totalDetectedPalindrome(word))
console.log('Palindrome words: ' + palindromeWords(word))
console.log('Palindrome index: ' + palindromeIndex(word))
console.log('Pnvalid palindrome index: ' + invalidPalindromeIndex(word))