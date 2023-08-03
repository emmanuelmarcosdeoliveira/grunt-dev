module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });
  grunt.registerTask("tarefaAssincrona", function () {
    var done = this.async();
    setTimeout(function () {
      console.log("Tarefa assíncrona executada com sucesso!");
      done();
    }, 3000);
  });
  grunt.registerTask("default", ["tarefaAssincrona"]);
};
