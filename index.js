const school = (name) => {

    const class_name = ["햇님반","달님반","별님반","지구반","바다반","지구방위대","나무반","코드반"];

    const randomValue = class_name[Math.floor(Math.random() * class_name.length)];

    return randomValue;
}

export { school };