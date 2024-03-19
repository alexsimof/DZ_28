// task 1

const fileSystem = {
 name: "root",
 type: "folder",
 children: [
  {
   name: "folder1",
   type: "folder",
   children: [
    { name: "file1.txt", type: "file" },
    { name: "file2.txt", type: "file" }
   ]
  },
  {
   name: "folder2",
   type: "folder",
   children: [
    { name: "file3.txt", type: "file" }
   ]
  }
 ]
};

Object.freeze(fileSystem)
Object.freeze(fileSystem.children)
Object.freeze(fileSystem.children.children)

// task 2

function getDurationTime(time1, time2) {
  let dt = Date.parse(time2) - Date.parse(time1);
  let day = Math.ceil(dt / (1000 * 3600 * 24));
  return day

}
// console.log(getDurationTime("2022-02-22", "2024-03-19"))

// task 3

function getYourBd(dateBD) {
  let now = new Date();
  let year = Date.parse(now) - Date.parse(dateBD)

  return year = Math.ceil(year);
}
console.log(getYourBd('1976.08.23'))

