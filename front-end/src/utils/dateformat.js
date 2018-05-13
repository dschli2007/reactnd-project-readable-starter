export const DateFormat = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  fill2Zeros: function(n) {
    var s = n.toString()
    if (s.length === 1) return '0' + s
    return s
  },
  day: function(timestamp) {
    var a = new Date(timestamp)
    var year = a.getFullYear()
    var month = this.months[a.getMonth()]
    var day = a.getDate()
    var hour = this.fill2Zeros(a.getHours())
    var min = this.fill2Zeros(a.getMinutes())
    return `${day}/${month}/${year} ${hour}:${min}`
  }
}
