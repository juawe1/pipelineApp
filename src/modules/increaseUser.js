var increaseUser = module.exports = {
    count: 1,
    add: function(){
        increaseUser.count += 1
        console.log(this.count)
    }
  }