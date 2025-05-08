const { log } = require("console");
const os = require("os")

console.log(os.freemem());  //number

console.log(os.version());  //window verison

console.log(os.EOL);  // blank space

console.log(os.availableParallelism());  //cpu core, 12threads

console.log(os.arch());   //identify the processor that node was compiled for: its 64 bit processor

// console.log(os.constants);  //os.constants is an object that contains operating system-related constants used by Node.js and the underlying C libraries (like POSIX error codes and signal names).

// console.log(os.cpus());  //model-ryzen // times-user,nice,sys,idle,irq

console.log(os.devNull); // It returns a string representing the path to the null device on the current operating system: , \\.\nul

console.log(os.endianness()); //It returns a string representing the byte order used by the system’s CPU. , Le-Little Endian

console.log(os.getPriority());  //Returns the priority of a process. If no argument is passed, it defaults to the current process (process.pid).  0 is the default priority for most processes.

console.log(os.homedir());  //It returns the absolute path of the current user's home directory, as a string./ \user\name

console.log(os.hostname());  //It returns the system hostname as a string — the network name assigned to the device. . //Laptop-E31CGJ0E

console.log(os.loadavg());








