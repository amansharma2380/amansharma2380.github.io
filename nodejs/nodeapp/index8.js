import bcrypt from "bcrypt";
const pwd = "pass123";
const hashedpwd = await bcrypt.hash(pwd, 10);
console.log(hashedpwd);
const check = await bcrypt.compare("pass123","$2b$10$FktzUgxURfvs7eScNptDguon9frlPXtUa1TUP3WVKCCL5yjSM3KGC")
console.log(check);
