import React from 'react';

const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          nombre: {""}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          propietario: {""}
          <span className="font-normal normal-case">Miguel</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          email: {""}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          fecha alta: {""}
          <span className="font-normal normal-case">30 Diciembre de 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          sintomas: {""}
          <span className="font-normal normal-case">
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí, contenido aquí". Estos
            textos hacen parecerlo un español que se puede leer.
          </span>
        </p>
      </div>
    );
};

export default Paciente;