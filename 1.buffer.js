// 创建一个10位的二进制buffer容器(空的)
const buffer1 = Buffer.alloc(10)
const buffer = Buffer.allocUnsafe(10);

console.log(buffer);
console.log(buffer1);

// 将其他类型数据, 转二级制数据
const buffer2 = Buffer.from('abcd');
console.log(buffer2);
