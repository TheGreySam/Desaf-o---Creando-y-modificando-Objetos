function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes;
}

Consultorio.prototype.todosLosPacientes = function () {
  console.log(Paciente)
}

function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  Object.defineProperty(this, "nombre", {
    get: function () {
      return _nombre;
    },
    set: function (nuevoNombre) {
      _nombre = nuevoNombre;
    },
  });

  Object.defineProperty(this, "edad", {
    get: function () {
      return _edad;
    },
    set: function (nuevaEdad) {
      _edad = nuevaEdad;
    },
  });

  Object.defineProperty(this, "rut", {
    get: function () {
      return _rut;
    },
    set: function (nuevoRut) {
      _rut = nuevRut;
    },
  });

  Object.defineProperty(this, "diagnostico", {
    get: function () {
      return _diagnostico;
    },
    set: function (nuevoDiagnostico) {
      _diagnostico = nuevoDiagnostico;
    },
  });

}

const PacienteRobertoHurtado = new Paciente("Roberto", 25, "1.000.555-5", "Demasiada sensualidad");
console.log(PacienteRobertoHurtado.nombre);
