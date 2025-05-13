// const { log } = require("console");
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

console.log(os.loadavg()); //A method of the os module that returns an array of 3 numbers representing the 1-minute, 5-minute, and 15-minute load averages of the system.

console.log(os.machine());  // This method returns a string identifying the hardware machine architecture, like 'x86_64', 'arm64', etc.

console.log(os.networkInterfaces()); // This method returns an object containing information about each network interface on the system, such as IP addresses, MAC addresses, and interface types.

console.log(os.platform()); //This method returns a string identifying the OS platform Node.js is running on.


console.log(os.release());  //This method returns a string identifying the OS kernel version or release number.

console.log(os.tmpdir());  //A method that returns the absolute path of the directory where temporary files should be stored.


console.log(os.totalmem()); // A method that returns the total physical memory available on the system in bytes.

console.log(os.type());  //Returns the name of the operating system kernel, similar to the output of the Unix uname -s command.

console.log(os.uptime()); //This method returns the system uptime, which is the amount of time the system has been running since the last reboot.

// console.log(os.userInfo([options]));  //This method returns an object containing details about the current user's information, such as username, home directory, and shell.

















