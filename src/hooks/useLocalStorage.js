import { useEffect, useState } from 'react'

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
















// import { useEffect, useState } from 'react'


// const PREFIX = 'codepen-clone-'


// export default function useLocalStorage(key, initialValue) {
//     const prefixedkey = PREFIX + key

//     const [value, setValue] = useState(() => {                  //getting the value
//         const jsonValue = localStorage.getItem(prefixedkey)
//         if (jsonValue != null) return JSON.parse(jsonValue)

//         if (typeof initialValue === 'function') {
//             return initialValue()
//         } else {
//             return initialValue
//         }
//     })

//     useEffect(() => {
//         localStorage.setItem(prefixedkey, JSON.stringify(value))
//     }, [prefixedkey, value])                   //saving the value on local storage


//     return [value, setValue]
// }
