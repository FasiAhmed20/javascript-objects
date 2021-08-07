// Object
var student ={
    name:'fasi',
    age:20,
    mobile:8892358867,
    address:{
        city:'rmg',
        state:'ka',
        pin:562159

    }

}
console.log(student)

// getting value using dot Notation
console.log(student.name)
// getting value using bracket notation
console.log(student['name']);
// adding key -value to the Object
student.graduated=false;
console.log(student);

// function inside object and array inside object
var video={
    name:'access101',
    play:function(){
        console.log('video played')
    },
    timer:[0,15,20]
}

// assigning one Object to another
var student2=student
console.log(student2)