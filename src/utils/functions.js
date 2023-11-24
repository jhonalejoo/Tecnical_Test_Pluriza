export function handlePriceFormat(price){
    const decimals = (price.toString().split('.')[1] || '').length;
    const priceFormat = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD', // Puedes cambiar la moneda según tus necesidades
        minimumFractionDigits: decimals,
      })
    return  priceFormat
}