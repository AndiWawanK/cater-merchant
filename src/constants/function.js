export const currencyFloat = (num) => {
    if(num !== undefined){
        if(num.toString().indexOf('.') != -1){
            return 'Rp. ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        } else {
            var rupiah = '';
            var numrev = num.toString().split('').reverse().join('');
            for (var i = 0; i < numrev.length; i++) if (i % 3 == 0) rupiah += numrev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        }
    } else {
        return 0
    }
}