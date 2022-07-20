const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const numbers2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
module.exports = function toReadable (number) {
    if (number < 20) {
        return numbers[number];
    }
      const division = number%10;
    if (number < 100) {
        if (number%10 === 0) {
            return numbers2[Math.floor(number/10) - 2];
        } else {
            return numbers2[Math.floor(number/10) - 2] + " " + numbers[division];
        }
    }
    if (number < 1000) return numbers[Math.floor(number/100)] + " hundred" + (number%100 === 0 ? "": " " + toReadable(number%100));
    return numbers[Math.floor(number/1000)] + " thousand" + (number%1000 != 0 ? " " + toReadable(number%1000): "");
}