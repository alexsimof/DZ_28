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
  let data = Date.parse(now) - Date.parse(dateBD)

  return year = Math.floor(data / (1000 * 60 * 60 * 24 * 30 * 12));
}
// console.log(getYourBd('1983-05-15'))

// task 4

function countDown(data) {
  let dt = Date.now();
  let newTime = new Date(data).getTime();
  let out = newTime - dt;
  let day = Math.floor(out / (1000 * 60 * 60 * 24) % 30)
  let year = Math.floor(out / (1000 * 60 * 60 * 24 * 30 * 12))
  let month = Math.floor(out / (1000 * 60 * 60 * 24 * 30) % 12)

  return {day: day, month: month, year: year}
}

// console.log(countDown('2025-05-10'))

// task 5

function deadline (timeout) {
  let dt = Date.now();
  let dl = new Date(timeout).getTime();
  let timeCheck = dl - dt;
  let day = Math.floor(timeCheck / (1000 * 60 * 60 * 24));
  return day

}

// console.log(deadline('2024-12-05'))

