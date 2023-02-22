export const fetchDataUrl = async (image) => {
    const result = await fetch('/api/getDataUrl', {
        method: 'POST',
        body: JSON.stringify(image),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await result.json()
    console.log(data)

    return data
}