var newUser = module.exports = {
    addUserBtn: function(){
        var btn = document.createElement('button');
        document.getElementById('userContainer').appendChild(btn)
        addAttr.newAttribute(btn, {"id":`user-${Counter.count}`,"value": document.querySelector("input").value, "type": "button"})
        btn.innerText = document.querySelector('input').value;
        btn.classList.add('user')
        newUser.addUserToFile(document.querySelector('input').value)
        document.querySelector('#userName').value = 'Enter user';
        btn.addEventListener("click", openCal)
        return
    },
    addUserToFile: function(user){
        fs.readFile(
            './users.txt',
            'utf-8',
            (err, file) => fs.writeFile(
              './users.txt',
              file.split('\n').map( (line) => `${line + user},`).join('\n'),
              (err) => {}
            )
        );
     
    }
}