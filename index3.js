const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    func: () => { 
        const keys = Object.keys(student);
        return keys.length
    }
};

const student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
    age: 23,
    address: "world",
    func: () => { 
        const keys = Object.keys(student2);
        return keys.length
    }
};

alert (`Birinchi object = ${student.func()} . Ikkinchi object = ${student2.func()}`)