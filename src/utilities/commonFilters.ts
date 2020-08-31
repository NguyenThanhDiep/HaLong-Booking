/* eslint-disable prefer-const */
import Vue from 'vue';

Vue.filter('number-masked', function (value: any, delimiter: string = '.', numeralDecimalScale: number = 2, numeralDecimalMark: string = ',', prefix: string = '') {
    if (!value && value !== 0) return '';
    let parts, partSign, partSignAndPrefix, partInteger, partDecimal = '';
    // strip alphabet letters
    value = value.toString().replace(/[A-Za-z]/g, '')
        // replace the first decimal mark with reserved placeholder
        .replace(numeralDecimalMark, 'M')

        // strip non numeric letters except minus and "M"
        // this is to ensure prefix has been stripped
        .replace(/[^\dM-]/g, '')

        // replace the leading minus with reserved placeholder
        .replace(/^\-/, 'N')

        // strip the other minus sign (if present)
        .replace(/\-/g, '')

        // replace the minus sign (if present)
        .replace('N', '-')

        // replace decimal mark
        .replace('M', numeralDecimalMark);
    
    // strip any leading zeros
    value = value.replace(/^(-)?0+(?=\d)/, '$1');
    partSign = value.slice(0, 1) === '-' ? '-' : '';
    partSignAndPrefix = prefix + partSign;
    partInteger = value;
    if (value.indexOf(numeralDecimalMark) >= 0) {
        parts = value.split(numeralDecimalMark);
        partInteger = parts[0];
        partDecimal = numeralDecimalMark + parts[1].slice(0, numeralDecimalScale);
    }
    if(partSign === '-') {
        partInteger = partInteger.slice(1);
    }
    partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + delimiter);

    return partSignAndPrefix + partInteger.toString() + (numeralDecimalScale > 0 ? partDecimal.toString() : '');
});