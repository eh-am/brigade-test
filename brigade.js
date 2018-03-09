const { events, Job, Group } = require("brigadier")

events.on("push", () => {
  var hello = new Job("hello", "alpine:3.4", ["echo hello"])
  var goodbye = new Job("goodbye", "alpine:3.4", ["echo goodbye"])
  var helloAgain = new Job("hello-again", "alpine:3.4", ["echo hello again"])

  console.log("running")

  Group.runAll([hello, goodbye])
    .then( ()=> {
      helloAgain.run()
    })
})


events.on("exec", () => {
  var hello = new Job("hello", "alpine:3.4", ["echo hello"])
  var goodbye = new Job("goodbye", "alpine:3.4", ["echo goodbye"])
  var helloAgain = new Job("hello-again", "alpine:3.4", ["echo hello again"])

  console.log("running")
  
  Group.runAll([hello, goodbye])
    .then( ()=> {
      helloAgain.run()
    })
})