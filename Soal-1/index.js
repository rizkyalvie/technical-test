function priceCount(){
    let a = 4550
    let b = 5330
    let c = 8653

    const qualityA = (a, qty) => {

        let total = a * qty
        
        if(qty > 13){
            let discount = 231 * qty
            let totalPrice = total - discount
            console.log('---------- Item A ----------')
            console.log('Total Harga Barang: Rp' + total)
            console.log('Potongan: Rp' + discount)
            console.log('Total yang harus dibayar: Rp' + totalPrice)
        } else {
            let discount = "Tidak ada potongan harga"
            let totalPrice = total
            console.log('---------- Item A ----------')
            console.log('Potongan: ' + discount)
            console.log('Total yang harus dibayar: Rp' + totalPrice)
            // console.log('Total harga asli: Rp' + total)
        }
    }

    const qualityB = (b, qty) => {
        let total = b * qty

        if(qty > 7){
            let discount = 0.23
            let totalPrice = total - (total * discount)
            console.log('---------- Item B ----------')
            console.log('Total Harga Barang: Rp' + total)
            console.log('Potongan: 23%')
            console.log('Total yang harus dibayar: Rp' + totalPrice)
        } else {
            let discount = 'Tidak ada potongan harga'
            let totalPrice = total
            console.log('---------- Item B ----------')
            console.log('Potongan: ' + discount)
            console.log('Total Total yang harus dibayar Rp' + totalPrice)
            // console.log('Total harga asli: Rp' + total)
        }
    }

    const qualityC = (c, qty) => {
        let total = c * qty
        let discount = 'Tidak ada potongan harga'
        let totalPrice = total
        
        console.log('---------- Item C ----------')
        console.log('Potongan: ' + discount)
        console.log('Total yang harus dibayar: Rp' + totalPrice)
    }

    qualityA(a, 14)
    qualityB(b, 8)
    qualityC(c, 50)
}

priceCount()