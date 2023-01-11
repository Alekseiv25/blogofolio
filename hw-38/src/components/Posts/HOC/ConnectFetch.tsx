import { useState } from "react"

export const connectFetch = <T extends {}>(
    Component: (data: any) => JSX.Element,
    selectData: Promise<T[]>
) => {

    return () => {
        const [data, setData] = useState<T[]>([])

        selectData.then(data => {
            setData(data)
        })

        return (
            <>
                {
                    data.map(item => <Component {...item} />)
                }
            </>
        )
    }
}