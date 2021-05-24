module.exports = {
    getFileSuffix: function () {
        let today = new Date();
        return `_${today.getFullYear()}${(today.getMonth() + 1 + '').padStart(2, '0')}${(today.getDate() + '').padStart(2, '0')}`;
    }
}