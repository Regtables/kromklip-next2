export const fetchDataUrl = async (images) => {
    const result = await fetch('/api/getDataUrl', {
        method: 'POST',
        body: JSON.stringify(images),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // const data = await result.json()
    // // console.log(data)

    // return data
}