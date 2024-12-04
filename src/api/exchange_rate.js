export const fetchExchangeRate = async function(){
    const response = await fetch(
        'https://www.cbr-xml-daily.ru/daily_json.js',
    )
    return await response.json()
}