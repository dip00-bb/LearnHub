import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`learnHub | ${title}`
    })
}

export default useTitle